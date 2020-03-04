// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";

const LikeSection = props => {

  const LikeHandlerFn = () =>{
    props.setLike(props.like + 1)
  }
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <button onClick={LikeHandlerFn}><i className="far fa-heart fa-2x" /></button>
      </div>
      <div className="like-section-wrapper">
        <button><i className="far fa-comment fa-2x" /></button>
      </div>
    </div>
    <p className="like-number">
      
      {props.like} likes</p>
</div>
  )
};

export default LikeSection;
