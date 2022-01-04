<template>
  <div>
   <van-nav-bar :title="title" left-text="首页"  left-arrow @click-left="click_left" @click-right="click_right">
    <template #right>
      <van-icon name="apps-o"  size="25" />
    </template>
  </van-nav-bar>
    <van-action-sheet 
  title="选 择 其 他 游 戏"
  v-model="sheetshow"
  :actions="actions"
  close-on-click-action
  :close-on-click-overlay="false"
  :lock-scroll="false"
  :close-on-popstate="true"
  @select="handelselect"
  >
<van-button class="report" type="info" block round @click="close_sheet">查看结果报表</van-button>
  </van-action-sheet>
  <!-- //查看报表 -->
      <van-overlay :lock-scroll="false" :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block"  @click.stop>
          <van-cell>
            <div  class="duicuocell">
                对错数据统计
            </div>
          </van-cell>
            <van-collapse  v-model="activeNames" v-for="(item,index) in newactions" :key="index">
              <van-collapse-item disabled :title="item.name" name="0"  size="26px">
                <div class="result_Total">
                  <span>对0条</span>
                  <el-divider class="divider" direction="vertical"></el-divider>
                  <span>错0条</span>
                </div>
              </van-collapse-item>
            </van-collapse>
        </div>
      </div>
    </van-overlay>
  <div>

  </div>
  </div>
</template>

<script>

import {mapState} from "vuex"
  export default {
    props:{
      title:{
        type:String,
        default:''
      }
    },
    data() {
      return {
      activeNames: ['0'],
      show: false,
      sheetshow:false,
      actions: [],
      }
    },
    methods:{
        //选择选项
      handelselect(Action,number){
        //判断是否与当前路由相同
        if(this.$route.path === Action.to){
        this.$toast({
          message: '您选择的已是当前页面',
          icon: 'https://s3.bmp.ovh/imgs/2022/01/fe465aa1bfd86717.jpg',
        });
        }
        // 选择谁就跳到对应的路由
        this.$router.push(Action.to)
        // console.log(this.$route,"1123");
        console.log(number,"name");
        console.log(Action,"Action");
      },
            //导航左边按钮
      click_left(){
        this.$router.push("/home")
      },
      //导航右边按钮
      click_right(){
        //共享home的name
        this.actions = this.newactions
        //打开sheet菜单
        this.sheetshow = true
      }, 
         //查看报表
      close_sheet(){
        //打开遮罩层
        setTimeout(() => {
             this.show = true
        }, 400);
        //关闭sheet菜单
        this.sheetshow = false
      },  
    },
     computed:{
       ...mapState(['newactions'])
     },
 
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
    width: 350px;
    height: 410px;
    // overflow: hidden;
    overflow-y: auto;
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

.report{
  width: 350px;
  font-size: 16px;
  font-weight: 600;
  margin: 10px auto; 
}
.van-nav-bar{
  padding: 5px 0px;
}
</style>