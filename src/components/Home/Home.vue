<template>
    <div class="layout">
         <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <!-- <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div> -->
                    <MenuItem name="1" style="float: right;">
                        <Dropdown>
                            <a href="javascript:void(0)" style="color: #FFF">
                                管理员
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
                <Sider hide-trigger :style="{background: '#fff'}" style="height: 90vh">
                    <Menu :active-name="$route.name" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航1
                            </template>
                            <MenuItem name="index" @click.native="routerGo('home')">首页</MenuItem>
                            <MenuItem name="javaScript" @click.native="routerGo('javaScript')">javaScript</MenuItem>
                            <MenuItem name="routeVue" @click.native="routerGo('routeVue')">Vue</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航2
                            </template>
                            <MenuItem name="html" @click.native="routerGo('html')">html</MenuItem>
                            <MenuItem name="css" @click.native="routerGo('css')">css</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航3
                            </template>
                            <MenuItem name="json" @click.native="routerGo('json')">导入json</MenuItem>
                            <MenuItem name="3-2">其他</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>{{this.$route.meta.title}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
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
        },
        created() {
            console.log(this.$route)
        }
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
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>