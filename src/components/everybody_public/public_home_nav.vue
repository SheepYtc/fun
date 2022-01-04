<template>
  <div>
      <van-nav-bar :title="title"  right-text="报表"  left-text="返回" 
      left-arrow  
      @click-left="onClickLeft"
      @click-right="onClickRight">
        <!-- <template #right>
          <van-icon name="ellipsis" size="18" ></van-icon>
        </template> -->
      </van-nav-bar>
    </div>
</template>

<script>
  export default {
    props:{
      title:{
        type:String,
        default:""
      }
    },
    data() {
      return {
      }
    },
    methods:{
     onClickLeft() {
         this.$router.push("/home")
       
        },  
        onClickRight() {
         this.$router.push("/report_forms")

        },
    }
  }
</script>

<style lang="less" scoped>

</style>