<template>
    <div>
        <Row>
            <Col span="24">
                <a href="javascript:;" @click="backToThePreviousLevel">返回</a>
            </Col>
        </Row>
        <Row>
        <Col span="24">
            <h2 class="title">{{content.data.title}}</h2>
        </Col>
        </Row>
        <Row>
            <Col span="24">
                <Divider plain orientation="left" style="font-size: 18px;">爱心标签</Divider>
            </Col>
        </Row>
        <Row style=" margin-top: 5px;">
            <Col span="12" style="padding: 0 30px;">
                <div style="background:#eee;padding: 20px; height: 270px">
                    <Card :bordered="false" style="height: 225px;">
                        <p slot="title">温暖的太阳</p>
                        <p>{{content.data.description}}</p>
                    </Card>
                </div>
            </Col>
            <Col span="12" style="padding-right: 50px;">
                <img :src="content.data.cover.detail" width="500px" height="270px" style="float: right; border-radius: 5px;" alt="网络错误">
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <Divider style="font-size: 18px;">公益视频</Divider>
            </Col>
        </Row>
        <Row>
            <Col span="24" style="text-align: center; margin-top:5px;">
                <video :src="content.data.playUrl" width="700px" height="400px" controls="controls"></video>
            </Col>
        </Row>
        <Row>
            <Col span="24" style="margin:40px auto">
                <Alert type="success" show-icon>{{content.data.descriptionEditor == "" ? content.data.descriptionPgc : content.data.descriptionEditor}}</Alert>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'crosstalkmodel',
        data () {
            return {
                content: {},
            }
        },
        methods: {
            backToThePreviousLevel () {
                this.$router.go(-1)
            },
        },
        created () {
            this.content = JSON.parse(localStorage.getItem('crossContent'))
        }
    }
</script>

<style scoped>
.title {
    width: 100%;
    text-align: center;
    font-size: 32px;
    margin: 20px auto;
}
</style>