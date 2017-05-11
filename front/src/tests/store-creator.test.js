import expect from 'expect';
import createAppStore from '../store-creator';

describe('store-creator', () => {
  it('should update counter of home page', () => {
    const store = createAppStore();
    store.dispatch({
      type: 'ABOUT.CHANGE_COUNT',
      payload: {
        count: 3,
      },
    });

    const actual = store.getState();
    const expected = {
      about: {
        count: 3,
      },
    };

    expect(actual.about).toEqual(expected.about);
  });

  it('should initialize', () => {
    const store = createAppStore();
    const actual = store.getState();
    const expected = {
      about: {
        count: 0,
      },
      messages: {
        messages: [],
      },
    };

    expect(actual).toEqual(expected);
  });
});
