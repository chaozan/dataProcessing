<template>
    <div class="error">
        <a href="javascript:;" class="errorLogin"><h3 @click="login('login')">点击我返回登录界面.......</h3></a>
    </div>
</template>

<script>
    export default {
        name: 'error',
        methods: {
            login (name) {
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style scoped>
.error {
    width:100vw;
    height: 100vh;
    background-image: url('./assets/404.jpg');
    background-size: 100% 100%;
}
.error .errorLogin {
    display: block;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 24px;
    margin: -230px auto auto -100px;
    color: red;
}
</style>