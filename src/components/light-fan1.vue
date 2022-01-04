
<!-- //猜灯谜 -->

<template>
 <div>
    <Publicnav :title="title"></Publicnav>
     <Publiccard :title="title"></Publiccard>
  </div>
</template>

<script>
import Publiccard from './everybody_public/public_card.vue'
import Publicnav from './everybody_public/public_nav.vue'

  export default {
    data() {
      return {
        title: "猜灯谜"
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