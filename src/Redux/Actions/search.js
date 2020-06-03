import { getCarItem } from "../../Services";
import {
  searchingItem,
  searchItemSuccess,
  searchItemError,
} from "../Actions/ActionCreators/searchActionCreator";

export const searchAction = (param, start, end) => async (dispatch) => {
  dispatch(searchingItem());

  try {
    const {
      data: { payload },
    } = await getCarItem(param, start, end);

    dispatch(searchItemSuccess(payload));
  } catch (err) {
    dispatch(searchItemError(err.response.data));
  }
};
