import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  promise = jsonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: promise,
  };
};
