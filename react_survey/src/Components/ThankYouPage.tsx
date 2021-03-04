import { Container, Alert } from 'react-bootstrap';

const ThankYouPage: React.FC = () => {
	return (

		<Container>
			<br />
			<br />
			<Alert variant="success">
			  <Alert.Heading>The survey condacted successfully</Alert.Heading>
			  <br />
			  <Alert.Heading>Thank You !</Alert.Heading>
			</Alert>
		</Container>
	);
};

export default ThankYouPage;