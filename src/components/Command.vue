<template>
    <div class="Command">
        <div class="block" style="height: 500px; overflow: auto; overflow-scrolling: auto">
            <div style="width: 90%; margin: 20px auto">
                <el-timeline>
                    <el-timeline-item v-for="item in coms"
                                      v-bind:timestamp="getTime(item.actiontime)" v-bind:key="item.actiontime" placement="top">
                        <el-card>
                            <p><span v-if="item.origin">{{item.detail.split(item.origin)[0]}}</span>
                                <span v-if="item.origin" class="pointer tgt" @click="toTarget(item)">
                                    <span v-if="item.originid.slice(0,1) === 'U'">@</span>
                                    <span v-if="item.originid.slice(0,1) === 'M'">#</span>{{item.origin}}</span>
                                <span v-if="item.origin">{{item.detail.split(item.origin)[1]}}</span>
                                <span v-else>{{getDetail(item)}}</span></p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Command",
        data() {
            return {
                timeLines:[
                    {actiontime:"0000/00/00", title:"加入错影时光", detail:"XXXXXXXXX"},
                ]
            }
        },
        props:['username','coms'],
        methods:{
            toTarget(i) {
                if (i.originid.slice(0, 1) === "U") {
                    this.$router.push({path:'/user/'+i.origin})
                } else if (i.originid.slice(0, 1) === "M") {
                    this.$router.push({path:'/movie/'+i.originid})
                }
            }
        },
        computed: {
            getTime() {
                return function (data) {
                    let tmp = data;
                    let ts = tmp.split("T");
                    let res = "";
                    res += ts[0];
                    res += " ";
                    res += ts[1].split(".")[0];
                    return res;
                }
            },
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
    .tgt {
        font-weight: bold;
        color: #00A1D6
    }
</style>