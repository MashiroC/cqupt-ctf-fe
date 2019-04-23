<template>
    <!--<div class="level">-->
    <!--<div class="level-item">-->
    <div class="login">
        <h1 style="padding-bottom: 1rem">Login</h1>
        <el-form :model="loginData" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="Username" prop="username">
                <el-input prefix-icon="el-icon-edit" type="text" v-model="loginData.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password" :error="loginData.error">
                <el-input prefix-icon="el-icon-goods" type="password" v-model="loginData.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="text-align: left">
                <el-button type="primary" @click="submitForm('loginData')">Login !</el-button>
                <a href="/#/forgetPassword" style="padding-left: 1rem">Forget your password?</a>
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
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input password'));
                }
                callback();
            };
            return {
                loginData: {
                    username: '',
                    password: '',
                    error: ''
                },
                rules: {
                    username: [
                        {validator: validateUsername, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //TODO:登陆注册 前后端交互
                        this.loginData.error='password error or username not exist';
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        name: "Login"
    }
</script>

<style scoped>
    .login {
        width: 30%;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
