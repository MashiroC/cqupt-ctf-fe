<template>
    <el-form :model="loginData" status-icon :rules="rules" ref="loginData" label-width="100px" class="demo-ruleForm">
        <el-form-item label="Username" prop="username">
            <el-input type="text" prefix-icon="el-icon-edit" v-model="loginData.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input type="text" prefix-icon="el-icon-message" v-model="loginData.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="loginData.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password again" prop="passwordAgain">
            <el-input type="password" v-model="loginData.passwordAgain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginData')">提交</el-button>
            <el-button @click="resetForm('loginData')">重置</el-button>
        </el-form-item>
    </el-form>
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
                        alert('submit!');
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
