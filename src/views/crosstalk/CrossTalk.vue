<template>
    <div class="crosstalk">
        <h2 class="title">搞笑段子合集</h2>
        <!-- 搜索 -->
        <div v-if="loading">
            <Input type="text" v-model="search" placeholder="请输入内容" style="width: 300px; margin-bottom: 20px;" />
            <Button type="primary" @click="searchList" style="margin-bottom: 20px;">搜索</Button>
        </div>
        <div class="demo-spin-container" v-if="!loading">
            <Spin fix size="large"></Spin>
        </div>
        <List item-layout="vertical" v-if="loading">
        <ListItem v-for="item in data" :key="item.title" class="crosstalk-list" @click.native="routerGo('crosstalkmodel', item)">
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
    :total="page.total"
    :current="page.index"
    :page-size="page.size"
    show-total
    @on-change="crosstalkPage"
    style="text-align: center; margin-top: 10px;"/>
    </div>
</template>

<script>
import {crossTalk} from '@/api/request.js'
import Vue from "../vue/Vue";

    export default {
        name: 'crosstalk',
        components: {Vue},
        data () {
            return {
                data: [],
                data2: [],
                page: {
                    index: 1,
                    size: 3,
                    total: 0
                },
                loading: false,
                search: '',
                searchData: ''
            }
        },
        methods: {
            crosstalkPage (i) {
                this.page.index = i;
                let _start = (i - 1) * this.page.size;
                let _end = i * this.page.size;
                if(this.search === '' || this.search === null) {
                    this.data = this.data2.slice(_start, _end);
                    this.page.total = this.data2.length;
                } else {
                    this.data = this.searchData.slice(_start, _end);
                    this.page.total = this.searchData.length;
                }
            },
            routerGo (name, item) {
                this.$router.push({
                    name
                })
                localStorage.setItem('crossContent', JSON.stringify(item))
            },
            searchList () {
                if(this.search === '' || this.search === null) {
                    this.data = this.data2.slice(0, this.page.size)
                }
                let list = this.data2.filter(item => {
                    return item.data.title.indexOf(this.search) !== -1
                })
                this.searchData = list;
                this.page.total = this.searchData.length;
                this.data = this.searchData.slice(0, this.page.size)
            }
        },
        created() {
            let data = {
                id: 127397
            }
            //  在这里使用
            crossTalk(data).then(res => {
                res.result.filter(item => {
                    this.data2.push(item)
                })
                this.page.total = this.data2.length;
                this.data = this.data2.slice(0, this.page.size)
                this.loading = true;
            }).catch(err => {
                this.$Message.error('网络错误，请求失败！')
                console.log(err)
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
}
.crosstalk .crosstalk-list {
    box-shadow: 1px 0px 2px #b3b3b3;
    cursor: pointer;
}
.crosstalk .crosstalk-list:hover {
    box-shadow: 2px 1px 3px #b3b3b3;
}
</style>
