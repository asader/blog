import styled, { css } from 'styled-components';
import { Button } from 'antd';

const likeUrl = 'https://dostaevsky.ru/files/images/to-fav.svg';
const unlikeUrl = 'https://dostaevsky.ru/files/images/from-fav.svg';

export const TheLikeButton = styled(Button)`
	${props => props.isLiked ? css`
    background-color: red!important;
    color: white!important;
    border: red 1px solid!important;
    &:hover {
      border: red 1px solid!important;
      background-color: red!important;
    }
  ` : css`
    background-image: url(${likeUrl});
    &:hover {
      color: red!important;
      border-color: red!important;
    }
    &:focus {
      color: rgba(0, 0, 0, 0.65)!important;
      border-color: #d9d9d9!important;
    }
  `}
	position: absolute!important;
	top: -20px;
	right: 12px;
`;

export const Like = styled.div`
	pointer-events: all;
	
	
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
	width: 36px;
	z-index: 2;
	height: 36px;
	position: absolute;
	top: -18px;
	right: 12px;
	cursor: pointer;
`;
