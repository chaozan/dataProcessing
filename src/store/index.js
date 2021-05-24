import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: [
      {
        userName: 'admin',
        password: '000000',
        title: '管理员',
        iphone: '15127998381',
        id: '1',
        individual: '景甜（Jing Tian），1988年7月21日出生于陕西省西安市，华语影视女演员。2006年，景甜发行了个人首张音乐EP《你是谁》，并正式踏上演艺之路。2010年，她凭借爱情片《我的美女老板》崭露头角。2011年，景甜因主演古装片《战国》而获得更多关注。2013年开始，其主演的动作片《特殊身份》，警匪片《警察故事2013》，贺岁片《澳门风云》，合计票房超过12亿人民币。',
        quality: ' 文/一抹浅香,白河，别名渭水。它属于汉江的一条支流，是南阳人的母亲河。说起我的童年，就不得不提到白河，它哺育了世世代代的南阳人，就如同一条白丝带，紧紧包围着南阳市；也好似一怀襁褓，包裹着这一方不知名的小城。多少个春秋冬夏，白河静静地流淌着，她很少泛滥，是一个温柔的母亲，但她却不曾干涸，源源不断地为子女们送来生命之源。对我来说，无论哪个季节，白河都是美丽动人的。但在内心深处，则是更偏向于春季的白河了！当薄雾拂晓之时，天才刚刚初露鱼肚白。两岸的高楼大厦还在睡梦之中，白河两岸已经柳树抽芽，春花初绽，一两声清脆婉转的莺啼在空气里飘荡，唤醒睡眼惺忪的白河河畔。'
      }
    ],
    userState: '0'
  },
  mutations: {
    alterState (state) {
      state.userState = '1'
    },
    addAdmin (state, formInline) {
      state.admin.push(formInline)
    }
  },
  actions: {
  },
  modules: {
  }
})
