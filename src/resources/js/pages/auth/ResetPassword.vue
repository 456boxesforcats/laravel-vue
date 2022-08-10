<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-3 mb-3">
                <div class="card-header">Reset password</div>

                <div class="card-body">
                    <b-alert
                        v-model="errors.email"
                        variant="danger">
                        Reset password token is invalid or expired.
                    </b-alert>

                    <form @submit.prevent="login" v-if="!errors.email">
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">New password</label>

                            <div class="col-md-6">
                                <base-input type="password" :error="errors.password" v-model="user.password"/>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Confirm password</label>

                            <div class="col-md-6">
                                <base-input type="password" :error="errors.password_confirmation"
                                            v-model="user.password_confirmation"/>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary me-3">
                                    Reset password
                                </button>

                                <router-link exact-active-class="active" :to="{ name: 'login' }" class="btn btn-link">
                                    Login
                                </router-link>

                                <router-link exact-active-class="active" :to="{ name: 'register' }"
                                             class="btn btn-link">
                                    Register
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
                email: this.$route.query.email,
                token: this.$route.params.hash,
                password: '',
                password_confirmation: ''
            },
            errors: {}
        }
    },
    methods: {
        async login() {
            await
                this.axios.post('/api/password/reset/', this.user).then(response => {
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
