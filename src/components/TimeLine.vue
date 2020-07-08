<template>
    <div class="TimeLine">
        <div class="block" style="height: 500px; overflow: auto; overflow-scrolling: auto">
            <div style="width: 90%; margin: 20px auto">
                <el-timeline>
                    <el-timeline-item v-for="(item,index) in timeline"
                                      v-bind:timestamp="item.actiontime" v-bind:key="index" placement="top">
                        <el-card>
                            <h4>{{item.title}}</h4>
                            <p><span v-if="item.target" class="pointer tgt"
                                     @click="toUser(item.target)">@{{item.target}}</span>
                                <span v-if="item.origin">{{item.detail.split(item.origin)[0]}}</span>
                                <span v-if="item.origin" class="pointer tgt" @click="toTarget(item)">
                                    <span v-if="item.originid.slice(0,1) === 'U'">@</span>
                                    <span v-if="item.originid.slice(0,1) === 'M'">#</span>{{item.origin}}</span>
                                <span v-if="item.origin">{{item.detail.split(item.origin)[1]}}</span>
                                <span v-else>{{getDetail(item)}}</span>
                                </p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "TimeLine",
        data() {
            return {

            }
        },
        props:['username','timeline'],
        watch: {

        },
        methods: {
            getDetail(data) {
                if (data.target) {
                    return data.detail.slice(data.target.length)
                } else {
                    return data.detail
                }
            },
            toUser(t) {
                this.$router.push({"path":"/user/"+t})
            },
            toTarget(i) {
                if (i.originid.slice(0, 1) === "U") {
                    this.$router.push({path:'/user/'+i.origin})
                } else if (i.originid.slice(0, 1) === "M") {
                    this.$router.push({path:'/movie/'+i.originid})
                }
            }
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