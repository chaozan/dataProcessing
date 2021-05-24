<template>
    <div>
        <Row>
            <Col span="24">
                <h2 class="title" style="text-align: center;">个人信息</h2>
            </Col>
        </Row>
        <Row>
            <Col span="6" class="head-portrait">
                <div class="demo-avatar">
                    <Avatar shape="square" icon="ios-person" style="width: 100px; height: 120px; font-size: 100px;" />
                </div>
            </Col>
            <Col span="18" class="self-introduction">
                <h2 class="title">姓名：管理员</h2>
                <h4>性别： 男</h4>
                <h4>手机号： {{form.iphone}}</h4>
                <h4>兴趣爱好： 运动，看书，码字，看文档，看视频</h4>
            </Col>
        </Row>
        <Row :gutter="32">
            <Col span="24" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px; height: 400px;">
                <Tabs type="card" >
                    <TabPane class="tabpane" label="个人简介" style="font-size: 22px;">{{form.individual}}</TabPane>
                    <TabPane label="优质文章" style="font-size: 22px;">{{form.quality}}</TabPane>
                </Tabs>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data () {
            return {
                form: {
                    iphone: null,
                    individual: null,
                    quality: null
                }
            }
        },
        created () {
            this.form.iphone = JSON.parse(localStorage.getItem('userInfo')).iphone
            this.form.individual = JSON.parse(localStorage.getItem('userInfo')).individual
            this.form.quality = JSON.parse(localStorage.getItem('userInfo')).quality
        }
    }
</script>

<style scoped>
.head-portrait {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.self-introduction {
    height: 200px;
    margin-top: 10px;
}
.title {
    width: 100%;
    font-size: 32px;
    margin: 20px auto;
}
.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
    height: 120px;
    margin-top: -16px;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
    background: #fff;
    padding: 16px;
}

.demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-color: #fff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border-radius: 0;
    background: #fff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-top: 1px solid #3399ff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
}
.tabpane {
    height: 300px;
}
</style>