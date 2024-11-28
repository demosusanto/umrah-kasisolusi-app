import { CONSTANT } from "../../helpers";
import { loader } from "./LoaderAction";
import { UmrahService } from "../../Services/UmrahService";
// import axios from "axios";
// import { jsonToQueryString } from "../../helpers";
import { AlertActions } from './AlertAction';

export const UmrahAction = {
  closeForm,openForm, fetchSave
};


function fetchSave(params, successCallback, errorCallback) {
  return dispatch => {
      dispatch(loader(true));
      dispatch(beforeSubmitForm());
      UmrahService.fetchSave(params)
          .then(res => {
            // console.log('CEKK', res.params)
              dispatch(loader(false));
              if (res.status == CONSTANT.API_SUCCESS) {
                  dispatch(afterSubmitForm());
                  dispatch(AlertActions.success("res.message"));
                  successCallback();
              }
              else {
                  errorCallback();

                  if (res.status == CONSTANT.API_ERROR_STRING)
                      dispatch(AlertActions.error(res.message));
                  else if (res.status == CONSTANT.API_ERROR_ARRAY)
                      dispatch(AlertActions.errorArray(res.message));
              }

              setTimeout(() => {
                  dispatch(AlertActions.clear());
              }, CONSTANT.KEY_ALERT_TIMEOUT);

          });
  }
};


function closeForm() {
  return { type: CONSTANT.KEY_GSHEET_TOOGLE, isFormOpen: false };
}

function openForm() {
  return { type: CONSTANT.KEY_GSHEET_TOOGLE, isFormOpen: true };
}
function beforeSubmitForm() {
  return { type: CONSTANT.KEY_GSHEET_SUBMIT, isFormSubmit: true };
}

function afterSubmitForm() {
  return { type: CONSTANT.KEY_GSHEET_SUBMIT, isFormSubmit: false };
}
