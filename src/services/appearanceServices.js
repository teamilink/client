import iLinkAPI from "../config/api";

export const createAppearance = async (data) => {
  console.log("createAppearance -service triggered");
  const response = await iLinkAPI.post("/dashboard/appearance", data);
  console.log("**** createAppearance - response.data ***** ");
  console.log(response.data);

  return response.data;
};
