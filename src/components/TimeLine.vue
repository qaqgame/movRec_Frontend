<template>
    <div class="TimeLine">
        <div class="block" style="height: 500px; overflow: auto; overflow-scrolling: auto">
            <div style="width: 90%; margin: 20px auto">
                <el-timeline>
                    <el-timeline-item v-for="item in timeline"
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

            }
        },
        props:['username','timeline'],
    }
</script>

<style scoped>

</style>