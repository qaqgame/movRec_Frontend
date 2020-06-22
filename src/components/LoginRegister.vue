<template>
    <div class="LoginRegister">
        <div class="Register" :class="{CardShow: isActive}">
            <div class="container">
                <h2>注册</h2>
                <h4>创建一个免费账户</h4>
                <el-form :label-position="labelPosition" label-width="80px" :model="LoginForm" ref="LoginForm">
                    <el-form-item prop="name" label="用户名" size="small" align="left" :rules="[
                    {required: true, message:'请输入用户名', trigger: 'blur'},
                    ]">
                        <el-input v-model="LoginForm.name"></el-input>
                    </el-form-item>

                    <el-form-item prop="pwd" label="密码" size="small" align="left" :rules="[
                    {required: true, message:'请输入密码', trigger: 'blur'},
                    ]">
                        <el-input v-model="LoginForm.pwd"></el-input>
                    </el-form-item>

                    <el-form-item prop="email" label="邮箱" size="small" align="left" :rules="[
                      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]">
                        <el-input v-model="LoginForm.email"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('LoginForm')">立即创建</el-button>
                        <el-button @click="resetForm('LoginForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LoginRegister",
        data: function () {
            return {
                isActive: true,
                labelPosition: 'top',
                LoginForm: {
                    name: '',
                    pwd: '',
                    email: ''
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        alert('submit failed!');
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
    * {
        margin: 0;
    }

    .CardShow {
        height: 450px;
        width: 360px;
        background-color: whitesmoke;
        border-radius: 15px;
    }

    .CardShow h2 {
        color: #000000;
        font-size: 28px;
        padding: 40px 0 0 0;
        text-align: left;
    }

    .CardShow h4 {
        color: #000000;
        font-size: 20px;
        margin: 5px 0 0 0;
        text-align: left;
    }

    .container {
        width: 280px;
        margin: 0 auto;
    }
</style>