import axios from "axios";

export const getFilterList = () => {
  return axios.get(
    "http://localhost:4000/api/v1/filter-data",
    {},
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const getCarItem = (payload, start, end) => {
  const body = JSON.stringify(payload);
  return axios.post(
    `http://localhost:4000/api/v1/search?start=${start}&end=${end}`,
    body,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
