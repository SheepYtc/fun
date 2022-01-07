<template>
  <!-- //猜灯谜 -->
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
      title: '猜灯谜',
      index: 0,
      list: {
        //答案
        answer: '',
        //问题
        content: '',
        //解释
        reason: '',
        //类型
        type: '',
        study: ''
        //         answer: "冥"
        // content: "小六巧用日当头，宝盖去点顶上走"
        // reason: "从谜面上看，关键词为：六、日、冖（宝盖头“宀”去点）；将它们组合起来即为“冥”。"
        // type: "打一字"
      }
    }
  },

  created() {
    this.getaxiosdata()
  },
  methods: {
    async getaxiosdata() {
      const { data } = await this.axios.get('https://api.tianapi.com/caizimi/index?key=e58b55d2ff6f695d8f5ad68674332c5c')
      this.list.answer = data.newslist[this.index].answer
      this.list.content = data.newslist[this.index].riddle
      this.list.reason = data.newslist[this.index].description
      this.list.type = data.newslist[this.index].type
      // console.log(this.list.content, 'data')
      // console.log(this.list, 'data')

      // console.log(this.list.answer, 'this.list.answer')
      // console.log(666)
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