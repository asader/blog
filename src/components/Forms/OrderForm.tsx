import { notification, Form, Icon, Input, Button } from 'antd';
import * as React from 'react';
import {Product} from '../utils/storage';
import {formatCurrency} from '../../utils';
import {WrappedFormUtils} from 'antd/lib/form/Form';
import {FormEvent, useEffect} from 'react';

interface Props {
	form: WrappedFormUtils;
	products: Product[];
	onOrder: () => void;
}

function hasErrors(fieldsError: Record<string, string[] | undefined>): boolean {
	return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

const OForm: React.FunctionComponent<Props> = ({ form, onOrder, products }) => {
	useEffect(() => {
		form.validateFields();
	}, []);

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		form.validateFields((err, values: Record<string, string>): Promise<Response> | void => {
			if (!err) {
				const origin = typeof window !== 'undefined' && window.location.origin;
				let total = 0;
				products.forEach(({ rootCategory, name, quantity, price, slug }) => {
					const url = `${origin}/${rootCategory.toLowerCase().replace(' ', '-')}/${slug}`;
					values[`| ${name} | ${formatCurrency(price)} | x${quantity} | ${formatCurrency(quantity * price)} | `] = url;
					total += quantity * price;
				});
				values.total = formatCurrency(total);
				const rawData = Object.entries(values).map(([key, value]) => `${key}=${value || ''}`).join('&');
				notification.success({message: 'We will call back as soon as possible'});
				form.resetFields();
				onOrder();
				return fetch('https://formsubmit.io/send/758e2071-a0f2-4df4-be74-6f97d630ffa2', {
					method: 'POST',
					mode: 'no-cors',
					headers: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					body: rawData,
				});
			}
		});
	};

	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
	// Only show error after a field is touched.
	const phoneError = isFieldTouched('phone') && getFieldError('phone');
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Item label="Phone" validateStatus={phoneError ? 'error' : ''} help={phoneError || ''}>
					{getFieldDecorator('phone', {
						rules: [{ required: true, message: 'Please input your phone' }],
					})((
						<Input
							prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Phone"
						/>
					))}
				</Form.Item>
				<Form.Item label="Name">
					{getFieldDecorator('name')((
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Name"
						/>
					))}
				</Form.Item>
				<Form.Item label="Address">
					{getFieldDecorator('address')((
						<Input
							prefix={<Icon type="map" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Address"
						/>
					))}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block size="large" disabled={hasErrors(getFieldsError())}>
						Order
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export const OrderForm = Form.create<Props>({ name: 'order' })(OForm);
