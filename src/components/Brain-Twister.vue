<template>
  <!-- //谜语大全 -->
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
      title: '谜语大全',
      index: 0,
      list: {
        //答案
        answer: '',
        //问题
        content: '',
        //解释
        reason: '',
        type: '猜谜语',
        study: ''
      }
    }
  },
  created() {
    this.getaxiosdata()
  },
  methods: {
    async getaxiosdata() {
      const { data } = await this.axios.get('https://api.tianapi.com/riddle/index?key=e58b55d2ff6f695d8f5ad68674332c5c')
      this.list.answer = data.newslist[this.index].answer
      // this.list.type = data.newslist[0].quest
      this.list.content = data.newslist[this.index].quest
      console.log(data)
      //lastIndexOf()返回指定字符在此字符串中最后一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1。
      // var index = this.list.type.lastIndexOf('（')
      // // var index1 = this.list.type.lastIndexOf('提')
      // var index1 = this.list.type.lastIndexOf('　　提')
      // var index2 = this.list.type.lastIndexOf('      提')

      // if (index == -1) {
      //   this.list.content = this.list.type.substring(index1, -this.list.type.length).trim()
      //   this.list.type = this.list.type.substring(index1, this.list.type.length).trim()
      // } else if (index1 == -1) {
      //   this.list.content = this.list.type.substring(index2, -this.list.type.length).trim()
      //   this.list.type = this.list.type.substring(index2, this.list.type.length).trim()
      // } else {
      //   this.list.content = this.list.type.substring(index, -this.list.type.length).trim()
      //   this.list.type = this.list.type.substring(index, this.list.type.length).trim()
      // }
      // console.log(index)

      // // console.log(this.list.type, 'data')
      // console.log(this.list.type, '123')
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