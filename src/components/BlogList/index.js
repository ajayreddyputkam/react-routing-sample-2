// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="list-container">
      {blogsList.map(eachObject => (
        <BlogItem eachObject={eachObject} key={eachObject.id} />
      ))}
    </ul>
  )
}

export default BlogList
