<template>
<div>
      <div class="wrapper">
        <div class="block">
          <publichomenav :title="title"></publichomenav>
            <van-collapse v-model="activeNames" v-for="(item,index) in newactions" :key="index">
              <van-collapse-item :title="item.name"  name="1">
                <div class="result_Total">
                  <span>对0条</span>
                  <el-divider class="divider" direction="vertical"></el-divider>
                  <span>错0条</span>
                </div>
              </van-collapse-item>
            </van-collapse>
        </div>
      </div>
</div>
</template>

<script>
import {mapState} from "vuex"
import publichomenav from "@/components/everybody_public/public_home_nav.vue"
  export default {
    data() {
      return {
      title:"对错数据统计",
      activeNames: ['1'],
      }
    },
    computed:{
      ...mapState(['newactions']),
    },
    components:{
    publichomenav
  } 
  }
</script>

<style lang="less" scoped>
.divider{
  height: 20px;
 background-color: #95a5a6;
}
//遮罩层
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
  }
  // .van-cell__title{
  //   font-size: 18px !important;
  // }
  .duicuocell{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    letter-spacing: 10px;
    color: #3498db;
    font-weight: 600;
    
  }
  .block {
    width: 450px;
    // height: 400px;
    overflow: auto;
    // height: -450px;
    background-color: #fff;
 
    .result_Total{
      display: flex;
      justify-content: space-around;
      // align-items: center;
      // justify-content: center;
      color: black;
      font-size: 16px;
      :nth-child(1){
        color: #27ae60;
      }
      :nth-child(3){
        color: #e74c3c;
      }
      // background-color: #333;
    }
  }
</style>