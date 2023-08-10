<template>

    
    <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <form @submit.prevent="performLogin">
                        <div>
                            <h1 class="text-2xl font-semibold">Login</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="relative">
                                    <label for="usrername" class="block font-medium mr-32">Username</label>
                                    <input type="text" v-model="username"  class="mt-1 p-2 rounded border w-60"
                                        required>
                                </div>
                                <div class="relative">
                                    <label for="password" class="block font-medium mr-32">Password</label>
                                    <input type="password" v-model="password"
                                        class="mt-1 p-2 rounded border w-60" required>
                                </div>
                                <div class="relative">
                                    <button  type="submit" class="bg-green-500 text-white rounded-md px-2 py-1">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('Auth', ['login']),
        async performLogin() {
            const credentials = {
                username: this.username,
                password: this.password,
            };

            const success = await this.login(credentials);

            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/produk');
            } else {
                alert("Login Failed");
            }
        },
    },
};
</script>