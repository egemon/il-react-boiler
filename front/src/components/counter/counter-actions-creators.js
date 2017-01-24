const changeCount = (page, count) => ({
  type: `${page}.CHANGE_COUNT`,
  payload: {
    count,
  },
});

export default changeCount
