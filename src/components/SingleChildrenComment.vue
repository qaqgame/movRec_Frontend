<template>
    <div class="SingleChildrenComment">
        <el-row type="flex" justify="start">
            <el-col :span="3">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </el-col>
            <el-col>
                <el-row class="replytrhead" type="flex" justify="start" align="middle">
                    <el-col style="width: auto">
                        <p class="lefttxt">{{childreply.name}}<span v-if="childreply.target" class="tgt">回复@<span
                                @click="toUser(childreply.target)" class="pointer">{{childreply.target}}</span></span>：</p>
                    </el-col>
                    <el-col style="width: auto">
                        <p class="lefttxt">{{childreply.content}}</p>
                    </el-col>
                </el-row>
                <el-row class="replytrextra" type="flex" justify="start" align="middle">
                    <el-col class="autowidth extraColor"><p class="lefttxt smallsize">{{getTime}}</p></el-col>
                    <el-col class="autowidth palleft extraColor pointer">
                        <p class="smallsize" @click="childAgree()"><i class="iconfont"
                           v-bind:class="{'icon-dianzan1':!childreply.agreed,'icon-dianzan2':childreply.agreed}"
                           style="color: #00A1D6"></i> {{childreply.agree}}</p>
                    </el-col>
                    <el-col class="autowidth palleft extraColor"><p class="smallsize pointer" @click="raiseReplyTab()">回复</p></el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "SingleChildrenComment",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                size:"small",
                childreply: this.childReply,
            }
        },
        props:['childReply','movieName','checkLogin','movId'],
        computed: {
            getTime() {
                let tmp = this.childreply.time;
                let ts = tmp.split("T");
                let res = "";
                res += ts[0];
                res += " ";
                res += ts[1].split(".")[0];
                return res;
            }
        },
        watch: {
            checkLogin: function () {
                window.console.log("checkLogin: ",this.checkLogin);
            }
        }
        ,
        methods: {
            raiseReplyTab() {
                let re = {
                    "rid" : this.childreply.replyid,
                    "status": true
                };
                this.$emit("tagglere", re);
            },
            childAgree() {
                if (!this.checkLogin) {
                    this.$router.push({path:'/'});
                    // todo: notify:请先登录
                    return;
                }
                let url;
                if (this.childreply.agreed) {
                    url = "http://120.79.240.163:8000/cancelagree";
                } else  {
                    url = "http://120.79.240.163:8000/agree";
                }
                this.$axios.get(url,{
                    params:{
                        "movid":this.movId,
                        "type":"Reply",
                        "target":this.childreply.replyid
                    }
                }).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.childreply.agreed = !this.childreply.agreed;
                        this.childreply.agree = res.data.data.agreecount;
                    }
                })
            },
            toUser(t) {
                this.$router.push({"path":'/user/'+t})
            }
        }
    }
</script>

<style scoped>
    .lefttxt {
        text-align: left;
    }

    .smallsize {
        font-size: 14px;
    }

    .pointer {
        cursor: pointer;
    }

    .autowidth {
        width: auto;
    }

    .extraColor {
        color: #99A2AA
    }

    .palleft{
        margin-left: 20px;
    }

    .replytrhead {
        margin: 5px;
    }

    .replytrextra {
        margin: 5px;
    }

    .tgt {
        font-weight: bold;
        color: #00A1D6
    }
</style>