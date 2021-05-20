<template>
    <div class="crosstalk">
        <h2 class="title">搞笑段子合集</h2>
        <div class="demo-spin-container" v-if="!loading">
            <Spin fix size="large"></Spin>
        </div>
        <List item-layout="vertical" v-if="loading">
        <ListItem v-for="item in data" :key="item.title">
            <ListItemMeta :avatar="item.data.author.icon" :title="item.data.title" :description="item.data.description + item.data.descriptionEditor" />
            {{ item.content }}
            <!-- <template slot="action">
                <li>
                    <Icon type="ios-star-outline" /> 123
                </li>
            </template> -->
            <template slot="extra">
                <img :src="item.data.cover.detail" style="width: 280px">
            </template>
        </ListItem>
    </List>
    <Page v-if="loading" 
    :total="data2.length" 
    :current="page.index" 
    :page-size="page.size" 
    show-total 
    @on-change="crosstalkPage"
    style="text-align: center;"/>
    </div>
</template>

<script>
import {crossTalk} from '@/api/request.js'

    export default {
        name: 'crosstalk',
        data () {
            return {
                data: [],
                data2: [],
                page: {
                    index: 1,
                    size: 3,
                },
                loading: false
            }
        },
        methods: {
            crosstalkPage (i) {
                this.page.index = i;
                let _start = (i - 1) * this.page.size;
                let _end = i * this.page.size;
                this.data = this.data2.slice(_start, _end)
            },
        },
        created() {
            let data = {
                id: 127398
            }
            crossTalk(data).then(res => {
                res.result.filter(item => {
                    this.data2.push(item)
                    this.data = this.data2.slice(0, 3)
                })
                this.loading = true;
            }).catch(err => {
                console.log("请求失败")
                this.loading = true;
            })
            
        }
    }
</script>

<style scoped>
.crosstalk {
    width: 100%;
}
.crosstalk .title {
    width: 100%;
    text-align: center;
    font-size: 32px;
    margin: 20px auto;
}
.demo-spin-container{
    	display: inline-block;
        width: 100%;
        height: 40vh;
        position: relative;
        /* border: 1px solid #eee; */
    }
</style>