import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest("/post/" + params.id);
  return res.data;
};

// export const listPageLoader = async ({ request }) => {
//   console.log(request);
//   const query = request.url.split("?")[1];
//   const res = await apiRequest("/post/all?" + query);
//   return res.data;
// };
// //
