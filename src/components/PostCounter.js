import React from 'react'
import { useSelector } from 'react-redux'
import { selectFeedPosts } from '../store/feed/selectors'

export default function PostCounter() {


    const quotes  = useSelector(selectFeedPosts)
    return (
        <h1>
            {`Count of quotes: ${quotes.length}`}
        </h1>
    )
}
