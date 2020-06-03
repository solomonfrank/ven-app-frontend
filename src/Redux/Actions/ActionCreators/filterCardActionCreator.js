import {
  FETCH_FILTER_CARD_SUCCESS,
  IS_FETCHING_CARD,
  FETCH_FILTER_CARD_ERROR,
} from "../ActionTypes/filterCard";

export const isFetchingFilterCard = () => ({
  type: IS_FETCHING_CARD,
});

export const fetchingFilterCardSuccess = (payload) => ({
  type: FETCH_FILTER_CARD_SUCCESS,
  payload,
});

export const fetchingFilterCardError = (payload) => ({
  type: FETCH_FILTER_CARD_ERROR,
  payload,
});
