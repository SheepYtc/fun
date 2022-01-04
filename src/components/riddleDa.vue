<template>
  <div>
     <Publicnav :title="title"></Publicnav>
    <Publiccard :title="title"></Publiccard>
<!-- //歇后语 -->

  </div>
</template>
<script>
import Publiccard from './everybody_public/public_card.vue'
import Publicnav from './everybody_public/public_nav.vue'
  export default {
    data() {
      return {
        title: "歇后语"
      }
    },
    components: {
     Publicnav,
     Publiccard,
   },
  }
</script>

<style lang="less" scoped>

</style>