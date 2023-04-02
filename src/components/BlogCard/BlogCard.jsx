import React from 'react'
import "./BlogCard.scss";

const BlogCard = ({article}) => {
  return (
    <div className="blog__card__container">
       <div className="blog__card__cover">
        {/* <img src={article.coverPhoto.url}/> */}
      </div>
      {article.title}
      </div>
  )
}

export default BlogCard