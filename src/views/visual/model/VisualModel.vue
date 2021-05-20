<template>
    <div>
        <Modal
            v-model="modal1"
            width="50%"
            :title="videotitle">
            <video :src="videoUrl" autoplay="autoplay" controls="controls" width="100%" height="100%"></video>
            <div slot="footer">
                <Button @click="clone">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'visualModel',
        data () {
            return {
                modal1: false,
                videoUrl: null,
                videotitle: '',
            }
        },
        methods: {
            handel (title, videoUrl) {
                this.modal1 = true;
                this.videotitle = title;
                this.videoUrl = videoUrl;
            },
            clone () {
                this.modal1 = false;
            }
        }
    }
</script>