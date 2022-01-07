<template>
  <!-- // 脑筋急转弯 -->
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
      title: '脑筋急转弯',
      index: 0,
      list: {
        //答案
        answer: '',
        //问题
        content: '',
        //解释
        reason: '',
        type: '猜脑筋急转弯',
        study: ''
      }
    }
  },
  created() {
    this.getaxiosdata()
  },
  methods: {
    async getaxiosdata() {
      const { data } = await this.axios.get('https://api.tianapi.com/naowan/index?key=e58b55d2ff6f695d8f5ad68674332c5c&num=1')
      this.list.content = data.newslist[this.index].quest
      this.list.answer = data.newslist[this.index].result
      // console.log(this.list.answer)
      // console.log(this.list.content)
      console.log(data)
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