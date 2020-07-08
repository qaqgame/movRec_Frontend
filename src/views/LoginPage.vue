<template>
    <div class="LoginPage">
        <el-row>
            <el-col :xl="{span: 6, offset:4}" :lg="{span: 6, offset:4}" :md="{span: 6, offset:4}" :sm="{span:6, offset:4}" :xs="{span:16, offset:4}" class="ProjectDes">
                <h1>错影时光</h1>
                <h2>回味电影，珍惜时光</h2>
            </el-col>
            <el-col :xl="{span: 6, offset:14}" :lg="{span: 6, offset:14}" :md="{span: 9, offset:10}" :sm="{span:10, offset:10}" :xs="{span:16, offset:4}">
                <LoginRegister ref="LoginRegisterForm" class="CardPos" v-on:SubmitForm="SubmitForm"></LoginRegister>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    import LoginRegister from "../components/LoginRegister";
    import { Notification } from 'element-ui';
    import router from "../router";
    export default {
        name: "LoginPage",
        components: {LoginRegister},
        methods:{
            SubmitForm: function (data) {
                window.console.log(data);
                let v, url, urlTarget;
                if (data === "login") {
                    v = this.$refs.LoginRegisterForm.LoginFormValue();
                    urlTarget = "/login/";
                } else if (data === "register") {
                    v = this.$refs.LoginRegisterForm.RegisterFormValue();
                    urlTarget = "/sign-up/";
                }
                url = "http://localhost:8000"+urlTarget;
                window.console.log(v);
                // ajax请求
                this.$axios.post(url, v).then((res) => {
                    window.console.log(res.data);
                    if (res.data.result === "failed") {
                        if (res.data.formtype === "login") {
                            this.$options.methods.OperationRes('登录失败', res.data.reason, "failed");
                        } else if (res.data.formtype === "register") {
                            this.$options.methods.OperationRes('注册失败', res.data.reason, "failed");
                        }
                    } else {
                        if (res.data.formtype === "register") {
                            this.$options.methods.OperationRes('注册成功', res.data.reason, "success");
                            this.$refs.LoginRegisterForm.resetForm('RegisterForm');
                            this.$refs.LoginRegisterForm.reverseCard();
                        } else if (res.data.formtype === "login") {
                            const user = res.data.username;
                            window.console.log(user);
                            router.push({name: 'user', params: { id : user }})
                        }
                    }
                })
            },
            OperationRes: function (title, message, notifyType) {
                if (notifyType === "failed") {
                    Notification.error({
                        title: title,
                        message: message
                    });
                } else if (notifyType === "success") {
                    Notification.success({
                        title: title,
                        message: message
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .CardPos {
        margin-top:150px;
    }

    .ProjectDes {
        margin-top: 150px;  
        position: absolute;
    }
    .ProjectDes h1{
        text-align: left;
    }

    .ProjectDes h2 {
        text-align: left;
    }

    .LoginPage {
        background-image: url("../assets/LoginPage_BackGround.png");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 768px){
        .ProjectDes {
            position: absolute;
            margin-top: 150px;
        }


        .CardPos {
            margin-top: 300px;
        }
    }
</style>