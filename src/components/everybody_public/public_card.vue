<template>
  <div>
    <!-- 中间卡片 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="span">{{title}}</span>
        <!-- 下一条按钮 -->
        <van-button icon="replay" style="float: right;  margin-top: -3px;" size="small" round type="info" :disabled="isnetxt" @click="hendlnext">下一条</van-button>
        <!-- 题目和type -->
        <div>
          <van-cell class="cell" :border="false" :title="list.content" :value="list.type" v-show="list.content != ''">
          </van-cell>
          <van-cell v-show="list.content == ''">
            <h3>今日游戏已上限，注意休息，改日再来！</h3>
          </van-cell>
        </div>

        <!-- 查看答案 -->
        <div class="showbutton">
          <h2>答案：
            <span v-text="answer"></span>
          </h2>
          <van-switch inactive-color="#333" v-model="checked" :disabled="!checked" size="20px" @change="answershow" />
        </div>
        <!--答对的描述  -->

        <div class="describe" v-show="!checked">
          <div v-show="list.reason != ''">
            <van-divider :style="{ color: '#95a5a6', borderColor: '#34495e'}" content-position="left">描述</van-divider>
            {{list.reason}}
          </div>
          <div v-show="list.study != ''">
            <van-divider :style="{ color: '#95a5a6', borderColor: '#34495e'}" content-position="left">例句</van-divider>
            {{list.study}}
          </div>
        </div>

      </div>
      <!-- 对错按钮 -->
      <div class="resultbutton">
        <van-badge :content="count.dui" :max="max">
          <!-- /对的按钮 -->
          <van-button icon="success" round :disabled="issuccess" type="primary" @click="hendlsuccess"></van-button>
        </van-badge>
        <!-- //错的按钮 -->
        <van-badge :content="count.cuo" :max="max">
          <van-button icon="cross" round :disabled="iscross" type="danger" @click="hendlcrosss"></van-button>
        </van-badge>
      </div>
      <van-cell class="count">
        <div class="dui">当前对了{{count.dui}}条</div>
        <el-divider class="divider" direction="vertical"></el-divider>
        <div>当前错了{{count.cuo}}条</div>
      </van-cell>
      <!-- {{content}} -->
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
import { mapState } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Object,
      default() {
        return {
          content: '今日游戏已上线，注意休息，改日再来'
        }
      }
    }
  },
  data() {
    return {
      //显示对错遮罩层图片状态
      overlayimgdui: true,
      overlayimgcuo: true,
      //遮罩层
      overlayshow: false,
      //下一条的状态
      isnetxt: true,
      //查看答案
      checked: true,
      // //对总数
      // successkey: 0,
      // //错总数
      // crosskey:0,
      //最大值99+
      max: 99,
      //存放答案
      answer: '******',
      //对的状态
      issuccess: true,
      //错的状态
      iscross: true,
      count: {
        dui: 0,
        cuo: 0
      }
    }
  },
  //报表数据共享vuex，数据互不干扰，可以达到数据单独渲染
  created() {
    this.newactions.map(item => {
      if (item.name === this.title) {
        this.count = item.count
        // console.log(this.list, 'this.list')
      }
    })
    // console.log(this.title,"title");
    console.log(this.list.content)
  },
  methods: {
    //遮罩层返回首页
    handelreturn() {
      this.overlayshow = false
      console.log(this.issuccess, 'fanhui')
    },
    //换题目
    Change_title() {
      this.overlayshow = false
      this.hendlnext()
    },
    //发起下一条
    hendlnext() {
      //重新发起axios数据
      this.newactions.map(item => {
        if (item.name === this.title) {
          this.$emit('getaxiosdata')
          // this.$parent.getaxiosdata()
        }
      })
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
    answershow() {
      //次数没了，不能显示答案
      if (this.list.content === '') {
        this.checked = true
      }
      //  this.checked = !this.checked
      if (this.checked === false) {
        //显示答案
        if (this.list.pinyin != undefined) {
          this.answer = this.list.answer + ' ' + this.list.pinyin
        } else {
          this.answer = this.list.answer
        }

        //对的状态
        this.issuccess = false
        // 错的状态
        this.iscross = false
      } else {
        // 无法在改变显示答案
        this.checked = false
      }
    },
    //对按钮
    hendlsuccess() {
      if (this.issuccess === false) {
        setTimeout(() => {
          //改变错误的遮罩层状态
          this.overlayimgcuo = false
          this.overlayimgdui = true
          this.overlayshow = true
        }, 500)
      }
      console.log(this.issuccess, 'this.issuccess1111')
      //错按钮
      this.iscross = true
      //对的状态
      this.issuccess = true
      //对是数量++
      this.count.dui++
      //发起下一条的状态
      this.isnetxt = false
    },
    //错按钮
    hendlcrosss() {
      console.log(this.iscross, 'this.iscross123')
      //改变遮罩层图片的状态
      setTimeout(() => {
        //改变正确的遮罩层状态
        this.overlayimgdui = false
        this.overlayimgcuo = true
        this.overlayshow = true
      }, 500)
      //错按钮o
      this.iscross = true
      //对的状态
      this.issuccess = true
      //错的数量++
      this.count.cuo++
      //发起下一条的状态
      this.isnetxt = false
    }
  },
  computed: {
    ...mapState(['newactions'])
  }
}
</script>

<style lang="less" scoped>
.subject {
  .overlayshow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      margin: 30px 0px 0px 20px;
      font-size: 30px;
      color: white;
      letter-spacing: 10px;
    }
    .returnbutton {
      display: flex;
      justify-content: space-between;
      .van-button {
        margin: 30px 20px;
        border-radius: 8px;
        font-size: 16px;
        // font-weight: ;
        span {
          color: black;
        }
      }
    }

    .successimg {
      animation: juap 0.8s infinite alternate;
      @keyframes juap {
        0% {
          transform: translateY(25px);
          // box-shadow: 0px 1px 1px 0 rgb(252, 249, 249,0.3);
        }
        100% {
          transform: translateY(-25px);
        }
      }
    }
    .crossimg {
      animation: about 0.8s infinite alternate;
      @keyframes about {
        0% {
          transform: rotate(9deg);
          // box-shadow: 0px 1px 1px 0 rgb(252, 249, 249,0.3);
        }
        100% {
          transform: rotate(-9deg);
        }
      }
    }
  }
}

.box-card {
  //当前数量
  .van-cell__value {
    display: flex;
    justify-content: space-around;
    .divider {
      height: 20px;
      background-color: #95a5a6;
    }
    .divider,
    div {
      font-size: 20px;
      margin-top: 20px;
    }
    .dui {
      color: #27ae60;
    }
    :nth-child(3) {
      color: #e74c3c;
    }
    // border: 1px solid rebeccapurple;
  }
  margin: 25px 8px 0px 8px;
  .span {
    color: orange;
    margin-left: 8px;
    font-size: 18px;
    font-weight: 600;
  }
  .cell {
    margin: 20px 0px 0px -8px;
    font-size: 16px;
    :nth-child(1) {
      flex: 1;
      // padding-top: 20px;
    }
    //   :nth-child(2){
    //     // margin-left: 20px;
    //   // padding-top: 20px;
    // }
  }
  .showbutton {
    height: 30px;
    display: flex;
    // justify-content: c;
    justify-content: space-between;
    padding: 0px 10px 0px -5px;
    margin-top: 15px;
    align-items: center;

    .van-switch {
      margin-right: 10px;
      // padding: -10px 30px;
    }
    h2 {
      width: 251px;
      :nth-child(1) {
        font-size: 16px;
      }
    }
  }
  .resultbutton {
    display: flex;
    justify-content: space-around;
    .van-button {
      margin-right: 5px;
      height: 32px;
      // padding: -10px 30px;
    }
  }
  .describe {
    div {
      font-size: 15px;
      letter-spacing: 3px;
    }
  }
}
</style>