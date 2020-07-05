<template>
    <div class="SearchBar">
        <el-row>
            <el-col :xl="{span:8, offset:8}" :lg="{span:8, offset:8}" :md="{span:12, offset:6}"
                    :sm="{span:12, offset:6}"
                    :xs="{span:18, offset:3}">
                <!--搜索框-->
                <div class="bar">
                    <el-input type="text" v-model="val" class="input" suffix-icon="el-icon-search"
                              placeholder="请输入你想要查找的内容">
                        <el-button slot="append" @click="SearchMovie()">搜索</el-button>
                    </el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data: function () {
            return {
                val: this.movie, // 绑定输入框的值val
            }
        },
        methods: {
            SearchMovie() {
                this.$router.push({name:'showmovie', query:{search:1,moviename:this.val,start:0}})
            }
        },
        props:['movie'],
        watch:{
            movie:function () {
                window.console.log("new input")
                this.val = this.movie;
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 603550 */
        src: url('//at.alicdn.com/t/font_603550_otjavf3571h.eot');
        src: url('//at.alicdn.com/t/font_603550_otjavf3571h.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_603550_otjavf3571h.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_603550_otjavf3571h.woff') format('woff'),
        url('//at.alicdn.com/t/font_603550_otjavf3571h.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_603550_otjavf3571h.svg#iconfont') format('svg');
    }

    .SearchBar {
        margin: auto;
        width: 100%;
        z-index: 1; /*Z-index 显示优先级，确保组件能够显示出来*/
    }
    /*.input >>> .el-input__inner{*/
    /*    border-radius: 21px;*/
    /*}*/
</style>