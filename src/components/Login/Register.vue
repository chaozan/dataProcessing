<template>
    <div class="layout">
        <Layout>
            <Header class="header"><h1>欢迎注册</h1></Header>
            <Content class="content">
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="userName">
                        <Input type="text" v-model="formInline.userName" placeholder="请输入用户名">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="iphone">
                        <Input type="text" class="input_register" v-model="formInline.iphone" placeholder="请输入手机号码">
                            <Icon type="ios-tablet-portrait" slot="prepend"/>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button :loading="loading" type="primary" @click="handleSubmit('formInline')">注册</Button>
                    </FormItem>
                </Form>
                <Alert type="warning" show-icon align="left">
                    友情提醒
                    <span slot="desc">
                        本次注册信息在您退出此系统之后，注册的信息便会删除，只有管理员的信息会一直保留，如果您需要
                        以游客的身份登录，您下次再登录此系统的时候重新注册即可。
                    </span>
                </Alert>
                <span class="login_go" @click="routerGo('login')"><a href="javascript:;">已有账号？ 点我返回登录</a></span>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                formInline: {
                    userName: '',
                    password: '',
                    iphone: '',
                    title: '游客'
                },
                ruleInline: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度最小为6位', trigger: 'blur' }
                    ],
                    iphone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {type: 'string', min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.loading = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.formInline.id = this.$store.state.admin.length + 1;
                        this.$store.commit('addAdmin', this.formInline)
                        this.$Message.success('注册成功!');
                        setTimeout(() => {
                            this.routerGo('login')
                            this.loading = false;
                        }, 1000)

                        // let name = this.formInline.userName;
                        // let password = this.formInline.password;
                        // this.$axios.post(`http://hn216.api.yesapi.cn/?s=App.User.RegisterExt&username=${name}&password=${password}&app_key=8AA34109E78D1223493C2B054B68E657`).then(res => {
                        //     console.log("请求成功")
                        //     if(res.data.data.err_code == 1) {
                        //         this.$Message.warning(res.data.data.err_msg)
                        //         this.loading = false;
                        //     } else if(res.data.ret == 400) {
                        //         this.$Message.warning(res.data.msg)
                        //         this.loading = false;
                        //     } else {
                        //         this.$Message.success('注册成功！')
                        //         this.loading = false;
                        //     }
                        //     console.log(res)
                        // }).catch(err => {
                        //     console.log("请求失败")
                        //     console.log(err)
                        // })

                    } else {
                        this.$Message.error('请填写完整信息!');
                        this.loading = false;
                    }
                })
            },
            routerGo (name) {
                this.$router.push({
                    name: name
                }, 500)
            }
        },
        created() {
            // this.$axios.get('http://URL/Oauth/register').then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
        }
    }
</script>

<style scoped>
.layout {
}
.layout .header {
    text-align: center;
    color: rgb(255, 255, 255);
}
.layout .content {
    width: 800px;
    height: 100%;
    margin: 20px auto;
    padding: 170px;
    padding-top: 80px;
    text-align: center;
}
.layout .content .login_go {
    float: right;
}
</style>