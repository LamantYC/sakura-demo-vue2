<!--
    文件描述：
    创建时间：2022/5/6 16:27
    创建人： LH-Web
-->
<template>
    <div class="layout">
        <div class="layout-wrapper">
            <Layout class="layout-outer">
                <!-- 侧边栏 -->
                <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed"></Sider>
                <!-- 布局容器 -->
                <Layout>
                    <!-- 顶部布局 -->
                    <Header class="header-wrapper">
                        <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32" />
                    </Header>
                    <!-- 内容部分 -->
                    <Content class="content-con">
                        <Card shadow class="page-card">
                            <!-- 做【嵌套路由】，用于展示子路由 -->
                            <router-view />
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                collapsed: false // 控制收缩变量
            }
        },
        mounted() {
           
        },
        computed: {
            triggerClasses(){
                return [
                    'trigger-icon',
                    this.collapsed ? 'rotate' : ''
                ]
            }
        },
        methods: {
            // 展开 / 收起
            handleCollapsed(){
                this.collapsed = !this.collapsed
            }
        }
    }
</script>

<style lang="scss">
    .layout {

    }

    .layout-wrapper,.layout-outer{
        height: 100%;
        .header-wrapper{
            background: #fff;
            box-shadow: 0 1px 1px 1px rgba($color: #000000, $alpha: .1);
            padding: 0 23px;
            .trigger-icon{
                cursor: pointer;
                &.rotate{
                    transform: rotateZ(-90deg);
                    transition: transform .3s ease;
                }
            }
        }
        .content-con{
            padding: 10px;
            .page-card{
                min-height: calc(100vh - 84px);
            }
        }
    }
</style>
