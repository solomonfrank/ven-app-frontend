import {
  FETCH_FILTER_CARD_SUCCESS,
  IS_FETCHING_CARD,
  FETCH_FILTER_CARD_ERROR,
} from "../Actions/ActionTypes/filterCard";
const init = {
  loading: false,
  filterCards: [],
  error: null,
};
export const filterCardReducer = (state = init, action) => {
  switch (action.type) {
    case IS_FETCHING_CARD:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FILTER_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        filterCards: action.payload,
      };
    case FETCH_FILTER_CARD_ERROR:
      return {
        ...state,
        loading: false,
        filterCards: action.payload,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default filterCardReducer;
