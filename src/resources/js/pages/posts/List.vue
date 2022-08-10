<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"postAdd"}' class="btn btn-primary">Create</router-link>
        </div>

        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    Categories
                </div>

                <div class="card-body">
                    <div class="text-center" v-if="isLoading">
                        <vue-loaders-ball-beat/>
                    </div>

                    <div v-else>
                        <b-alert
                            v-model="successMsg"
                            dismissible
                            variant="success">
                            {{ successMsg }}
                        </b-alert>

                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody v-if="posts.length > 0">
                                <tr v-for="(post, key) in posts" :key="key">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.body }}</td>
                                    <td>
                                        <button type="button" @click="confirmDeletePost(post.id)"
                                                v-b-modal="'delete-post'"
                                                class="btn btn-danger float-right">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                        <router-link :to="{name: 'postEdit', params:{id: post.id}}"
                                                     class="btn btn-success me-1 float-right">
                                            <i class="bi bi-pencil"></i>
                                        </router-link>
                                    </td>
                                </tr>
                                </tbody>
                                <tbody v-else>
                                <tr>
                                    <td colspan="4" class="text-center">No posts found.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <b-modal id="delete-post" @ok="deletePost(deletePostId)">
        Are you sure you want to delete the post?
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            isLoading: true,
            deletePostId: null,
            successMsg: ''
        }
    },
    mounted() {
        this.getCategories()
        this.successMsg = this.$route.params.successMsg
    },
    methods: {
        async getCategories() {
            await this.axios.get('/api/post').then(response => {
                this.posts = response.data
            }).catch(error => {
                console.log(error)
                this.posts = []
            }).finally(()=> {
                this.isLoading = false
            })
        },
        confirmDeletePost(id) {
            this.deletePostId = id;
        },
        deletePost(id) {
            this.axios.delete(`/api/post/${id}`).then(response => {
                this.posts = this.posts.filter(p => p.id !== id)
                this.successMsg = response.data.message
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
