export default function (state = { count: 0 }, { type, payload }) {
  switch (type) {
    case 'ABOUT.CHANGE_COUNT':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export const getCount = ({ count }) => ({ count });
