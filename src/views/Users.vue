<template>
    <div class="Users">
        <img style="position: absolute;height: 300px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <PageHeader style="z-index: 10;" class="myHeader"></PageHeader>
        <UserSpaceMenuField style="z-index: 11;" pdtop="60px" v-bind:user-id="id"></UserSpaceMenuField>
        <el-row style="background-color: #f4f5f7;height: 80px"></el-row>
    </div>
</template>

<script>
    import UserSpaceMenuField from '../components/UserSpaceMenuField'
    import PageHeader from '../components/PageHeader.vue'

    export default {
        name: "Users",
        props: ['id'],
        components:{UserSpaceMenuField,PageHeader},
        data() {
            return {
                src1:require("../assets/Movie_Background1.png")
            }
        },
    }
</script>

<style scoped>
    .Users {
        background-color: #f4f5f7;
        z-index: -10;
    }
</style>