<template>
  <!-- // 猜成语 -->
  <div>
    <Publicnav :title="title"></Publicnav>
    <Publiccard :title="title" :list="list" @getaxiosdata="getaxiosdata"></Publiccard>
  </div>
</template>

<script>
import Publiccard from './everybody_public/public_card.vue'
import Publicnav from './everybody_public/public_nav.vue'

export default {
  data() {
    return {
      title: '猜成语',
      index: 0,
      list: {
        //答案
        answer: '',
        //问题
        content: '',
        //解释
        reason: '',
        type: '猜一个成语',
        //例句
        study: '',
        //拼音
        pinyin: ''
      }

      // "question": "没有意识到，没有觉察到。现多指未加注意。",
      // "abbr": "BZBJ",
      // "answer": "不知不觉",
      // "pinyin": "bù zhī bù jué",
      // "source": "明·赵弼《两教辨》：“遂使昏愚之徒，听其妖诞，舍正从邪，醉生梦死，不知不觉。尧舜三代以前，未闻有此教。”",
      // "study": "他的残忍和狠毒，时而～地在老人面前显露出来。（曹禺《王昭君》第二幕）"
    }
  },
  created() {
    this.getaxiosdata()
  },
  methods: {
    async getaxiosdata() {
      const { data } = await this.axios.get('https://api.tianapi.com/caichengyu/index?key=e58b55d2ff6f695d8f5ad68674332c5c&num=1')
      this.list.answer = data.newslist[this.index].answer
      this.list.pinyin = data.newslist[this.index].pinyin
      this.list.content = data.newslist[this.index].question
      this.list.reason = data.newslist[this.index].source
      this.list.study = data.newslist[this.index].study
      // console.log(data)
    }
  },
  components: {
    Publicnav,
    Publiccard
  }
}
</script>

<style lang="less" scoped>
</style>