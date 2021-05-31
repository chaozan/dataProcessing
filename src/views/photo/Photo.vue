<template>
    <div>
        <h2 class="title">相册</h2>
        <Carousel autoplay v-model="value2" loop radius-dot dots="outside">
            <CarouselItem v-for="(item, index) in imgList" :key="item + index">
                <img class="demo-carousel photoImg" :src="item.src" />
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>

    const imgList = [
        {
            id: 1,
            src: require("@/assets/photo/1.jpg")
        },
        {
            id: 2,
            src: require("@/assets/photo/2.jpg")
        },
        {
            id: 3,
            src: require("@/assets/photo/3.jpg")
        },
        {
            id: 4,
            src: require("@/assets/photo/4.jpg")
        }
    ]
    export default {
        name: 'photo',
        data () {
            return {
                value2: 0,
                imgList
            }
        }
    }
</script>

<style scoped>
.photoImg {
    width: 100%;
    height: 400px;
}
.title {
    width: 100%;
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
}
</style>