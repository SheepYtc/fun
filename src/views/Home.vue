<template>
  <div>
    <publichomenav :title="title"></publichomenav>
      <ul class="liitme">
        <li v-for="(item,index) in newactions" :key="index">
          <router-link :to="item.to" replace>
           <div class="imgandtest">
            <img :src="item.url" alt="">
            <span>{{item.name}}</span>
          </div>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"
import bus from "@/assets/js/eventBus.js"
import publichomenav from '../components/everybody_public/public_home_nav.vue'
//  主页
  export default {
 
      data() {
        return {
          title:"趣味娱乐"
        }
      },
      created(){
      },
      methods:{
        onClickLeft() {
           this.$message({
          message: '已在当前页面',
          type: 'success',
          duration: 1000,
        });
        },
        onClickRight() {
         this.$router.push("/report_forms")
        },
      },
      computed:{
        ...mapState(["newactions"])
      },
       components: { 
         publichomenav 
         },

  }
</script>

<style lang="less" scoped>
  a{
    color: black;
  }
.liitme{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .imgandtest{
  //  box-shadow: 1px 0px 0px 0px #666;
    width: 138px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 100px;
      height: 100px;
    }
    span{
       margin: 20px 0;
      font-size: 22px;
      // text-align: center;
      // font-weight: 600;
    }
  }

}

</style>