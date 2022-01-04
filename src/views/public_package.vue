<template>
  <div class="box">
    <!-- nav 导航 -->
    <van-nav-bar title="猜灯谜" left-text="首页" left-arrow @click-left="click_left" @click-right="click_right">
    <template #right>
     <van-icon name="apps-o"  size="25" />
    </template>
  </van-nav-bar>
  <!-- 展示右边的导航 -->
  <van-action-sheet 
  title="菜  单  栏"
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
  <!-- 中间卡片 -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span class="span">猜灯谜</span>
    <!-- 下一条按钮 -->
    <van-button icon="replay" style="float: right;  margin-top: -3px;" size="small" round type="info" :disabled="isnetxt" @click="hendlnext">下一条</van-button>
      <!-- 题目和type -->
     <van-cell class="cell" :border="false"
     title="头上长树杈，身上有白花，四腿跑得快，生长在山野。" 
     value="打一动物" >
     </van-cell>
      <!-- 查看答案 -->
     <div class="showbutton">
       <h2 >答案：<span v-text="answer"></span></h2>
       <van-switch inactive-color="#333" v-model="checked" :disabled="!checked" size="20px" @change="answershow" />
     </div>
     <!--答对的描述  -->
     <div  class="describe" v-show="!checked">
        <van-divider 
          :style="{ color: '#95a5a6', borderColor: '#34495e'}" 
          content-position="left">描述</van-divider>
       <div> "梅花鹿，有着像树枝的鹿角，跳跃能力很强，尤其善长攀登陡坡，那连续大跨度的跳跃，速度轻快敏捷。"</div>
     </div>
    </div>
    <!-- 对错按钮 -->
    <div class="resultbutton">
      <van-badge :content="successkey"  :max="max">
        <!-- /对的按钮 -->
        <van-button icon="success"  round  :disabled="issuccess"  type="primary" @click="hendlsuccess"></van-button>
      </van-badge>
      <!-- //错的按钮 -->
        <van-badge :content="crosskey"  :max="max">
      <van-button icon="cross" round   :disabled="iscross" type="danger" @click="hendlcrosss"></van-button>
       </van-badge>
      </div>
     </el-card>
  </div>
  <!-- // 猜字谜 -->
</template>

<script>
  export default {
    data() {
      return {
        //展示右边的导航
        sheetshow:false,
            actions: [
              { name: '选项一' },
              { name: '选项二' },
              { name: '选项二' },
              { name: '选项二' },
              { name: '选项二' },
              { name: '选项二' },
              { name: '选项二' },
              { name: '选项三' },
            ],
        //下一条的状态
        isnetxt:true,
        //查看答案
        checked: true,
        //对总数
        successkey: 0,
        //错总数
        crosskey:0,
        //最大值99+
        max:99,
        //存放答案
        answer:'******',
        //对的状态
        issuccess:true,
        //错的状态
        iscross:true,

      }
    },
    methods:{
      //选择选项
      handelselect(number){
        console.log(number);
      },
      //查看报表
      close_sheet(){
        this.sheetshow = false
        console.log(1111);
      },
      //导航左边按钮
      click_left(){
        this.$router.push("/home")
      },
      //导航右边按钮
      click_right(){
        // console.log(1);
        this.sheetshow = true
      }, 
      //发起下一条
      hendlnext(){
        //下一条状态
        this.isnetxt = true
        //答案状态
        this.checked = true
        //对的状态
        this.issuccess = true
       // 错的状态
        this.iscross = true
        //内容改变
        this.answer = '******'
        },
      //查看答案
      answershow(){
      //  this.checked = !this.checked
        if(this.checked === false){
          //显示答案
          this.answer = "梅花鹿"
          //对的状态
          this.issuccess = false
          // 错的状态
           this.iscross = false
        }else
        {
          // 无法在改变
           this.checked = false
        }
       
      },
      //对按钮
      hendlsuccess(){
         //错按钮
          this.iscross = true
           //对的状态
          this.issuccess = true
          //对是数量++
          this.successkey++
            //发起下一条的状态
           this.isnetxt  = false
      },
      //错按钮
      hendlcrosss(){  
         //错按钮
          this.iscross = true
           //对的状态
          this.issuccess = true
          //错的数量++
          this.crosskey++
            //发起下一条的状态
           this.isnetxt  = false
      }
    }
  }
</script>

<style lang="less" scoped>
.report{
  width: 350px;
  font-size: 16px;
  font-weight: 600;
  margin: 10px auto; 
}
.van-divider{
  margin: 10px 5px;
}
.van-nav-bar{
  padding: 5px 0px;
}
.box-card{
  margin: 25px 8px 0px 8px;
  .span{
    color: orange;
    margin-left: 8px;
    font-size: 18px;
    font-weight: 600;
  }
  .cell{
    margin: 20px 0px 0px  -8px;
    font-size: 16px;
     :nth-child(1){
      flex: 2;
      // padding-top: 20px;
    }
      :nth-child(2){
        margin-left: 20px;
      // padding-top: 20px;
    }
  }
  .showbutton{
    height: 30px;
    display: flex;
    // justify-content: c;
    justify-content: space-between;
    padding: 0px 10px 0px -5px;
    margin-top: 15px; 
    align-items: center;
    .van-switch{
      margin-right: 10px;
      // padding: -10px 30px;
    }
  }
  .resultbutton{
    display: flex;
    justify-content:space-around;
     .van-button{
      margin-right: 5px;
      height: 32px;
      // padding: -10px 30px;
    }
  }
  .describe{
    :nth-child(2){
      font-size: 15px;
      letter-spacing: 3px;
    }
  }
}
</style>