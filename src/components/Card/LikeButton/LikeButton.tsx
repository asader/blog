import React, { useState } from 'react'
import { TheLikeButton } from './style';

export const LikeButton = ({ isLiked }: { isLiked: boolean }) => {
  const [liked, setLiked] = useState(isLiked);
  return <TheLikeButton onClick={(e) => {
    e.preventDefault();
    setLiked(!liked);
  }
  } shape="circle" size='large' icon="heart" isliked={liked}/>
};
