import React from 'react'
import articleContent from "./article-content";

//components
import Articles from '../components/Articles';

const ArticleList = () => {
  return (
    <div>
    <h1 className='sm:text-5xl text-3xl font-serif font-extrabold my-0'>Articles </h1>
    <div className='container py-4 mx-auto'>
      <div className='flex flex-wrap -m-4'>
        <Articles  articles={articleContent} />
      </div>
    </div>

    </div>
  )
}

export default ArticleList