import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {storeDataInStore, setLoadingIndicator} from "../store/feed/actions"
import { selectFeedPosts,selectLoadingIndicator } from "../store/feed/selectors";
import PostCounter from "./PostCounter";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch()  

  const posts = useSelector(selectFeedPosts)
  const loading = useSelector(selectLoadingIndicator)

  async function fetchNext5Posts() {
    dispatch(setLoadingIndicator(true))
    const response = await axios.get(`${API_URL}/posts?offset=${posts.length}&limit=5`)
    const morePosts = response.data.rows
    dispatch(storeDataInStore(response.data.rows))
    
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
        <PostCounter/>
      {posts.map( quote => {
          return (
          <p>{quote.title}</p>
          )
      })}
   
        {loading ? "Loading" : <button onClick={fetchNext5Posts}>Load more </button>}
    </div>
  ); 
}