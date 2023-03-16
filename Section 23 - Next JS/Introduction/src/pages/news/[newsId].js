import React from 'react'
import {useRouter} from 'next/router'

function newsId() {
    const {query} = useRouter();
    
  return (
    <div>{query.newsId}</div>
  )
}

export default newsId