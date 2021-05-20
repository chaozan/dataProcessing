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
                                <DropdownItem @click.native="error4()">查看信息</DropdownItem>
                                <DropdownItem @click.native="routerGo('login')">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" style="min-height: 90vh">
                    <Menu :active-name="$route.name" theme="light" width="auto" :open-names="['1']" accordion>
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
                            <MenuItem name="html" @click.native="routerGo('crosstalk')">段子</MenuItem>
                            <MenuItem name="css" @click.native="routerGo('css')">css</MenuItem>
                        </Submenu>
                        <Submenu name="3" v-if="adminId === '1'">
                            <template slot="title">
                                <Icon type="logo-angular" style="font-size: 18px;" />
                                导航3
                            </template>
                            <MenuItem name="json" @click.native="routerGo('json')">导入json</MenuItem>
                            <MenuItem name="3-2">其他</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem to="/Home">首页</BreadcrumbItem>
                        <BreadcrumbItem v-if="$route.name !== 'index'" :to="this.$route.path">{{this.$route.meta.title}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '75vh', background: '#fff'}">
                        <Content />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
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
            }
        },
        created() {
            this.$nextTick(() => {
                this.title = JSON.parse(window.localStorage.getItem('userInfo')).title;
                this.adminId = JSON.parse(window.localStorage.getItem('userInfo')).id;
            })
            
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
</style>