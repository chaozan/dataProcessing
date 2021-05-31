<template>
    <div>
        <Modal
            v-model="modal1"
            width="550"
            :title="title"
            @on-cancel="console"
            @on-ok="console">
                <div class="jsonmodel">
                    <p v-for="(item, index) in head" :key="item + index">{{item.key}}:"{{item.value}}",</p>
                </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'jsonmodel',
        data () {
            return {
                modal1: false,
                title: '生成成功',
                head: [],
            }
        },
        methods: {
            handle (json) {
                var obj;
                this.modal1 = true;
                for(var key in json) {
                    obj = {
                        key: key,
                        value: json[key]
                    }
                    this.head.push(obj)
                }
            },
            console () {
                this.head = [];
                this.value = [];
            }
        }
    }
</script>

<style scoped>
.jsonmodel {
    width: 450;
    margin: 0 auto;
    text-align: left;
    padding-left: 50px;
}
</style>