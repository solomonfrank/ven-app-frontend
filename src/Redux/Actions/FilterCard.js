import { getFilterList } from "../../Services";
import {
  isFetchingFilterCard,
  fetchingFilterCardSuccess,
  fetchingFilterCardError,
} from "../Actions/ActionCreators/filterCardActionCreator";

export const filterCardAction = () => async (dispatch) => {
  dispatch(isFetchingFilterCard());

  try {
    const {
      data: { payload },
    } = await getFilterList();

    console.log(payload);
    dispatch(fetchingFilterCardSuccess(payload));
  } catch (err) {
    console.log(err);
    // dispatch(fetchingFilterCardError(err.response.data));
  }
};
