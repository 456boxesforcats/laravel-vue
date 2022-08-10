<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-3 mb-3">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Email</label>
                            <div class="col-md-6">
                                <base-input type="email" :error="errors.email" v-model="user.email"/>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Password</label>

                            <div class="col-md-6">
                                <base-input type="password" :error="errors.password" v-model="user.password"/>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="remember" v-model="user.remember">

                                    <label class="form-check-label" for="remember">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary me-3">
                                    Login
                                </button>

                                <router-link :to="{ name: 'register' }" class="btn btn-link">
                                    Register
                                </router-link>

                                <router-link exact-active-class="active" :to="{ name: 'forgotPassword' }"
                                             class="btn btn-link">
                                    Forgot your password?
                                </router-link>
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
            user: {
                email: '',
                password: '',
                remember: false
            },
            errors: {}
        }
    },
    methods: {
        async login() {
            await
                this.axios.post('/api/login', this.user).then(response => {
                    this.$router.push({
                        name: 'home'
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
