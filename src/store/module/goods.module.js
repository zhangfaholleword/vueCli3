import store from '../index'

export const MODULE_NAME = 'goods'
export default {
  namespaced: true,
  state: {
    goodsList: [
      {id: 1, text: '巧克力', done: true},
      {id: 2, text: '咖啡', done: false}
    ],            // 物资列表
    pageSize: 10, // page size
    pageIndex: 1, // page index
    pageCount: 0, // page count
    goodsTotal: 0 // goods总和
  },
  // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
  getters: {
    getGoodsList: state => {
      return state.goodsList.filter(todo => todo.done)
    },
    getGoodsTotal: state => {
      return state.goodsList.filter(todo => todo.done).length
    },
  },
  actions: {
    increment() {
      console.log(1111);
    }
  }
  ,
  mutations: {}
}
