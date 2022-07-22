import iLinkAPI from "../config/api";

export const createAppearance = async (data) => {
  console.log("createAppearance -service triggered");
  // console.log("data - profile, bio, url, file...", data);
  const response = await iLinkAPI.post("/dashboard/appearance", data);
  console.log("**** createAppearance - response.data ***** ");
  console.log(response.data);

  return response.data;
};

export const imageUploader = async (data, id) => {
  const response = await iLinkAPI.put(`/dashboard/appearance/${id}`, data);
  console.log("**** imageUploader - response.data ***** ");
  console.log(response);

  // return response.data;
};
