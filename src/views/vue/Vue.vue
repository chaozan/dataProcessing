<template>
    <div class="vue">
        <h2 class="header">Vue</h2>
        <Vue-content ref="VueContent" />
        <Table :columns="vueHeader" :data="list" style="margin-top: 30px;">
            <template slot-scope="{row}" slot="title">
                <strong>{{row.title}}</strong>
            </template>
            <template slot-scope="{row}" slot="operation">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.title)">查看</Button>
            </template>
        </Table>
        <Page :total="vueList.length" 
        :current="page.index" 
        :page-size="page.size"  
        style="float: right;"
        @on-change="pIndexChange"/>
    </div>
</template>

<script>
import VueContent from './VueContent'

const vueHeader = [
    {
        title: '标题',
        key: 'title',
    },
    {
        title: '概要',
        key: 'outline',
    },
    {
        title: '层级',
        key: 'hierarchy',
    },
    {
        title: '操作',
        slot: 'operation',
        align: 'center'
    }
]
const vueList = [
    {
        title: 'vue',
        outline: 'vue基础',
        hierarchy: '基础1'
    },
    {
        title: '计算属性与侦听器',
        outline: 'vue基础',
        hierarchy: '基础'
    },{
        title: '路由守卫',
        outline: 'vue路由中路由守卫非常重要',
        hierarchy: '进阶'
    },{
        title: '路由容易忘的知识点',
        outline: 'vue基础',
        hierarchy: 'vue-router'
    },{
        title: 'VUE的生命周期',
        outline: 'VUE的生命周期钩子函数：',
        hierarchy: '高阶'
    }
    
]

    export default {
        name: 'vue',
        components: {
            VueContent,
        },
        data () {
            return {
                vueHeader,
                vueList,
                list: [],
                page: {
                    index: 1,
                    size: 5,
                    total: 10,
                }
            }
        },
        methods: {
            show (title) {
                this.$refs.VueContent.handle(title);
            },
            pIndexChange (i) {
                this.page.index = i;
                let _start = (i-1) * this.page.size;
                let _end = i * this.page.size;
                this.list = this.vueList.slice(_start, _end)
            }
        },
        created() {
            this.list = this.vueList.slice(0, this.page.size)
        }
    }
</script>

<style scoped>
.vue {
    width: 100%;
    height: 70vh;
}
.vue .header {
    font-size: 28px;
}
</style>