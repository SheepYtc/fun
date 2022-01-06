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
        reason: ''
      }
    }
  },
  created() {
    this.getaxiosdata()
  },
  methods: {
    getaxiosdata() {
      this.axios.get('https://api.tianapi.com/zimi/index?key=e58b55d2ff6f695d8f5ad68674332c5c').then(({ data }) => {
        this.list = data.newslist[this.index]
        console.log(data.newslist[0], 'data')
      })
      console.log(666)
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