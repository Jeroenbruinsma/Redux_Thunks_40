import React, { useEffect } from "react";
import { fetchPostById } from "../store/postDetails/actions";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("EFFECT", fetchPostById, "POST ID:", id);
    // dispatch a thunk -> it will make the request
    dispatch(fetchPostById(id));
  });
  return <div>DETAILS!</div>;
}
