<template>
    <div>
        <Modal
        v-model="modal1"
        fullscreen
        title="jsvaScript">
        <div v-if="this.jsObj[0]">
            <h1 class="marg">{{jsObj[0].header}}</h1>
            <Card>
                <div style="text-align:left">
                    <h3>{{jsObj[0].title}}</h3>
                    <h6>{{jsObj[0].titleCon}}</h6>
                </div>
            </Card>
            <Alert class="marg" type="success">{{jsObj[0].code}}</Alert>
            <div class="marg" style="background:#eee;padding: 20px">
                <Card :bordered="false">
                    <p>{{jsObj[0].content}}</p>
                </Card>
            </div>
        </div>
        <div v-else>
            <h2>暂无数据</h2>
        </div>
        <div slot="footer"></div>
    </Modal>
    </div>
</template>

<script>

const jsContent = [
    {
        header: 'async/await同步编程异步函数',
        title: '什么是同步和异步',
        titleCon: '异步：不等待结果就执行接下来的代码。 同步：等上面的代码执行完了再执行下面的代码。',
        code: 'async函数返回一个promise实例，可以使用then方法。 如果函数return一个直接量，那么就等同于直接调用resolve方法。',
        content: 'await是配合async使用的，译为等待。就是的等待它的async执行完之后。正常情况下，await命令后面是一个Promise对象。当然也可以是原始类型和非Promise对象，但会被转成一个立即resolve的promise对象，这是等同于同步操作。'
    },
    {
        header: '',
        title: '',
        titleCon: '',
        code: '',
        content: ''
    },
    {
        header: 'JS 中的闭包是什么？',
        title: '有一个局部变量 local，有一个函数 foo，foo 里面可以访问到 local 变量。好了这就是一个闭包。',
        titleCon: '「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。',
        code: '闭包常常用来「间接访问一个变量」。换句话说，「隐藏一个变量」。',
        content: '有些人看到「闭包」这个名字，就一定觉得要用什么包起来才行。其实这是翻译问题，闭包的原文是 Closure，跟「包」没有任何关系。'
    }
]

    export default {
        name: 'jscontent',
        data () {
            return {
                jsObj: [],
                modal1: false
            }
        },
        created() {
            
        },
        methods: {
            handle(title) {
                this.modal1 = true;
                this.jsObj = jsContent.filter((item) => {
                    if(item.header == title) {
                        // console.log(item.header, title)
                        return item
                    }
                })
            }
        }
    }
</script>

<style scoped>
.jscontent {
    width: 100%;
    height: 70vh;
    text-align: center;
}
.marg {
    width: 100%;
    margin-top: 30px;
}
</style>