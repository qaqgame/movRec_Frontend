<template>
    <div class="SingleChildrenComment">
        <el-row type="flex" justify="start">
            <el-col :span="3">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </el-col>
            <el-col>
                <el-row class="replytrhead" type="flex" justify="start" align="middle">
                    <el-col style="width: auto">
                        <p class="lefttxt">{{childReply.name}}：</p>
                    </el-col>
                    <el-col>
                        <p class="lefttxt">{{childReply.content}}</p>
                    </el-col>
                </el-row>
                <el-row class="replytrextra" type="flex" justify="start" align="middle">
                    <el-col class="autowidth extraColor"><p class="lefttxt smallsize">{{getTime}}</p></el-col>
                    <el-col class="autowidth palleft extraColor"><p class="smallsize"><i class="iconfont icon-dianzan1"></i>:{{childReply.agree}}</p></el-col>
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
            }
        },
        props:['childReply'],
        computed: {
            getTime() {
                let tmp = this.childReply.time;
                let ts = tmp.split("T");
                let res = "";
                res += ts[0];
                res += " ";
                res += ts[1].split(".")[0];
                return res;
            }
        },
        watch:{
            childReply: function () {
                window.console.log(this.childReply)
            }
        },
        methods: {
            raiseReplyTab() {
                let re = {
                    "rid" : this.childReply.replyid,
                    "status": true
                };
                this.$emit("tagglere", re);
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
</style>