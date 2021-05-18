<template>
    <div class="home">
                <List :header="header" footer="" border>
                    <ListItem v-for="(item, index) in indexContent" :key="index.toString()"><p>{{item}}</p></ListItem>
                </List>

                <ul class="character">
                    <h3>特性</h3>
                    <li v-for="(item, index) in character" :key="index.toString()">{{item}}</li>
                </ul>
    </div>
</template>

<script>

const indexContent = ["数据汇总®，基于 iView，是一套基于 Vue.js 前端框架制作的前端笔记汇总库，主要服务于 前端笔记复习阶段。",
                      "运行该项目需要本地配有nodejs环境，浏览器，在该项目目录执行命令 npm install  npm run serve"
]
const character = ["提供专业、优质的一对一技术支持",
                   "友好的 简洁化界面 ，自由灵活地使用空间",
                   "细致、漂亮的 UI",
                   "简洁明了，适合阅读的优质笔记",
                   "简洁的操作，不需要复杂的流程"
]

    export default {
        name: 'index',
        data () {
            return {
                header: '欢迎登录',
                footer: '',
                indexContent,
                character,
            }
        }
    }
</script>

<style scoped>
.home {
    width: 100%;
    height: 70vh;
}
.home .character {
    margin: 20px;
    line-height: 40px;
}
</style>