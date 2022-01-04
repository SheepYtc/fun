<template>
<!-- // 成语接龙 -->
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
        title: "成语接龙"
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