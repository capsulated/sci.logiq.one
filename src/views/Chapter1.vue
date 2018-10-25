<template>
    <div>
        <carousel :per-page="1">
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
        </carousel>
    </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    name: 'Chapter1',

    components: {
      Carousel,
      Slide
    },
    data () {
      return {
        options: {}
      }
    }
  }
</script>

<style scoped>

</style>
