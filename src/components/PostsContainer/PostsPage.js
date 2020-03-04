 //Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"

const PostsPage = (props) => {

  const [dataValues, setdataValues] = useState(dummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
    {dataValues.map((dummyVal, index)=>{
      return(
        <Post key={index}
        post={dummyVal}/>
      )
    })}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

