<template>
    <div class="visual">
        <h2 class="title">视频分类</h2>
        <Row v-if="!loading">
            <Col class="demo-spin-col" span="24">
                <Col class="demo-spin-col" span="24">
                <Spin fix>请不要走开，精彩内容马上呈现...</Spin>
            </Col>
        </Col>
        </Row>
        <div class="box" v-if="loading">
            <Card style="width:320px; margin: 30px;" v-for="item in data" :key="item.data.id" @click.native="video(item.data.header.title, item.data.content.data.playUrl)">
                <div style="text-align:center">
                    <img :src="item.data.content.data.cover.detail" class="iconimg">
                    <h3 class="icon">{{item.data.header.title}}</h3>
                </div>
            </Card>
        </div>
        <Page v-if="loading"
        :total="data2.length" 
        :current="page.index" 
        :page-size="page.size"
        @on-change="visualpage" 
        style="text-align: center"
        show-total />
        <Visual-model ref="visualmodel" />
    </div>
</template>

<script>
import {visualClassification} from '@/api/request'
import VisualModel from './model/VisualModel'
    export default {
        name: 'visual',
        components: {
            VisualModel,
        },
        data () {
            return {
                loading: false,
                data: [],
                data2: [],
                page: {
                    index: 1,
                    size: 6
                }
            }
        },
        methods: {
            visualpage(i) {
                this.page.index = i;
                let _start = (i - 1) * this.page.size;
                let _end = i * this.page.size;
                this.data = this.data2.slice(_start, _end) 
            },
            video(title, videoUrl) {
                this.$refs.visualmodel.handel(title,videoUrl)
            }
        },
        created() {
            let data = {
                id: 14
            }
            visualClassification(data).then(res => {
                res.result.filter(item => {
                    this.data2.push(item)
                })
                this.loading = true;
                this.data = this.data2.slice(0, this.page.size)
                console.log(this.data)
            }).catch(err => {
                this.$Message.error('网络错误，请求失败！')
                this.loading = true;
            })
        }
    }
</script>

<style scoped>
.visual {
    width: 100%;
}
.visual .title {
    width: 100%;
    font-size: 32px;
    text-align: center;
}
.visual .box {
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin: 0 auto;
}
.visual .iconimg {
    width: 80%;
    height: 50%;
    margin: 20px auto;
}
.visual .icon {
    font-weight: bold;
}
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 250px;
        font-size: 23px;
        position: relative;
    }
</style>