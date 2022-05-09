<!--
    文件描述：
    创建时间：2022/5/6 16:57
    创建人： LH-Web
-->
<template>
    <div class="Login">
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="LoginCard">
                    <span>Login</span>
                    <el-button @click="loginsys">登录</el-button>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            loginsys() {
                this.$router.push({path: '/home'})
            }
        }
    }
</script>

<style scoped lang="scss">
    .Login {
        background-color: #42b983;
        width: 40%;
        height: 50%;
        border-radius: 10px;
        .LoginCard{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>
