<template>
    <div class="SingleComment">
        <el-row type="flex" justify="start">
            <el-col :span="2">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </el-col>
            <el-col :span="16">
                <el-divider class="slimLine"></el-divider>
                <el-row class="comUser"><h3 class="lefttxt">{{replydata.name}}</h3></el-row>
                <el-row class="comRate"><el-rate class="lefttxt"
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                </el-rate></el-row>
                <el-row class="comCnt"><p class="lefttxt">{{replydata.content}}</p></el-row>
                <el-row class="comExtra" type="flex" justify="start" align="middle">
                    <el-col class="autowidth extraColor"><p class="lefttxt smallsize">{{getTime}}</p></el-col>
                    <el-col class="autowidth palleft extraColor pointer">
                        <p class="smallsize" @click="agree()"><i class="iconfont"
                                                v-bind:class="{'icon-dianzan1':!replydata.agreed,'icon-dianzan2':replydata.agreed}"
                                                style="color: #00A1D6"></i> {{replydata.agree}}</p>
                    </el-col>
                    <el-col  class="autowidth palleft extraColor"><p class="smallsize pointer" @click="openReplyTab()">回复</p></el-col>
                </el-row>
                <SingleChildrenComment v-for="item in getChildrenComs" v-bind:key="item.replyid"
                                       v-bind:child-reply="item"
                                       v-on:tagglere="openReTabFC" v-bind:check-login="haslogin"></SingleChildrenComment>
                <el-row class="autowidth lefttxt extraColor smallsize" v-if="ifshowing">
                    <el-col :span="21" :offset="1">
                        <p class="pointer" @click="showMore()">{{showFlag}}</p>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="start" v-if="replytoreply">
                    <el-col :span="3">
                        <el-avatar :size="size" :src="circleUrl"></el-avatar>
                    </el-col>
                    <el-col :span="16">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 2}"
                                placeholder="请输入内容"
                                v-model="textarea" class="txtarea">
                        </el-input>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="" @click="replyReply()">回复评论</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import SingleChildrenComment from "./SingleChildrenComment";
    export default {
        name: "SingleComment",
        components: {SingleChildrenComment},
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                size:this.headSize,
                replydata: this.replyData,
                value: this.replyData.score,
                isActive:true,
                textarea: '',
                replytoreply:false,
                targetReplyId: this.replyData.replyid,
                showNum:"less",
                showFlag:"查看更多",
                haslogin: this.hasLogin,
            }
        },
        props:['replyData','headSize','moviename','hasLogin'],
        computed: {
            getTime() {
                let tmp = this.replydata.time;
                let ts = tmp.split("T");
                let res = "";
                res += ts[0];
                res += " ";
                res += ts[1].split(".")[0];
                return res;
            },
            //获取一条评论下的子评论
            getChildrenComs() {
                //window.console.log("this reply: ",this.replydata);
                if (this.showNum === "less") {
                    return this.getItemReplys(this.replydata).slice(0,3)
                } else {
                    return this.getItemReplys(this.replydata);
                }
            },
            ifshowing() {
                return this.getItemReplys(this.replydata).length > 3
            }
        },
        methods: {
            openReplyTab() {
                this.targetReplyId = this.replydata.replyid;
                window.console.log("target: ",this.targetReplyId);
                this.replytoreply = !this.replytoreply;
            },
            getItemReplys(item) {
                let res = [];
                for (let i = 0; i < item.reply.length; i++) {
                    res.push(item.reply[i]);
                    this.getItemReplys(item.reply[i]).forEach(item => {
                        res.push(item);
                    });
                }
                return res;
            },
            replyReply() {
                window.console.log("logined?",this.haslogin);
                if (!this.haslogin) {
                    this.$router.push({path:'/'});
                    // todo: notify:请先登录
                    return;
                }
                let url = "http://localhost:8000/createreply/";
                let params = {
                    "type":"reply",
                    "content": this.textarea,
                    "replyid": this.targetReplyId,
                    "moviename":this.moviename
                };
                window.console.log(url,params);
                this.$axios.post(url,params).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.replydata.reply.push(res.data.data);
                        this.replytoreply = false;
                        this.textarea = '';
                    }
                })
            },
            openReTabFC: function (data) {
                this.targetReplyId = data.rid;
                this.replytoreply = data.status;
                window.console.log("target: ",this.targetReplyId)
            },
            showMore() {
                if (this.showNum === "less") {
                    this.showNum = "more";
                    this.showFlag = "显示更少"
                } else {
                    this.showNum = "less";
                    this.showFlag = "查看更多"
                }
            },
            agree() {
                window.console.log("logined?",this.haslogin);
                if (!this.haslogin) {
                    this.$router.push({path:'/'});
                    // todo: notify:请先登录
                    return;
                }
                let url;
                if (this.replydata.agreed) {
                    url = "http://localhost:8000/cancelagree";
                } else  {
                    url = "http://localhost:8000/agree";
                }
                this.$axios.get(url,{
                    params:{
                        "movname":this.moviename,
                        "type":"Reply",
                        "target":this.targetReplyId
                    }
                }).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.replydata.agreed = !this.replydata.agreed;
                        this.replydata.agree = res.data.data.agreecount;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .slimLine{
        margin: 2px;
    }

    .lefttxt {
        text-align: left;
    }

    .smallsize {
        font-size: 14px;
    }

    .pointer {
        cursor: pointer;
    }

    .txtarea >>> textarea {
        min-height: 60px!important;
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

    .comUser{
        margin: 10px;
    }

    .comRate {
        margin: 5px 10px 5px 10px;
    }

    .comCnt {
        margin: 10px;
        line-height: 30px;
    }

    .comExtra {
        margin: 5px 10px 5px 10px;
    }
</style>