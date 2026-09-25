/** @format */

import api from "./index";

const fetchPostData = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchPostData };
