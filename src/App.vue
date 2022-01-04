<template>
  <div class="box">     
      <!-- //入口 -->
      <!-- <Home></Home> -->
      <transition name="test">
       <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
  export default {
  components: { Home },
    
  }
</script>

<style lang="less" scoped>

//路由动画
// .test-enter{
//   transform: translateX(100%);
// }

// .test-enter-to{
//   transform: translateX(0);

// }
// .test-enter-active{

//   // position: absolute;
//   transition: all ease-in 0.8s;
// }
// .test-leave{
//   transform: translateX(0);

// }
// .test-leave-to{
//   transform: translateX(100%);
// }

// .test-leave-active{
//       // position: absolute;
//   transition: all ease-in 0.5s;


// }

  *{
    margin: 0;
    padding: 0;
    // color: black;
    list-style: none;
  }

  .box{
    margin: 0 auto;
    max-width: 100%;
  }
</style>