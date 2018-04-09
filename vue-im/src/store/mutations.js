import * as types from "./mutation_types"

export default {
  // [types.NAME](state, params){
  //   state.data = params.res;
  // }

  [types.INIT_DATA](state) {
    let data = localStorage.getItem('vue-im-session');
    if (data) {
      state.sessions = JSON.parse(data);
    }
  },
  // 发送消息
  [types.SEND_MESSAGE](state, content) {
    let session = state.sessions.find(item => item.id === state.currentSessionId);
    session.messages.push({
      content: content,
      date: new Date(),
      self: true
    });
  },
  // 选择会话
  [types.SELECT_SESSION](state, id) {
    state.currentSessionId = id;
  },
  // 搜索
  [types.SET_FILTER_KEY](state, value) {
    state.filterKey = value;
  }
};
