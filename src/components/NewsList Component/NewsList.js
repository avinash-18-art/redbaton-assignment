import React from 'react'
import NewsItem from './NewsItem'

const NewsList = ({newsItems, markAsRead, deleteItem, user}) => {
  return (
    <div>
      {newsItems.map(item => (
        <NewsItem
          key={item.id}
          item={item}
          markAsRead={markAsRead}
          deleteItem={deleteItem}
          user={user}
        />
      ))}
    </div>
  )
}

export default NewsList
