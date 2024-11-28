import { Header, jsonToQueryString, CONSTANT } from "../helpers";

export const UmrahService = {
  fetchSave,
};

function fetchSave(params) {
    const data = JSON.stringify(params);
    const header = new Header(data);

    const url = "https://api.sheetbest.com/sheets/2d999ecb-79b9-42a1-a179-d87c1421b3c6?_format=records";
    let config = {
      headers: header,
      method: "POST",
      body: data,
    };
    return fetch(url, config).then((response) =>
      response.json()
    );
}
