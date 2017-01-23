export default function (state = { count: 0 }, { type, payload }) {
  switch (type) {
    case 'ABOUT.CHANGE_COUNT':
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
