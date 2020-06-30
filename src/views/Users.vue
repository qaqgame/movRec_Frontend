<template>
    <div class="Users">
        <div id="PageHeaderBar1" class="PageHeaderBar">
            <PageHeader ref="pHeader"></PageHeader>
        </div>

        <UserSpaceMenuField pdtop="60px" v-bind:user-id="id"></UserSpaceMenuField>
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

            }
        },
    }
</script>

<style>
    .PageHeaderBar {
        position: fixed;
        width: 100%;
        z-index: 1;
    }
    .Users {
        background-image: url("../assets/UserSpace_Background1.png");
        height: 100vh;
        background-size: cover;
    }
</style>