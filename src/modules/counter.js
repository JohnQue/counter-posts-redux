const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const SET_DIFF = "SET_DIFF";

export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

export const setDiff = diff => ({
  type: SET_DIFF,
  diff
});

const initialState = {
  counter: 0,
  diff: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + state.diff
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - state.diff
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    default:
      return state;
  }
}
