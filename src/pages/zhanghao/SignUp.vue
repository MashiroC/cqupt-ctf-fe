<template>
    <div class="signup">
        <h1 style="padding-bottom: 1rem">SignUp</h1>
        <el-form :model="loginData" status-icon :rules="rules" ref="loginData">
            <el-form-item label="Username" prop="username">
                <el-input type="text" prefix-icon="el-icon-edit" v-model="loginData.username"
                          autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input type="text" prefix-icon="el-icon-message" v-model="loginData.email"
                          autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input prefix-icon="el-icon-goods" type="password" v-model="loginData.password"
                          autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password again" prop="passwordAgain">
                <el-input prefix-icon="el-icon-goods" type="password" v-model="loginData.passwordAgain"
                          autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginData')">Sign up !</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input username'));
                }
                callback();
            };
            let validateEmail = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input email'))
                }
                callback();
            };
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input password'));
                }
                callback();
            };
            let validatePasswordAgain = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input email'))
                }
                if (value !== this.loginData.password) {
                    callback(new Error('两次密码输入不一致'))
                }
                callback();
            };
            return {
                loginData: {
                    username: '',
                    password: '',
                    passwordAgain: '',
                    email: '',
                    error: ''
                },
                rules: {
                    username: [
                        {validator: validateUsername, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ],
                    passwordAgain: [
                        {validator: validatePasswordAgain, trigger: 'blur'}
                    ],
                    email: [
                        {validator: validateEmail, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post(this.apiDomain + "/signup", {
                            username: this.loginData.username,
                            password: this.loginData.password,
                            email: this.loginData.email
                        }).then(function (res) {
                            res = res.body;
                            switch (res.status) {
                                case 10000:
                                    sessionStorage.setItem("username", res.data.username);
                                    sessionStorage.setItem("jwt", res.data.jwt);
                                    let uri = "/#/"
                                    if (this.$route.query.origin !== undefined) {
                                        uri += this.$route.query.origin
                                    }
                                    location.href = uri
                            }
                        }, function (res) {
                            this.loginData.error = 'password error or username not exist';
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>
    .signup {
        width: 30%;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
