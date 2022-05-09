<!--
    文件描述：
    创建时间：2022/5/6 17:31
    创建人： LH-Web
-->
<template>
    <div class="EntranceLayout">
        <div class="layout-wrapper">
            <Layout class="layout-outer">
                <!-- 内容部分 -->
                <Content class="content-con">
                    <Card shadow class="page-card">
                        <!-- 做【嵌套路由】，用于展示子路由 -->
                        <div class="ELayout" :style="{'height': `${searchHeight}px`}">
                            <router-view/>
                        </div>
                    </Card>
                </Content>
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EntranceLayout",
        data() {
            return {
                searchHeight: 768
            }
        },
        mounted() {
            this.searchFormHeight(); // 组件初始化的时候不会触发onresize事件，这里强制执行一次
            window.onresize = () => {
                if(!this.timer){ // 使用节流机制，降低函数被触发的频率
                    this.timer = true;
                    let that = this; // 匿名函数的执行环境具有全局性，为防止this丢失这里用that变量保存一下
                    setTimeout(function(){
                        that.searchFormHeight();
                        that.timer = false;
                    },400)
                }
            }
        },
        methods: {
            searchFormHeight() {
                let w = window.innerHeight;
                if(w <= 768) {
                    this.searchHeight = 280
                } else if (w < 1080) {
                    this.searchHeight = ((w - 768)*80)/640 + 280
                } else {
                    this.searchHeight = 360
                }
            }
        }
    }
</script>

<style scoped>
    .EntranceLayout {

    }

    .ELayout {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
