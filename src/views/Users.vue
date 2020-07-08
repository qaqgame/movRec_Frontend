<template>
    <div class="Users">
        <img style="position: absolute;height: 300px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <PageHeader style="z-index: 10;" class="myHeader" v-bind:visible="false"></PageHeader>
        <UserSpaceMenuField style="z-index: 11;" pdtop="60px" v-bind:data="data" v-bind:user-id="uid"></UserSpaceMenuField>
        <el-row style="background-color: #f4f5f7;height: 80px"></el-row>
        <PreferSelect v-bind:dialog-vis="defaultVis"></PreferSelect>
    </div>
</template>

<script>
    import UserSpaceMenuField from '../components/UserSpaceMenuField'
    import PageHeader from '../components/PageHeader.vue'
    import PreferSelect from "../components/PreferSelect";

    export default {
        name: "Users",
        props: ['id'],
        components:{PreferSelect, UserSpaceMenuField,PageHeader},
        data() {
            return {
                src1:require("../assets/Movie_Background1.png"),
                uid:'',
                data:'',
                defaultVis: false,
            }
        },
        beforeRouteEnter(to,form,next) {
            next(vm => {
                vm.$axios.get("http://120.79.240.163:8000/loginVerify/",{}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "failed") {
                        vm.$notify({
                            title: '无法查看',
                            message: '查看个人空间前请先登陆',
                            type: 'error'
                        });
                        vm.$router.push({path:"/"})
                    }
                })
            })
        },
        created() {
            // 获取用户数据
            this.fetchData(this.id)
        },
        watch: {
            //todo:监听路由变化
            $route(to,from) {
                window.console.log(to, from)
                if (to.name === from.name) {
                    this.$router.go(0);
                }
            }
        },

        methods: {
            fetchData(un) {
                window.console.log("get");
                let url = "http://120.79.240.163:8000/user/"+un;
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    this.uid = res.data.data.userrelated.username;
                    this.data = res.data.data;
                    this.defaultVis = this.data.userrelated.newuser;
                    window.console.log("default: ",this.defaultVis);
                })
            }
        }
    }

</script>

<style scoped>
    .Users {
        background-color: #f4f5f7;
        z-index: -10;
    }
</style>