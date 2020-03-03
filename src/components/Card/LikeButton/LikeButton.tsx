import React, { useState } from 'react'
import { TheLikeButton } from './style';

export const LikeButton = ({ isliked }) => {
  const [liked, setLiked] = useState(isliked);
  return <TheLikeButton onClick={(e) => {
    e.preventDefault();
    setLiked(!liked);
  }
  } shape="circle" size='large' icon="heart" isliked={liked}/>
};
