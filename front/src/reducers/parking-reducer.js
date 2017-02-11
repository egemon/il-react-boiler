import { saveState, loadState } from '../local-storage';

const max = {
  disabled: 5,
  sedan: 15,
  truck: 10,
};
const initialState = loadState() || {
  disabled: new Array(max.disabled).fill(null),
  sedan: new Array(max.sedan).fill(null),
  truck: new Array(max.truck).fill(null),
};

function getEmptyPosition(arr) {
  return arr.indexOf(null);
}

function parkTo(stack, car, state) {
  const position = getEmptyPosition(state[stack]);
  if (position !== -1) {
    const newState = { ...state };
    const newCar = {
      ...car,
      parkingInfo: {
        stack,
        position,
      },
    };
    newState[stack][position] = newCar;
    return newState;
  }
  return false;
}

function handleFullState(state, car) {
  alert(`Parking is full ${car.type}`);
  return state;
}
// car {type, parkingInfo: {stack, position}}
export default function (state = initialState, { type, payload: car }) {
  let newState;

  switch (type) {
    case 'CAR_ARRIVED':
      switch (car.type) {
        case 'disabled':
          newState = parkTo('disabled', car, state) ||
            parkTo('truck', car, state) ||
            parkTo('sedan', car, state) ||
            handleFullState(state, car);
          return saveState(newState);
        case 'sedan':
          newState = parkTo('sedan', car, state) ||
            parkTo('truck', car, state) ||
            handleFullState(state, car);
          return saveState(newState);
        case 'truck':
          newState = parkTo('truck', car, state) ||
            handleFullState(state, car);
          return saveState(newState);
        default:
          return state;
      }

    case 'CAR_LEFT':
      const stack = state[car.parkingInfo.stack];
      stack[car.parkingInfo.position] = null;
      newState = {
        ...state,
        [car.parkingInfo.stack]: [...stack],
      };
      return saveState(newState);
    default:
      return state;
  }
}
