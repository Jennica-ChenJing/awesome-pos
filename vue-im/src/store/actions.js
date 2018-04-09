import * as types from "./mutation_types"

export const initData = function ({
  commit
}) {
  // fetchData().then((res)=> {
  commit(types.INIT_DATA);
  // });
};
export const sendMessage = function ({
  commit
}, content) {
  // fetchData().then((res)=> {
  commit(types.SEND_MESSAGE, content);
  // });
};
export const selectSession = function ({
  commit
}, id) {
  // fetchData().then((res)=> {
  commit(types.SELECT_SESSION, id);
  // });
};
export const search = function ({
  commit
}, value) {
  // fetchData().then((res)=> {
  commit(types.SET_FILTER_KEY, value);
  // });
};

