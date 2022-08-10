<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    Update Post
                </div>

                <div class="card-body">
                    <div class="text-center" v-if="isLoading">
                        <vue-loaders-ball-beat/>
                    </div>

                    <form @submit.prevent="update" v-else>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <base-input type="text" :error="errors.title" v-model="post.title"/>
                                </div>
                            </div>

                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Body</label>
                                    <base-textarea :error="errors.body" v-model="post.body"/>
                                </div>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
                _method: 'patch'
            },
            errors: [],
            isLoading: true
        }
    },
    mounted() {
        this.editPost()
    },
    methods: {
        async editPost() {
            await this.axios.get(`/api/post/${this.$route.params.id}/edit`).then(response => {
                const {title, body} = response.data
                this.post.title = title
                this.post.body = body
                this.isLoading = false
            }).catch(error => {
                console.log(error)
            })
        },
        async update() {
            await this.axios.post(`/api/post/${this.$route.params.id}`, this.post).then(response => {
                this.$router.push({name: 'postList', params: {
                        successMsg: response.data.message
                    }})
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors || {}
                } else {
                    console.log(error)
                }
            })
        }
    }
}
</script>
