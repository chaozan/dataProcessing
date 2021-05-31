<template>
    <div class="layout">
         <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">数据汇总</div>
                    <MenuItem name="1" style="float: right;">
                        <Dropdown>
                            <a href="javascript:void(0)" style="color: #FFF">
                                {{title}}
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem @click.native="routerGo('user')">个人信息</DropdownItem>
                                <DropdownItem @click.native="routerGo('login')">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" style="min-height: 90vh">
                    <Menu :active-name="$route.name" theme="light" width="auto" :open-names="[$route.meta.open]" accordion>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="logo-apple" style="font-size: 18px;" />
                                导航1
                            </template>
                            <MenuItem name="index" @click.native="routerGo('home')">首页</MenuItem>
                            <MenuItem name="javaScript" @click.native="routerGo('javaScript')">javaScript</MenuItem>
                            <MenuItem name="routeVue" @click.native="routerGo('routeVue')">Vue</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="logo-android" style="font-size: 18px;" />
                                导航2
                            </template>
                            <MenuItem name="crosstalk" @click.native="routerGo('crosstalk')">搞笑段子</MenuItem>
                            <MenuItem name="visual" @click.native="routerGo('visual')">视频分类</MenuItem>
                        </Submenu>
                        <Submenu name="3" v-show="adminId === '1'">
                            <template slot="title">
                                <Icon type="logo-angular" style="font-size: 18px;" />
                                导航3
                            </template>
                            <MenuItem name="json" @click.native="routerGo('json')">导入json</MenuItem>
                            <MenuItem name="photo" @click.native="routerGo('photo')">相册</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem to="/Home">首页</BreadcrumbItem>
                        <BreadcrumbItem>{{vreadcrumbitemTitle}}</BreadcrumbItem>
                        <BreadcrumbItem v-if="$route.name !== 'index'" :to="this.$route.path">{{this.$route.meta.title}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '75vh', background: '#fff'}">
                        <Content />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        <Footer class="footer">yaochaohang@163.com出品.项目开源地址https://github.com/chaozan/dataProcessing.git.多多指点</Footer>
    </div>
</template>

<script>
import Content from '../Content/Content'
    export default {
        name: 'home',
        data () {
            return {
                userinfo: null,
                title: null,
                adminId: null,
                vreadcrumbitemTitle: null
            }
        },
        components: {
            Content,
        },
        methods: {
            routerGo (path) {
                this.$router.push({
                    name: path
                })
            },
            error4 () {
                let userState = this.$store.state.userState;
                window.localStorage.setItem('userState', userState)
                this.$router.push({
                    name: '404'
                })
            },
            success () {
                this.$Notice.success({
                    title: this.title,
                    desc: '欢迎来到数据汇总系统'
                });
            },
            localStorageFn () {
                this.userinfo = this.$route.query.title;
                window.localStorage.setItem('userInfo', JSON.stringify(this.userinfo));
                this.title = JSON.parse(window.localStorage.getItem('userInfo')).title;
                this.adminId = JSON.parse(window.localStorage.getItem('userInfo')).id;
            },
            // logOut () {
            //     let uuid = localStorage.getItem('useruuid');
            //     let token = localStorage.getItem('usertoken')
            //     console.log(uuid, token, "111")
            //     this.$axios.post(`http://api.yesapi.cn/?s=App.User.Logout&uuid=${uuid}&token=${token}&app_key=8AA34109E78D1223493C2B054B68E657`).then(res => {
            //         console.log(res)
            //     }).catch(err => {
            //         console.log(err)
            //     })
            // }
        },
        created() {
            this.$nextTick(() => {
                this.title = JSON.parse(window.localStorage.getItem('userInfo')).title;
                this.adminId = JSON.parse(window.localStorage.getItem('userInfo')).id;
            })
            if(this.$route.meta.open == '1') {
                this.vreadcrumbitemTitle = '导航1'
            } else if(this.$route.meta.open == '2') {
                this.vreadcrumbitemTitle = '导航2'
            } else {
                this.vreadcrumbitemTitle = '导航3'
            }
        },
        updated () {
            if(this.$route.meta.open == '1') {
                this.vreadcrumbitemTitle = '导航1'
            } else if(this.$route.meta.open == '2') {
                this.vreadcrumbitemTitle = '导航2'
            } else {
                this.vreadcrumbitemTitle = '导航3'
            }
        },
        mounted() {
        },
        beforeRouteEnter: ((to, from, next) => {
            if (from.name == 'login') {
                next(vm => {
                    vm.localStorageFn();
                    vm.success();
                })
                return;
            }
            next();
        }),
    }
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 150px;
    height: 30px;
    /* background: #5b6270; */
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: -18px;
    color: aliceblue;
    text-align: center;
    line-height: 35px;
    font-size: 32px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.footer {
    background: rgb(73, 73, 72);
    width: 100%;
    height:10px;
    text-align: center;
    line-height: -120px;
    color: rgb(158, 150, 150);
}
</style>