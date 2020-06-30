<template>
    <div class="SearchBar">
        <el-row>
            <el-col :xl="{span:8, offset:8}" :lg="{span:8, offset:8}" :md="{span:12, offset:6}" :sm="{span:12, offset:6}"
                    :xs="{span:18, offset:3}">
                <div class="search bar">
                    <input type="text" placeholder="请输入您要搜索的内容..." />
                    <span class="iconfont"></span>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data:function () {
            return {
                v:'',
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

    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    .bar{
        height: 42px;
        position: relative;
    }

    .bar input {
        width: 100%;
        height: 42px;
        border-radius: 42px;
        border: 2px solid #324B4E;
        background: #F9F0DA;
        padding-left: 21px;
        font-size: large;
    }

    .bar input:focus {
        outline: none;
    }

    .bar span:before{
        font-size: 32px;
        content: '\ebde';
        position: absolute;
        right: 0;
        top:3px;
        cursor: pointer;
    }

</style>