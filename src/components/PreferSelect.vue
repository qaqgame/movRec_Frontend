<template>
    <div>
        <el-dialog :visible="dialogVisible" center>
            <span slot="title" class="dialog-title"
                  style="font-size: 22px;font-weight: bolder">请选择你的偏好</span>
            <el-row>
                <el-col :span="12">
                    <p style="font-size: 20px;font-weight: bolder">电影类型</p>
                    <el-row><br/></el-row>
                    <el-row>
                        <el-button v-for="(tps,index) in fTypes" :key="index" @click="changeStatus(index)"
                                   type="primary" style="margin: 1% 1%" round>
                            {{tps}}
                        </el-button>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <p style="font-size: 20px;font-weight: bolder">已选择的偏好</p>
                    <el-row><br/></el-row>
                    <el-row>
                        <el-button v-for="tps in selectedList" :key="tps" @click="cancelSelected(tps)"
                                   type="success" style="margin: 1% 1%" round>
                            {{tps}}
                        </el-button>
                    </el-row>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button type="warning" round @click="sendTypes()">下一步
                <i class="el-icon-right el-icon--right"></i>
            </el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    const filmTypes = ['古装', '动画', '冒险', '犯罪', '奇幻', '家庭', '恐怖', '传记', '科幻', '惊悚', '爱情', '历史', '歌舞', '战争', '动作', '舞台艺术', '西部', '音乐', '悬疑', '运动', '儿童', '武侠', '灾难', '戏曲', '情色', '短片', '喜剧', '荒诞']
    export default {
        name: "PreferSelect",
        data() {
            return {
                fTypes: filmTypes,
                selectedList: [],
                btnStatus: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                dialogVisible: this.dialogVis,
            }
        },
        props:['dialogVis'],
        watch: {
            dialogVis: function () {
                window.console.log("vis ",this.dialogVis, this.dialogVisible);
                this.dialogVisible = this.dialogVis;
            }
        },
        methods: {
            changeStatus: function (index) {
                // 存在返回下标，不存在返回-1
                let num = this.selectedList.indexOf(this.fTypes[index])
                // 如果当前数据不存在selectedList中，表明没有被点击过，添加
                if (num === -1) {
                    this.selectedList.push(this.fTypes[index])
                }
                this.fTypes.splice(index, 1)
                // console.log(this.selectedList)
            },
            cancelSelected: function (tps) {
                let num = this.selectedList.indexOf(tps)
                this.selectedList.splice(num, 1)
                this.fTypes.push(tps)
                // console.log('Remove' + tps)
            },
            sendTypes() {
                let url = "http://120.79.240.163:8000/liketype/";
                let params = {
                    "choosen":this.selectedList,
                };
                this.$axios.post(url,params).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.dialogVisible = false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>