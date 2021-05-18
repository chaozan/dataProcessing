<template>
    <div>
        <transition name="fade" mode="out-in">
        　　<router-view ></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        watch: {
           
        }
    }
</script>

<style scoped>
.fade-enter {
   opacity: 0;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active,.fade-enter-active {
    transition:opacity 0.2s;
}
</style>