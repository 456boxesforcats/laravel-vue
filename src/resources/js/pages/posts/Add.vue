<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    Add Post
                </div>

                <div class="card-body">
                    <form @submit.prevent="create">
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
                                <button type="submit" class="btn btn-primary">Save</button>
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
                body: ''
            },
            errors: {}
        }
    },
    methods: {
        async create() {
            await this.axios.post('/api/post', this.post).then(response => {
                this.$router.push({
                    name: 'postList',
                    params: {
                        successMsg: response.data.message
                    }
                })
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
