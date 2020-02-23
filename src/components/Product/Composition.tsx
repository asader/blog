import React from 'react'
import { Typography } from 'antd';

const { Paragraph } = Typography;

export const Composition = ({composition}) => {
  return (
  	<div>
		  <Paragraph strong type='secondary' style={{marginBottom: '0.5em'}}>СОСТАВ</Paragraph>
		  <Paragraph>{composition}</Paragraph>
	  </div>

  )
};
