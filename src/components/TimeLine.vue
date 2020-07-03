<template>
    <div class="TimeLine">
        <div class="block" style="height: 500px; overflow: auto; overflow-scrolling: auto">
            <div style="width: 90%; margin: 20px auto">
                <el-timeline>
                    <el-timeline-item v-for="item in timeLines"
                                      v-bind:timestamp="item.actiontime" v-bind:key="item.actiontime" placement="top">
                        <el-card>
                            <h4>{{item.title}}</h4>
                            <p>{{item.detail}}</p>
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
                timeLines:[
                    {actiontime:"0000/00/00", title:"加入错影时光", detail:"XXXXXXXXX"},
                ]
            }
        },
        props:['username'],
        // created(){
        //     window.console.log("create timeline",this.$route.params.id);
        //     let url = "http://127.0.0.1:8000/user/"+this.$route.params.id+"/timeline";
        //     this.$axios.get(url,{}).then(res => {
        //         window.console.log(res)
        //     })
        // }
    }
</script>

<style scoped>

</style>