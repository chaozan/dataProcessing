<template>
    <div id="login">
        <div class="loginForm">
            <h2 class="title">欢迎登录</h2>
            <p class="fontHelp">
                <Poptip title="账号: admin" content="密码: 123456">
                    <Icon type="md-help-circle" class="font" />
                </Poptip>
            </p>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="loading" @click="handleSubmit('formInline')">登录</Button>
               
            </FormItem>
        </Form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                formInline: {
                    user: '',
                    password: '',
                },
                userName: null, 
                userPassword: null,
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能少于六位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.loading = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (this.formInline.user !== this.userName) {
                            this.$Message.error("用户名输入错误");
                        } else if (this.formInline.password !== this.userPassword) {
                            this.$Message.error("密码输入错误");
                        } else {
                                window.localStorage.setItem('userState', '已登录')
                                setTimeout(() => {
                                    this.login();
                                    this.loading = false;
                                    this.$Message.success("登录成功");
                                }, 1000)
                        }
                    } else {
                        this.$Message.error('请填写完整信息');
                        this.loading = false;
                    }
                })
            },
            login () {
                this.$router.push({
                    name: 'home'
                })
            }
        },
        created() {
            this.userName = this.$store.state.userName;
            this.userPassword = this.$store.state.password;
            let userState = this.$store.state.userState;
            window.localStorage.setItem('userState', userState)
        }
    }
</script>

<style scoped>
#login {
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/login/LoginBg.jpg');
    background-size: 100% 100%;
}
#login .loginForm {
    width:300px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px auto auto -150px;
}
#login .loginForm .title {
    font-size: 32px;
    color: aliceblue;
    margin: 20px;
}
.fontHelp {
    display: flex;
    flex-direction: row-reverse;
}
.fontHelp .font {
    font-size: 28px;
    color: aliceblue;
}
</style>