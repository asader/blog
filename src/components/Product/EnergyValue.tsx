import React from 'react'
import { Typography } from 'antd';

const { Paragraph } = Typography;

export const EnergyValue = ({energyValue: { proteins, carbohydrates, fats, energyValue }}) => {
  return (
  	<div>
		  <Paragraph strong type='secondary' style={{marginBottom: '0.5em'}}>ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ (НА 100 Г)</Paragraph>
		  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
			  <div style={{paddingRight: 10}}>
				  <p>Белки</p>
				  <span>{proteins} г</span>
			  </div>
			  <div style={{paddingRight: 10}}>
				  <p>Углеводы</p>
				  <span>{carbohydrates} г</span>
			  </div>
			  <div style={{paddingRight: 10}}>
				  <p>Жиры</p>
				  <span>{fats} г</span>
			  </div>
			  <div style={{paddingRight: 10}}>
				  <p>Энерг. ценность</p>
				  <span>{energyValue} кКал</span>
			  </div>
		  </div>
	  </div>

  )
};
