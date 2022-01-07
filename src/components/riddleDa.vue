<template>
  <div>
    <Publicnav :title="title"></Publicnav>
    <Publiccard :title="title" :list="list" @getaxiosdata="getaxiosdata"></Publiccard>
    <!-- //歇后语 -->
  </div>
</template>
<script>
import Publiccard from './everybody_public/public_card.vue'
import Publicnav from './everybody_public/public_nav.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: '歇后语',
      index: 0,
      list: {
        //答案
        answer: '',
        //问题
        content: '',
        //解释
        reason: '',
        type: '打歇后语',
        study: ''
      }
    }
  },
  created() {
    this.getaxiosdata()
  },
  methods: {
    async getaxiosdata() {
      const { data } = await this.axios.get('https://api.tianapi.com/xiehou/index?key=e58b55d2ff6f695d8f5ad68674332c5c&num=1')
      this.list.content = data.newslist[this.index].quest
      this.list.answer = data.newslist[this.index].result
      // console.log(this.list.answer)
      // console.log(this.list.content)
    }
  },
  components: {
    Publicnav,
    Publiccard
  },
  computed: {
    ...mapState(['newactions'])
  }
}
</script>

<style lang="less" scoped>
</style>