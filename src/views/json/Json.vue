<template>
    <div>
        <div class="json">
            <h2 class="title">生成json对象</h2>
            <Form ref="jsonForm" :model="form" label-position="left" :label-width="100">
                <FormItem>
                    <div slot="label" class="label">标题</div>
                    <Input v-model="form.header"></Input>
                </FormItem>
                <FormItem>
                    <div slot="label" class="label">概要</div>
                    <Input v-model="form.title"></Input>
                </FormItem>
                <FormItem>
                    <div slot="label" class="label">概要内容</div>
                    <Input v-model="form.titleCon"></Input>
                </FormItem>
                <FormItem>
                    <div slot="label" class="label">详情</div>
                    <Input v-model="form.content"></Input>
                </FormItem>
                <FormItem>
                    <div slot="label" class="label">代码详解</div>
                    <Input v-model="form.code"></Input>
                </FormItem>
                <FormItem>
                    <div slot="label" class="label">代码主体</div>
                    <Input v-model="form.conBody"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('jsonForm')">生成</Button>
                    <Button style="margin-left: 20px;" @click="empty">清空</Button>
                </FormItem>
            </Form>
        </div>
        <json-model ref="jsonmodel" />
    </div>
</template>

<script>
import jsonModel from './jsonModel'
    export default {
        name: 'json',
        components: {jsonModel},
        data () {
            return {
                form: {
                    header: '',
                    title: '',
                    titleCon: '',
                    content: '',
                    code: '',
                    conBody: '',
                },
                jsonObj: {}
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate(valid => {
                    return valid;
                }).then(res => {
                    this.jsonObj = {
                        header: this.form.header,
                        title: this.form.title,
                        titleCon: this.form.titleCon,
                        content: this.form.content,
                        code: this.form.code,
                        conBody: this.form.conBody,
                    }
                    let json = this.jsonObj;
                    this.$refs.jsonmodel.handle(json)
                })
            },
            empty () {
                this.form = {}
            }
        },
        created () {
            // this.$axios.get('http://localhost:8080/json.json').then(res => {
            //     console.log('then')
            //     console.log(res)
            // }).catch(err => {
            //     console.log('catch')
            //     console.log(err)
            // })
        }
    }
</script>

<style scoped>
.json {
    width: 650px;
    margin: 20px auto;
}
.json .title {
    width: 100%;
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
}
.json .label {
    width: 100px;
    text-align: right;
    padding-right: 10px;
}
</style>
