<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand" href="#">Laravel & Vue</router-link>

            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link exact-active-class="active" :to="{ name: 'home' }" class="nav-item nav-link">
                        Home
                    </router-link>
                    <router-link exact-active-class="active" :to="{ name: 'postList' }"
                                 class="nav-item nav-link">
                        Posts
                    </router-link>
                </div>
            </div>

            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#"
                       data-bs-toggle="dropdown">
                        {{ user.name }}
                    </a>

                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item" v-on:click="logout()">
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: ''
            }
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        async getUser() {
            await
                this.axios.get('/api/user').then(response => {
                    this.user.name = response.data.name
                }).catch(error => {
                    console.log(error)
                })
        },
        async logout() {
            await
                this.axios.post('/api/logout', this.user).then(response => {
                    this.$router.push({
                        name: 'login'
                    })
                }).catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
