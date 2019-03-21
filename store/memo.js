export const state = () => ({
  memo: [],
  page: 0,
});

export const mutations = {
  insert: function (state, obj) {
    const date = new Date();
    const fmt = date.getFullYear() + '-' + (date.getMonth() + 1)
      + '-' + date.getDate() + ' ' + date.getHours() + ':'
      + date.getMinutes();
    state.memo.unshift({
      title: obj.title,
      content: obj.content,
      created: fmt
    });
  },

  set_page: function (state, page) {
    state.page = page;
  },

  remove: function (state, obj) {
    const num = 0;
    for (let i = 0; i < state.memo.length; i++) {
      const ob = state.memo[i];
      if (ob.title === obj.title
        && ob.content === obj.content
        && ob.created === obj.created) {
        alert('remove it! --' + ob.title);
        state.memo.splice(i, 1);
        return;
      }
    }
  }
}
