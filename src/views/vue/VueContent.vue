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
    },
    {
        header:'路由容易忘的知识点',
        title:'redirect',
        titleCon:'如果导航到了某个路由下的话就让它调到指定的路由对象',
        content:'嵌套路由：children （父路由下嵌套子路由，通常用于导航、tab栏等）',
        code:'动态路由： 在注册路由的路径后面接参数，其中:id就是参数。 在跳转路由之后的组件中使用传递的参数：',
        conBody:'动态路由传值的三种方式: 直接路由地址拼接，params传值（刷新之后数据丢失）,query传值（刷新之后数据不会丢失）',
    },
    {
        header:"路由守卫",
        title:"vue路由中路由守卫非常重要",
        titleCon:"全局前置守卫： router.beforeEach，当一个导航路由被触发时，全局前置守卫会根据创建的顺序调用。守卫时异步解析执行的，此时导航在所有守卫resolve结束之前一直处于等待中。",
        content:"每个守卫方法都会接受三个参数： * to ： 即将要进入的路由对象 * from：当前导航正好离开的路由对象（当前路由） * next：重要，一定要调用该方法来resolve这个钩子。 * next()：执行这个方法，进入管道中的下一个钩子，开始跳转路由对象。如果全部钩子执行完了，则导航的状态就是confirmed，即跳转成功。 * next(false)：中断当前的导航。如果浏览器的URL改变了（可能是用户手动或者点击的浏览器后退按钮），那么URL地址会重置到当前的from路由对应的地址，即当前的路由对象。 * next('/')或next({path: '/'})：跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航，你可以向next传递任意的路由路径 * next(error)：略。暂时用不到，需要的话再查文档。",
        code:" 全局后置钩子： router.afterEach 全局后置钩子和守卫不同的是，这些钩子不会接收next()函数也不会改变导航本身",
        conBody:"组件内的守卫： * beforeRouteEnter * beforeRouteUpdate * beforRouteLeave beforeRouteEnter守卫不能访问 组件实例 this，因为守卫在导航跳转成功之前开始调用，这时候组件实例还没有被创建。不过，可以通过一个回调给next函数， 来访问组件实例。在导航被确认之后的时候执行回调，并且把组件实例作为回调方法的参数。",
    },
    {
        header:"VUE的生命周期",
        title:"VUE的生命周期钩子函数：",
        titleCon:"渲染页面前：",
        content:"* beforeCreate: 组件实例创建之前。实例还没有初始化，这个时候还没有el和data。 * created: 组件实例创建之后。在这里实例已经初始化了。实例完成的配置有：数据观测、属性和方法的运算，watch/event事件的回调。完成了data数据的初始化，el还没有。然后，挂载阶段还没有开始，此时组件还没有渲染到页面上，$el属性目前不可见。 * beforeMount: 挂载开始之前调用此钩子函数。相关的render函数首次被调用（虚拟DOM），实例完成的配置有：编译模板，把data里面的数据和模板生成html，完成了el和data初始化。注意：此时数据还以没有渲染到html页面上，只是做了一些准备工作。",
        code:"渲染页面后：",
        conBody:"* mounted: 挂载完成。也就是模板中的html已经渲染到了页面上，此时可以做一些ajax的操作。注意：mounted钩子函数只会执行一次。 * beforeUpdate: 在数据更新之前调用。发现在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加的重复的渲染过程。 * updated: 数据更新之后调用。在由于数据更改导致的虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多情况下，应该避免在此期间更改状态，因为可能会导致更新无限循环，该钩子在服务器渲染期间不被调用。 * beforeDestroy: 在组件实例销毁之前被调用。此时实例仍然完全可用。 * 这一步还可以用 this 来获取实例 * 一般在这一步做一些重置的操作，比如清除掉组件中的定时器和监听的dom事件。 * destroyed: 在组件实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁，该钩子函数在服务器渲染期间不被调用。",
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