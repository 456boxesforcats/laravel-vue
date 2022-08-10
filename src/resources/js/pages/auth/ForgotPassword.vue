<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-3 mb-3">
                <div class="card-header">Reset password</div>

                <div class="card-body">
                    <div v-if="isEmailSent" class="text-center">
                        Please check your email.
                    </div>

                    <form @submit.prevent="login" v-if="!isEmailSent">
                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>

                            <div class="col-md-6">
                                <base-input type="email" :error="errors.email" v-model="user.email"/>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary me-3">
                                    Reset password
                                </button>

                                <router-link :to="{ name: 'login' }" class="btn btn-link">
                                    Login
                                </router-link>

                                <router-link :to="{ name: 'register' }" class="btn btn-link">
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
                email: ''
            },
            isEmailSent: false,
            errors: {}
        }
    },
    methods: {
        async login() {
            await
                this.axios.post('/api/password/forgot', this.user).then(response => {
                    this.isEmailSent = true
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
