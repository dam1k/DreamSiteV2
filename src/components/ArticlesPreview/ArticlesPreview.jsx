import React from 'react'
import BlogCard from "../BlogCard/BlogCard";
import "./ArticlesPreview.scss";

const ArticlesPreview = ({posts}) => {
  return (
    <>
    <div className="articles-preview">
        <div className="articles-preview__container articles-preview__container--first">
            <h2 className="article-preview__text overflow">
                <span>Blog</span>
                <span>03</span>
            </h2>
            <div className="line line--blog"></div>
        </div>
        <div className="articles-preview__container articles-preview__container--second">
        <BlogCard className="blog-card-left" article={posts[0]}/>
               <div className="articles-preview__grid">
               {posts?.slice(1,3).map((post) => {
                    return <BlogCard article={post} key={post.id}/>
               })}
        </div>
    </div>
    </div>
    </>
  )
}

export default ArticlesPreview