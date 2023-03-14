import React, { useContext } from 'react';

import Header from '../component/Header';
import { DiscussionContext } from '../Providers/DiscussionContext/DIscussionContext';


export const DiscussionPage = () => {
  console.log('Discussion')
  const {post} = useContext(DiscussionContext)
  console.log(post)
  return (
    <>
    <Header background='rgba(0, 0, 0, 1)'/>
    <div>
      <div>
        {/* <img src={post} alt="" /> */}
      </div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
    
    </>

  );
};
