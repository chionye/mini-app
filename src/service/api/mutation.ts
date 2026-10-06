/** @format */

import type { UpdatePostDataProp } from "../../types";
import api from "./index";

//GET POST PUT PATCH DELETE

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

const deletePost = async (id: number) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { updatePostData, deletePost };
