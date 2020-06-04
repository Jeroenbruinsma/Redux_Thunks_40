import React from 'react'
import { useSelector } from 'react-redux'
import { selectFeedPosts } from '../store/feed/selectors'

export default function PostCounter() {


    const quotes  = useSelector(selectFeedPosts)
    //ask Redux to fetch the data for me! 
    return (
        <h1>
            {`Count of quotes: ${quotes.length}`}
        </h1>
    )
}
