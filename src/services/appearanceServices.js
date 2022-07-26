import iLinkAPI from "../config/api";

export const saveAppearance = (data, id) => {
  console.log("saveAppearance - service triggered");
  console.log("saveAppearance - service - id? ", id);
  return id !== undefined ? updateAppearance(data, id) : createAppearance(data);
};

export const createAppearance = async (data) => {
  console.log("createAppearance -service triggered");
  const response = await iLinkAPI.post("/dashboard/appearance", data);
  console.log("**** createAppearance - response.data ***** ");
  console.log(response.data);

  return response.data;
};

export const updateAppearance = async (data, id) => {
  console.log("updateAppearance -service triggered");
  const response = await iLinkAPI.put(`/dashboard/appearance/${id}`, data);
  return response.data;
};
