<template>
    <div class="LoginRegister">
        <transition class="transition-box" name="el-fade-in-linear">
            <el-row v-if="RegisterActive" :gutter="10" class="CardShow">
                <el-col :span="18" :offset="3">
                    <h2>注册</h2>
                    <h4>创建一个免费账户</h4>
                    <el-form :label-position="labelPosition" label-width="80px" :model="RegisterForm" ref="RegisterForm">
                        <el-form-item prop="name" label="用户名" size="small" align="left" :rules="[
                {required: true, message:'请输入用户名', trigger: 'blur'},
                ]">
                            <el-input v-model="RegisterForm.name"></el-input>
                        </el-form-item>

                        <el-form-item prop="pwd" label="密码" size="small" align="left" :rules="[
                {required: true, message:'请输入密码', trigger: 'blur'},
                ]">
                            <el-input v-model="RegisterForm.pwd" show-password></el-input>
                        </el-form-item>

                        <el-form-item prop="email" label="邮箱" size="small" align="left" :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]">
                            <el-input v-model="RegisterForm.email"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('RegisterForm')">立即创建</el-button>
                            <el-button @click="resetForm('RegisterForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </transition>
        <transition class="transition-box" name="el-fade-in-linear">
            <el-row v-if="LoginActive" :gutter="10" class="CardShow">
                <el-col :span="18" :offset="3">
                    <h2>登录</h2>
                    <h4>加入错影时光</h4>
                    <el-form class="LoginForm" :label-position="labelPosition" label-width="80px" :model="LoginForm" ref="LoginForm">
                        <el-form-item prop="name" label="用户名" size="small" align="left" :rules="[
                        {required: true, message:'请输入用户名', trigger: 'blur'},
                        ]">
                                        <el-input v-model="LoginForm.name"></el-input>
                                    </el-form-item>

                                    <el-form-item prop="pwd" label="密码" size="small" align="left" :rules="[
                        {required: true, message:'请输入密码', trigger: 'blur'},
                        ]">
                            <el-input v-model="LoginForm.pwd" show-password></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('LoginForm')">立即登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </transition>

        <div class="BtnGroup">
            <el-button v-show="!LoginActive" @click="reverseCard()" type="primary"><i class="el-icon-arrow-left el-icon--left"></i>前往登录</el-button>
            <el-button v-show="!RegisterActive" @click="reverseCard()" type="primary">前往注册<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            <el-button type="primary" style="margin-left: 20px!important;" @click="toShowMovie()">预览片库<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LoginRegister",
        data: function () {
            return {
                LoginActive: true,
                RegisterActive: false,
                labelPosition: 'top',
                LoginForm: {
                    formType:'login',
                    name: '',
                    pwd: '',
                },
                RegisterForm: {
                    formType:'register',
                    name:'',
                    pwd:'',
                    email:''
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit("SubmitForm", this[formName].formType)
                    } else {
                        this.$notify.error({
                            title: '登录失败',
                            message: '请检查表单填写是否正确'
                        });
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            reverseCard() {
                this.LoginActive = !this.LoginActive;
                this.RegisterActive = !this.RegisterActive;
            },
            LoginFormValue: function () {
                return {
                    name: this.LoginForm.name,
                    pwd: this.LoginForm.pwd
                }
            },
            RegisterFormValue: function () {
                return {
                    name: this.RegisterForm.name,
                    pwd: this.RegisterForm.pwd,
                    email: this.RegisterForm.email
                }
            },
            toShowMovie() {
                this.$router.push({path:'/showmovie'})
            }
        }
    }
</script>

<style scoped>
    .el-button+.el-button{
        margin-left: 0!important;
    }
</style>

<style>
    * {
        margin: 0;
    }

    .LoginRegister {
        position: relative;
    }

    .CardShow {
        height: 450px;
        width: 100%;
        background-color: whitesmoke;
        border-radius: 15px;
        position: absolute !important;
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

    .LoginForm {
        margin-top: 50px;
    }

    .BtnGroup {
        position: absolute;
        top: 470px;
        left: 0;
    }

</style>