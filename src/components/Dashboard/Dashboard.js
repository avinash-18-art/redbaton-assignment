import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsList from './NewsList'

const Dashboard = () => {
  const [newsItems, setNewsItems] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchNewsItems()
    checkLoggedInUser()
  }, [])

  const fetchNewsItems = async () => {
    try {
      const response = await axios.get('/api/newsitems')
      setNewsItems(response.data)
    } catch (error) {
      console.error('Error fetching news items:', error)
    }
  }

  const checkLoggedInUser = async () => {
    try {
      const response = await axios.get('/api/user')
      setUser(response.data)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  const markAsRead = async itemId => {
    try {
      await axios.put(`/api/newsitems/${itemId}/read`)
      setNewsItems(newsItems.filter(item => item.id !== itemId))
    } catch (error) {
      console.error('Error marking news item as read:', error)
    }
  }

  const deleteItem = async itemId => {
    try {
      await axios.delete(`/api/newsitems/${itemId}`)
      setNewsItems(newsItems.filter(item => item.id !== itemId))
    } catch (error) {
      console.error('Error deleting news item:', error)
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <NewsList
        newsItems={newsItems}
        markAsRead={markAsRead}
        deleteItem={deleteItem}
        user={user}
      />
    </div>
  )
}

export default Dashboard
