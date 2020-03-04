// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {
  
  return (

    <div className="comment-text">
    
    {props.comDatas.map((item, index)=>{
      return(
        <div key={index}>
          <span  className="user">{item.username}</span>
          
          <span  className="comment">{item.text}</span>        
        </div>
      )
    })}
      
    </div>
  );
};


export default Comment;

