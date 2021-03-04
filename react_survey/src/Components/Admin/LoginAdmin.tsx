import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

interface MainAdminProps {
	adminLoginStatus: boolean,
	setAdminLoginStatus: Dispatch<SetStateAction<boolean>>
}

const LoginAdmin: React.FC<MainAdminProps> = (props: MainAdminProps) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = () => {

		setErrorMessage('');

		let isValid = true;

		if (!email) {
			setErrorEmail('Email is required');
			isValid = false;
		} else {
			setErrorEmail('');
		}

		if (!password) {
			setErrorPassword('Passowrd is required');
			isValid = false;
		} else {
			setErrorPassword('');
		}

		if (isValid) {
			axios.post('http://localhost:3001/admin/admin_login', {
				adminEmail: email,
				adminPassword: password
			}).then(response => {
				console.log(response.data);
				if (response.data.errorMessage) {
					setErrorMessage(response.data.errorMessage);
				}
				if (response.data.token) {
					localStorage.setItem('admin_token', response.data.token);
					props.setAdminLoginStatus(response.data.auth);
				}
			});
		}

	};

	let admin_token = localStorage.getItem('admin_token');

	useEffect(() => {
		if (admin_token) {
			const checkLogin = () => {
				axios.get('http://localhost:3001/admin/verify_token', {
					headers: {
						'x-access-token': admin_token
					}
				}).then(response => {
					if (response.data.auth) {
						props.setAdminLoginStatus(response.data.auth);
					}
				});
			};
			checkLogin();
		}
	}, [admin_token, props]);

	if (props.adminLoginStatus) {
		return (
			<Redirect to="/admin" />
		);
	}

	return (
		<Container>
			<br />
			<br />

			<h2>Login Admin</h2>

			{
				errorMessage
				&&
				<Alert variant="danger">
					<h5>{ errorMessage }</h5>
				</Alert>
			}

		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control 
		    	type="text" 
		    	placeholder="Enter email" 
		    	onChange={ e => setEmail(e.target.value) }
		    />
		  </Form.Group>

		  { errorEmail && <p style={{ color: 'red' }}>{ errorEmail }</p> }

		  <Form.Group controlId="formBasicPassword">
		    <Form.Label>Password</Form.Label>
		    <Form.Control 
		    	type="text" 
		    	placeholder="Password" 
		    	onChange={ e => setPassword(e.target.value) }
		    />
		  </Form.Group>

		  { errorPassword && <p style={{ color: 'red' }}>{ errorPassword }</p> }

		  <Button variant="primary" type="submit" onClick={handleSubmit} >
		    Submit
		  </Button>

		</Container>
	);
};

export default LoginAdmin;