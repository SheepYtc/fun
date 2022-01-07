<template>
  <!-- 猜字谜 -->
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
      title: '猜字谜',
      index: 0,
      list: {
        //答案
        answer: '',
        //问题
        content: '',
        //解释
        reason: '',
        type: '',
        study: ''
      }
    }
  },
  created() {
    this.getaxiosdata()
  },
  methods: {
    async getaxiosdata() {
      const { data } = await this.axios.get('https://api.tianapi.com/zimi/index?key=e58b55d2ff6f695d8f5ad68674332c5c')
      this.list.answer = data.newslist[this.index].answer
      this.list.reason = data.newslist[this.index].reason
      this.list.type = data.newslist[this.index].content
      this.list.content = data.newslist[this.index].content
      console.log(data)
      //lastIndexOf()返回指定字符在此字符串中最后一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1。
      const index = this.list.type.lastIndexOf('(')
      //开始和结束的位置，从零开始的索引
      this.list.content = this.list.type.substring(index, -this.list.type.length)
      this.list.type = this.list.type.substring(index, this.list.type.length)
      // console.log(this.list.type, 'data')
      // console.log(this.list, 'this.list')
      // console.log(data, 'data.newslist[this.index]')
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