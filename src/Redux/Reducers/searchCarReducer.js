import {
  SEARCH_ITEM_SUCCESS,
  SEARCHING_ITEM,
  SEARCH_ITEM_ERROR,
} from "../Actions/ActionTypes/searchType";
const init = {
  loading: false,
  searchedCars: [],
  error: null,
};
export const searchCarReducer = (state = init, action) => {
  switch (action.type) {
    case SEARCHING_ITEM:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        searchedCars: action.payload,
      };
    case SEARCH_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        searchedCars: action.payload,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default searchCarReducer;
