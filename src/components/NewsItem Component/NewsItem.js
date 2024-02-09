import React from 'react'

const NewsItem = ({item, markAsRead, deleteItem, user}) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.url}</p>
      <p>Posted on: {item.postedOn}</p>
      <p>Upvotes: {item.upvotes}</p>
      <p>Comments: {item.comments}</p>
      {user && (
        <div>
          <button onClick={() => markAsRead(item.id)}>Mark as Read</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default NewsItem
