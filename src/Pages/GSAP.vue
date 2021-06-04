<template>
    <div class="space-y-4">
        <h1>The GreenSock Animation Platform</h1>

        <button @click="animate">Animate</button>

        <div ref="circle" class="h-8 w-8 rounded-full bg-red-500"></div>
    </div>
</template>


<script>
import { gsap } from 'gsap';

export default {
    mounted() {},
    methods: {
        animate() {
            gsap.to(this.$refs.circle, {
                x: 500,
                scale: 2,
                opacity: 0.5,
                duration: 3,
                ease: "elastic.out(1,0.3)",
                onComplete: () => {
                    alert('Completed')
                }
            })
        }
    }
}
</script>
