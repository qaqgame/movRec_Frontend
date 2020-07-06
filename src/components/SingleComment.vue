<template>
    <div class="SingleComment">
        <el-row type="flex" justify="start">
            <el-col :span="4">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </el-col>
            <el-col :span="20">
                <el-divider></el-divider>
                <el-row><h2>{{replydata.name}}</h2></el-row>
                <el-row><el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                </el-rate></el-row>
                <el-row><p>{{replydata.content}}</p></el-row>
                <el-row type="flex" justify="start">
                    <el-col :span="4">时间:{{replydata.time}}</el-col>
                    <el-col :span="4" :offset="2">点赞:{{replydata.agree}}</el-col>
                </el-row>
                <SingleComment v-for="(item,index) in replydata.reply" v-bind:key="index" v-bind:reply-data="item"></SingleComment>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "SingleComment",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                replydata: this.replyData,
                value: this.replyData.score,
            }
        },
        props:['replyData']
    }
</script>

<style scoped>

</style>