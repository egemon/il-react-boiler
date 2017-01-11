export function changeCount(page, count) {
  return {
    type: `${page}.CHANGE_COUNT`,
    payload: {
      count
    }
  }
}
