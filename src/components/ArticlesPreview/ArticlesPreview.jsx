import React from 'react'
import BlogCard from "../BlogCard/BlogCard";
import "./ArticlesPreview.scss";

const ArticlesPreview = ({posts}) => {
  return (
    <>
    <div className="articles-preview">
        <div className="articles-preview__container">
        <BlogCard article={posts[0]}/>
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