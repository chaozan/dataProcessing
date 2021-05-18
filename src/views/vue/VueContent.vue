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
        header: 'vue',
        title: '111',
        titleCon: '111',
        content: '111',
        code: '111',
        conBody: '111'
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