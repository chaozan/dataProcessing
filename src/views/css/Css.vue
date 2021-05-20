<template>
    <div class="visual">
        <h2 class="title">视频分类</h2>
    </div>
</template>

<script>
import {visualClassification} from '@/api/request'
    export default {
        name: 'musice',
        data () {
            return {

            }
        },
        created() {
            let data = {
                id: 14
            }
            visualClassification(data).then(res => {
                console.log(res)
            }).catch(err => {
                console.log('请求失败')
            })
        }
    }
</script>

<style scoped>
.visual {
    width: 100%;
}
.visual .title {
    width: 100%;
    font-size: 32px;
    text-align: center;
}
</style>