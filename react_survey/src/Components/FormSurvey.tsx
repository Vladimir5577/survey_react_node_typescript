import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const FormSurvey: React.FC = () => {

	const [name, setName] = useState('');
	const [country, setCountry] = useState('');
	const [age, setAge] = useState('');
	const [question_1, setQuestion_1] = useState('');
	const [question_2, setQuestion_2] = useState('');
	const [question_3, setQuestion_3] = useState('');
	const [question_4, setQuestion_4] = useState('');
	const [question_5, setQuestion_5] = useState('');
	const [question_6, setQuestion_6] = useState('');
	const [question_7, setQuestion_7] = useState('');

	const [errorName, setErrorName] = useState('');
	const [errorCountry, setErrorCountry] = useState('');
	const [errorAge, setErrorAge] = useState('');
	const [errorQuestion_1, setErrorQuestion_1] = useState('');
	const [errorQuestion_2, setErrorQuestion_2] = useState('');
	const [errorQuestion_3, setErrorQuestion_3] = useState('');
	const [errorQuestion_4, setErrorQuestion_4] = useState('');
	const [errorQuestion_5, setErrorQuestion_5] = useState('');
	const [errorQuestion_6, setErrorQuestion_6] = useState('');
	const [errorQuestion_7, setErrorQuestion_7] = useState('');

	const [surveyCondacted, setSurveyCondacted] = useState(false);

	const handleSubmit = () => {

		let isValid = true;

		if (!name) {
			setErrorName('Name is required');
			isValid = false;
		} else {
			setErrorName('');
		}

		if (!country) {
			setErrorCountry('Country is required');
			isValid = false;
		} else {
			setErrorCountry('');
		}

		if (!age) {
			setErrorAge('Age is required');
			isValid = false;
		} else {
			setErrorAge('');
		}

		if (!question_1) {
			setErrorQuestion_1('Question 1 is required !');
			isValid = false;
		} else {
			setErrorQuestion_1('');
		}

		if (!question_2) {
			setErrorQuestion_2('Question 2 is required !');
			isValid = false;
		} else {
			setErrorQuestion_2('');
		}

		if (!question_3) {
			setErrorQuestion_3('Question 3 is required !');
			isValid = false;
		} else {
			setErrorQuestion_3('');
		}

		if (!question_4) {
			setErrorQuestion_4('Question 4 is required !');
			isValid = false;
		} else {
			setErrorQuestion_4('');
		}

		if (!question_5) {
			setErrorQuestion_5('Question 5 is required !');
			isValid = false;
		} else {
			setErrorQuestion_5('');
		}

		if (!question_6) {
			setErrorQuestion_6('Question 6 is required !');
			isValid = false;
		} else {
			setErrorQuestion_6('');
		}

		if (!question_7) {
			setErrorQuestion_7('Question 7 is required !');
			isValid = false;
		} else {
			setErrorQuestion_7('');
		}

		if (isValid) {
			
			axios.post('http://localhost:3001/survey/add_survey', {
				name,
				country,
				age,
				question_1,
				question_2,
				question_3,
				question_4,
				question_5,
				question_6,
				question_7
			}).then(response => {
				console.log(response.data.surveyCondacted);
				setSurveyCondacted(response.data.surveyCondacted);
			});
		}


	};

	if (surveyCondacted) {
		return (
			<Redirect to="/thank_you" />
		);
	}

	return (

	<Container>
		<br />
		<h1>Form Survey</h1>
		<br />

		<Form.Group controlId="formBasicEmail">
			<Form.Label>Name</Form.Label>
			<Form.Control 
				type="text" 
				placeholder="Name"
				onChange={ e => setName(e.target.value) }
			 />
		</Form.Group>
		{ <h4 style={{ color: 'red' }}>{ errorName }</h4> }

		<Form.Group controlId="formBasicEmail">
			<Form.Label>Country</Form.Label>
			<Form.Control 
				type="text" 
				placeholder="Country"
				onChange={ e => setCountry(e.target.value) }
			 />
		</Form.Group>
		{ <h4 style={{ color: 'red' }}>{ errorCountry }</h4> }

		<Form.Group controlId="formBasicEmail">
			<Form.Label>Age</Form.Label>
			<Form.Control 
				type="number" 
				placeholder="Age"
				onChange={ e => setAge(e.target.value) }
			 />
		</Form.Group>
		{ <h4 style={{ color: 'red' }}>{ errorAge }</h4> }


		<br />
		<br />

      
		 {/* 1 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>1. I am most afraid of coronavirus-19.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_1"
		          id="q1_1"
		          value="1"
		          onChange={ e => setQuestion_1(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_1"
		          id="q1_2"
		          value="2"
		          onChange={ e => setQuestion_1(e.target.value) }
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_1"
		          id="q1_3"
		          value="3"
		          onChange={ e => setQuestion_1(e.target.value) }
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_1"
		          id="q1_4"
		          value="4"
		          onChange={ e => setQuestion_1(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_1"
		          id="q1_5"
		          value="5"
		          onChange={ e => setQuestion_1(e.target.value) }
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_1 }</h4> }

		  {/* 2 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>2. It makes me uncomfortable to think about coronavirus-19.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_2"
		          id="q2_1"
		          value="1"
		          onChange={ e => setQuestion_2(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_2"
		          id="q2_2"
		          value="2"
		          onChange={ e => setQuestion_2(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_2"
		          id="q2_3"
		          value="3"
		          onChange={ e => setQuestion_2(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_2"
		          id="q2_4"
		          value="4"
		          onChange={ e => setQuestion_2(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_2"
		          id="q2_5"
		          value="5"
		          onChange={ e => setQuestion_2(e.target.value) } 
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_2 }</h4> }

		  {/* 3 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>3. My hands become clammy when I think about coronavirus-19.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_3"
		          id="q3_1"
		          value="1"
		          onChange={ e => setQuestion_3(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_3"
		          id="q3_2"
		          value="2"
		          onChange={ e => setQuestion_3(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_3"
		          id="q3_3"
		          value="3"
		          onChange={ e => setQuestion_3(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_3"
		          id="q3_4"
		          value="4"
		          onChange={ e => setQuestion_3(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_3"
		          id="q3_5"
		          value="5"
		          onChange={ e => setQuestion_3(e.target.value) } 
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_3 }</h4> }

		  {/* 4 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>4. I am afraid of losing my life because of coronavirus-19.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_4"
		          id="q4_1"
		          value="1"
		          onChange={ e => setQuestion_4(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_4"
		          id="q4_2"
		          value="2"
		          onChange={ e => setQuestion_4(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_4"
		          id="q4_3"
		          value="3"
		          onChange={ e => setQuestion_4(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_4"
		          id="q4_4"
		          value="4"
		          onChange={ e => setQuestion_4(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_4"
		          id="q4_5"
		          value="5"
		          onChange={ e => setQuestion_4(e.target.value) } 
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_4 }</h4> }

		  {/* 5 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>5. When watching news and stories about coronavirus-19 on social media, I become nervous or anxious.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_5"
		          id="q5_1"
		          value="1"
		          onChange={ e => setQuestion_5(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_5"
		          id="q5_2"
		          value="2"
		          onChange={ e => setQuestion_5(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_5"
		          id="q5_3"
		          value="3"
		          onChange={ e => setQuestion_5(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_5"
		          id="q5_4"
		          value="4"
		          onChange={ e => setQuestion_5(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_5"
		          id="q5_5"
		          value="5"
		          onChange={ e => setQuestion_5(e.target.value) } 
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_5 }</h4> }

		  {/* 6 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>6. I cannot sleep because I’m worrying about getting coronavirus-19.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_6"
		          id="q6_1"
		          value="1"
		          onChange={ e => setQuestion_6(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_6"
		          id="q6_2"
		          value="2"
		          onChange={ e => setQuestion_6(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_6"
		          id="q6_3"
		          value="3"
		          onChange={ e => setQuestion_6(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_6"
		          id="q6_4"
		          value="4"
		          onChange={ e => setQuestion_6(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_6"
		          id="q6_5"
		          value="5"
		          onChange={ e => setQuestion_6(e.target.value) } 
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_6 }</h4> }

		  {/* 7 Radio form ********************************************* */}
		  <fieldset>
		    <Form.Group >
		      <Form.Label>
		        <h5>7. My heart races or palpitates when I think about getting coronavirus-19.</h5>
		      </Form.Label>
		        <Form.Check
		          type="radio"
		          label="Strongly disagree"
		          name="question_7"
		          id="q7_1"
		          value="1"
		          onChange={ e => setQuestion_7(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Disagree"
		          name="question_7"
		          id="q7_2"
		          value="2"
		          onChange={ e => setQuestion_7(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Neither agree nor disagree"
		          name="question_7"
		          id="q7_3"
		          value="3"
		          onChange={ e => setQuestion_7(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Agree"
		          name="question_7"
		          id="q7_4"
		          value="4"
		          onChange={ e => setQuestion_7(e.target.value) } 
		        />
		        <Form.Check
		          type="radio"
		          label="Strongly agree"
		          name="question_7"
		          id="q7_5"
		          value="5"
		          onChange={ e => setQuestion_7(e.target.value) } 
		        />
		    </Form.Group>
		  </fieldset>

		  { <h4 style={{ color: 'red' }}>{ errorQuestion_7 }</h4> }

		  {
		  	false 

		  	&& 

		  	<Alert variant="danger">
		        <Alert.Heading>You not answered on every questions !</Alert.Heading>
		        <p>
		          Please answer every questions and then submit.
		        </p>
		      </Alert>

		  }
		  

		<Button variant="primary" type="submit" onClick={ handleSubmit } >
			Submit
		</Button>

		<br />
		<br />
		<br />
		<br />


	</Container>

	);
};

export default FormSurvey;