<template>
    <div class="javascript">
        <h2 class="header">javaScript</h2>
        <Js-content ref="jscontent" />
        <Table border :columns="header" :data="list" style="margin-top: 30px;">
            <template slot-scope="{ row }" slot="title">
                <strong>{{row.title}}</strong>
            </template>
            <template slot-scope="{row}" slot="operation">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.title)">查看</Button>
            </template>
        </Table>
        <Page :total="content.length"
         :current="page.index" 
         :page-size="page.size" 
         style="float: right"  
         @on-change="pIndexChange"
         show-total/>
    </div>
</template>

<script>
import JsContent from './JsContent'

const header = [
    {
        title: '标题',
        key: 'title'
    },
    {
        title: '概要',
        key: 'outline'
    },
    {
        title: '层级',
        key: 'hierarchy'
    },
    {
        title: '操作',
        slot: 'operation',
        align: 'center'
    }
]
const content = [
    {
        title: 'javascript',
        outline: '浏览器脚本语言',
        hierarchy: '基础'
    },
    {
        title: 'async/await同步编程异步函数',
        outline: 'async/await',
        hierarchy: 'ES7'
    },
    {
        title: 'JS 中的闭包是什么？',
        outline: '闭包',
        hierarchy: '高阶'
    }
]

    export default {
        name: 'javaScript',
        components: {
            JsContent,
        },
        data () {
            return {
                header,
                content,
                page: {
                    index: 1,
                    size: 5,
                    total: 20,
                },
                list: null
            }
        },
        methods: {
            show (title) {
                this.$refs.jscontent.handle(title)
            },
            pIndexChange (i) {
                this.page.index = i;
                let _start = (i-1) * this.page.size;
                let _end = i * this.page.size;
                this.list = this.content.slice(_start, _end)
            }, 
        },
        created() {
            this.list = this.content.slice(0, 5)
        }
    }
</script>

<style scoped>
.javascript {
    width: 100%;
    height: 70vh;
}
.javascript .header {
    font-size: 28px;
}
</style>