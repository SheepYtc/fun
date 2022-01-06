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
import {mapState} from "vuex"
  export default {
    data() {
      return {
        title: "歇后语",
        count:
          {
            dui:0,
            cuo:0
          }
      }
    },
    // created(){
    //     this.newactions.map( item =>{
    //       if(item.name === this.title)
    //       {
    //         this.count = item.count
    //         console.log(item.count);
    //       }
    //     })
    // },
    components: {
     Publicnav,
     Publiccard,
   },
   computed:{
     ...mapState(["newactions"])
   }
  }
</script>

<style lang="less" scoped>

</style>