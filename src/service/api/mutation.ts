/** @format */

import type { UpdatePostDataProp } from "../../types";
import api from "./index";

const updatePostData = async ({
  id,
  data,
}: {
  id: number;
  data: UpdatePostDataProp;
}) => {
  try {
    const response = await api.patch(`/posts/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { updatePostData };
