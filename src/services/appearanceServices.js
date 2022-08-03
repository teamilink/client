import iLinkAPI from "../config/api";

export const saveAppearance = (data, id) => {
  console.log("saveAppearance - service");
  return id !== undefined ? updateAppearance(data, id) : createAppearance(data);
};

export const createAppearance = async (data) => {
  console.log("createAppearance -service");
  const response = await iLinkAPI.post("/dashboard/appearance", data);
  return response.data;
};

export const updateAppearance = async (data, id) => {
  console.log("updateAppearance -service");
  const response = await iLinkAPI.put(`/dashboard/appearance/${id}`, data);
  return response.data;
};

export const destroyAppearance = async (id) => {
  console.log("deleteAppearance -service");
  const response = await iLinkAPI.delete(`/dashboard/appearance/${id}`);
  return response.data;
};
