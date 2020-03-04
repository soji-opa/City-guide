// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data"

//console.log(dummyData.comments)
const CommentSection = props => {

  //const dumComments = dummyData.comments
  const [commentVal, setCommentVal] = useState(dummyData)
  // Add state for the comments
  //console.log(commentVal.comments[0])
  return (
    <div>
    {commentVal.map((comData, index) =>{
      return(
        <Comment key={index}
        comDatas = {comData.comments}/>
      )
    })}
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
