import React from 'react'
import "./BlogCard.scss";

const BlogCard = ({article,  className}) => {
  return (
    <div className={`blog-card ${className ? className : ""}`}>
       <div className="blog-card__cover">
        <img src={article.coverPhoto.url} alt={article.title}/>
      </div>
      <div className="blog-card__text">
        <div className="blog-card__title">
            <h2>{article.title}<span>[important]</span></h2>
        </div>
        <div className="blog-card__subtitle">
            <p>IBMPlexMono-RegularIBMPlexMono-RegularIBMPlexMono-RegularIBMPlexMono-Regular </p>
        </div>
      </div>
      </div>
  )
}

export default BlogCard