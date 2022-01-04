<template>
  <div>
       <!-- 中间卡片 -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span class="span">{{title}}</span>
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
     <!-- //答对错遮罩层 -->
     <div class="subject">
       <!-- /答对的遮罩层 -->
        <div v-show="overlayimgdui">
              <van-overlay :show="overlayshow" class="overlayshow">
            <img class="successimg" src="https://s3.bmp.ovh/imgs/2022/01/d3302a597f508828.png" alt="">
            <h2>恭喜你回答正确!</h2>
            <div class="returnbutton">
              <van-button color="#f1c40f" @click="Change_title">我要换题</van-button>
              <van-button color="#f1c40f" @click="handelreturn">返回首页</van-button>
            </div>
            </van-overlay>
       </div>
      <!-- /答错的遮罩层 -->
        <div v-show="overlayimgcuo">
              <van-overlay :show="overlayshow" class="overlayshow">
            <img class="crossimg" src="https://s3.bmp.ovh/imgs/2022/01/16628126002cc535.png" alt="">
            <h2>很遗憾，猜错啦!</h2>
            <div class="returnbutton">
              <van-button color="#f1c40f" @click="Change_title">我要换题</van-button>
              <van-button color="#f1c40f" @click="handelreturn">返回首页</van-button>
            </div>
            </van-overlay>
       </div>
     </div>
     <!-- 对 -->
     <!-- https://s3.bmp.ovh/imgs/2022/01/d3302a597f508828.png -->
     <!-- 错 -->
     <!-- https://s3.bmp.ovh/imgs/2022/01/16628126002cc535.png -->  
  </div>
</template>

<script>
  export default {
     props:{
      title:{
        type:String,
        default:''
      }
    },
      data() {
        return {
          //显示对错遮罩层图片状态
        overlayimgdui:true,
        overlayimgcuo:true,
          //遮罩层
        overlayshow:false,
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
        //遮罩层返回首页
        handelreturn(){
          this.overlayshow = false
          console.log(this.issuccess,"fanhui");
       },
          // console.log(this.issuccess,"this.issuccessdui");
          // console.log(this.iscross,"this.iscrosscuo");
        //换题目
        Change_title(){
          this.overlayshow = false
          this.hendlnext()
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
        if(this.issuccess === false ){
               setTimeout(() => {
             //改变错误的遮罩层状态
             this.overlayimgcuo = false
             this.overlayimgdui = true
             this.overlayshow = true
           }, 500);
        }
        console.log(this.issuccess,"this.issuccess1111");
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
        console.log(this.iscross,"this.iscross123");
          //改变遮罩层图片的状态
         setTimeout(() => {
             //改变正确的遮罩层状态
            this.overlayimgdui = false
             this.overlayimgcuo = true
             this.overlayshow = true
           }, 500);
         //错按钮o
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

   
.subject{
    .overlayshow{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
      margin: 30px 0px 0px 20px;
      font-size: 30px;
      color: white;
      letter-spacing: 10px;
    }
    .returnbutton{
     display: flex;
     justify-content: space-between;
      .van-button{
        margin: 30px 20px;
        border-radius: 8px;
        font-size: 16px;
        // font-weight: ;
        span{
          color: black;
        }
      }
    }
  
  .successimg{
    animation: juap 0.8s infinite alternate;
    @keyframes juap {
        0%{
          transform: translateY(25px);
          // box-shadow: 0px 1px 1px 0 rgb(252, 249, 249,0.3);
        }
        100%{
            transform:translateY(-25px);
        }
      }
   }
    .crossimg{
    animation: about 0.8s infinite alternate;
    @keyframes about {
        0%{
          transform:rotate(9deg);
          // box-shadow: 0px 1px 1px 0 rgb(252, 249, 249,0.3);
        }
        100%{
          transform:rotate(-9deg);

        }
      }
   }
   }
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