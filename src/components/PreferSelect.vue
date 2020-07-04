<template>
    <div>
        <h1>请选择你的偏好</h1>
        <div style="text-align: center">
            <el-transfer
                    style="text-align: left; display: inline-block"
                    v-model="selected"
                    :titles="['电影类型','已选择']"
                    :format="{
                    noChecked:'${total}',
                    hasChecked:'${checked}/${total}'
                }"
                    :data="data">
                <span slot-scope="{option}">{{option.key}}</span>
            </el-transfer>
            <div>
                <el-button>确认</el-button>
            </div>

        </div>
    </div>
</template>

<script>
    const filmTypes = ['古装', '动画', '冒险', '犯罪', '奇幻', '家庭', '恐怖', '传记', '科幻', '惊悚', '爱情', '历史', '歌舞',
        '战争', '动作', '舞台艺术', '西部', '音乐', '悬疑', '运动', '儿童', '武侠', '灾难', '戏曲', '情色', '短片', '喜剧', '荒诞']
    export default {
        name: "PreferSelect",
        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 0; i < filmTypes.length; i++) {
                    data.push({
                        key: filmTypes[i],
                        label: filmTypes[i]
                    });
                }
                return data;
            }
            return {
                data: generateData(),
                selected: []
            };
        }
    }
</script>

<style scoped>

</style>