import expect from 'expect';
import aboutReducer from '../about-reducer';

describe('aboutReducer', () => {
  function stateBefore() {
    return {
      count: 2,
    };
  }

  it('should change counter', () => {
    const action = {
      type: 'ABOUT.CHANGE_COUNT',
      payload: {
        count: 1,
      },
    };

    const actual = aboutReducer(stateBefore(), action);
    const expected = {
      count: 1,
    };

    expect(actual).toEqual(expected);
  });
});
