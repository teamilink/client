import iLinkAPI from "../config/api";

// Check whether this request should be create or update
export const saveAppearance = (data, id) => {
  return id !== undefined ? updateAppearance(data, id) : createAppearance(data);
};

export const createAppearance = async (data) => {
  const response = await iLinkAPI.post("/dashboard/appearance", data);
  return response.data;
};

export const updateAppearance = async (data, id) => {
  const response = await iLinkAPI.put(`/dashboard/appearance/${id}`, data);
  return response.data;
};

export const destroyAppearance = async (id) => {
  const response = await iLinkAPI.delete(`/dashboard/appearance/${id}`);
  return response.data;
};
