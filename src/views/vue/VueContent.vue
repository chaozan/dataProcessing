<template>
    <div>
        <Modal
        v-model="modal1"
        title="Vue"
        fullscreen>
            <div v-if="this.list[0]">
                <h1>{{list[0].header}}</h1>
                <List border size="large">
                    <ListItem>{{list[0].title}}</ListItem>
                </List>
                <Card style="width:100%">
                    <div style="text-align:left">
                        <h3>{{list[0].titleCon}}</h3>
                    </div>
                </Card>
                <Alert type="warning">{{list[0].content}}</Alert>
                <Alert>{{list[0].code}}</Alert>
                <div style="background:#eee;padding: 20px">
                    <Card :bordered="false">
                        <p>{{list[0].conBody}}</p>
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
const vueList = [
    {
        header: null,
        title: null,
        titleCon: null,
        content: null,
        code: null,
        conBody: null
    },
    {
        header: '计算属性与侦听器',
        title: ' 模板里的差值表达式非常便利了，但是设计它的初衷就是为了简洁明了的。在模板中放太多的逻辑性的数据会让模板过重而且难以维护，不利于阅读。所以，对于任何复杂的逻辑数据，我们应该使用计算属性。',
        titleCon: '计算属性缓存 vs 方法',
        content: '虽然利用methods里的方法也可以得到相同的结果。但是，计算属性是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值。这就意味着，只要内容没有发生改变，多次执行该计算属性，计算属性会立即返回之前的计算结果，避免了重复运算。',
        code: '当有一些数据需要随着其他数据变动而变动时，很容易滥用 watch。通常更好的做法是使用计算属性而不是命令式的watch回调。避免命令式的重复代码。',
        conBody: '侦听器：虽然计算属性在大多数情况下更合适，但当需要在数据变化的时候执行异步或开销较大的操作时，这个方式是最有用的。'
    }
]

    export default {
        data () {
            return {
                modal1: false,
                vueList,
                list: []
            }
        },
        methods: {
            handle (title) {
                this.modal1 = true;
                this.list = this.vueList.filter((item => {
                    if (item.header == title) {
                        return item
                    }
                }))
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>