import {
  SEARCH_ITEM_SUCCESS,
  SEARCHING_ITEM,
  SEARCH_ITEM_ERROR,
} from "../ActionTypes/searchType";

export const searchingItem = () => ({
  type: SEARCHING_ITEM,
});

export const searchItemSuccess = (payload) => ({
  type: SEARCH_ITEM_SUCCESS,
  payload,
});

export const searchItemError = (payload) => ({
  type: SEARCH_ITEM_ERROR,
  payload,
});
