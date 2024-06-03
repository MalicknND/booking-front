import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest("/post/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  // console.log(request);
  const query = request.url.split("?")[1];
  const postPromise = await apiRequest("/post/all?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = await apiRequest("/user/profilePosts");
  return defer({
    postResponse: postPromise,
  });
};
