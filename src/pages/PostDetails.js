import React, { useEffect } from "react";
import { fetchPostById } from "../store/postDetails/actions";
import { selectPost } from "../store/postDetails/selectors";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function PostDetails() {
  const { id } = useParams();
  const post = useSelector(selectPost);
  console.log("DO WE HAVE OUR POST?", post);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("EFFECT", fetchPostById, "POST ID:", id);
    // dispatch a thunk -> it will make the request
    dispatch(fetchPostById(id));
  });
  return <div>DETAILS!</div>;
}
