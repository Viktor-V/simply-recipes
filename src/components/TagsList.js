import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const TagsList = ({ recipes }) => {
const newTags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>

      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag;

          return <Link key={index} to={`/tags/${slugify(text, {lower: true})}`}>{text} ({value})</Link>
        })}
      </div>
    </div>
  )
}

export default TagsList