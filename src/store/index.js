import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        newactions: [{
                "name": "猜字谜",
                "url": "https://s3.bmp.ovh/imgs/2021/12/b846158bc08e7bce.png",
                "to": "/riddle",
                "disabled": false
            },
            {
                "name": "猜成语",
                "url": "https://s3.bmp.ovh/imgs/2021/12/60aec93809f288a2.png",
                "to": "/idiom",
                "disabled": false
            }, {
                "name": "猜灯谜",
                "url": "https://s3.bmp.ovh/imgs/2021/12/b74cd7e66a06dfec.png",
                "to": "/light-fan",
                "disabled": false
            }, {
                "name": "猜灯谜",
                "url": "https://s3.bmp.ovh/imgs/2021/12/b74cd7e66a06dfec.png",
                "to": "/light-fan1",
                "disabled": false
            }, {
                "name": "歇后语",
                "url": "https://s3.bmp.ovh/imgs/2021/12/589f5626a8fe033e.png",
                "to": "/riddleDa",
                "disabled": false
            }, {
                "name": "谜语大全",
                "url": "https://s3.bmp.ovh/imgs/2021/12/39e2254d9649a68c.png",
                "to": "/Brain-Twister",
                "disabled": false
            }, {
                "name": "文化谚语",
                "url": "https://s3.bmp.ovh/imgs/2021/12/4bc974df2b9b1f06.png",
                "to": "/Cultural-prover",
                "disabled": false
            }, {
                "name": "成语接龙",
                "url": "https://s3.bmp.ovh/imgs/2021/12/0109977739d37deb.png",
                "to": "/idioms-solitaire",
                "disabled": false
            }, {
                "name": "脑筋急转弯",
                "url": "https://s3.bmp.ovh/imgs/2021/12/ea2deb2356e68fcf.png",
                "to": "/RestYu",
                "disabled": false
            }
        ]
    },
    mutations: {
        actions_nav(state, list) {
            // state.newactions = list
            // console.log(state.newactions, "newactions");
        }
    },
    actions: {},
    modules: {}
})