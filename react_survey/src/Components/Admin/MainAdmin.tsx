import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

interface MainAdminProps {
	adminLoginStatus: boolean,
	setAdminLoginStatus: Dispatch<SetStateAction<boolean>>
}
 
const MainAdmin: React.FC<MainAdminProps> = (props: MainAdminProps) => {

	const [surveysData, setSurveysData] = useState<any[]>([]);
	const [surveyDetails, setSurveyDetails] = useState<any>([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3001/survey/get_surveys');
			console.log(result.data, 'Result data');
			setSurveysData(result.data);
		};
		fetchData();
		console.log('Surveys Data ---------------');
	}, []);

	const logoutFunction = () => {
		localStorage.removeItem('admin_token');
		props.setAdminLoginStatus(false);
	};

	const getDetails = async (id: string) => {
		const result = await axios('http://localhost:3001/survey/survey/' + id);
		// console.log(result.data);
		setSurveyDetails(result.data);
	};

	let a: number = 1;

	if (!props.adminLoginStatus) {
		return <Redirect to="/admin/login" />
	}

	return (
		<Container>
		<h1>Admin Page</h1>
		<Button onClick={logoutFunction} >Logout</Button>
		<Row>

			<Col>
			<br />
			<br />
			<h4>Min 7, Max 35.</h4>

			<Table striped bordered hover variant="dark">
			  <thead>
			    <tr>
			      <th>#</th>
			      <th>Name</th>
			      <th>Country</th>
			      <th>Age</th>
			      <th>Total sum</th>
			      <th>Details</th>
			    </tr>
			  </thead>
			  <tbody>

			  {
			  	surveysData.map(survey => {
			  		let arrayQuestions: number[] = [survey.question_1, survey.question_2, survey.question_3, survey.question_4, survey.question_5, survey.question_6, survey.question_7];
			  		var sum: number = 0;
			  		for (var i = 0; i < arrayQuestions.length; i++) {
			  			sum += Number(arrayQuestions[i]);
			  		}
			  		return (
			  			<tr key={survey._id}>
					      <td>{a++}</td>
					      <td>{survey.name}</td>
					      <td>{survey.country}</td>
					      <td>{survey.age}</td>
					      <td>{sum}</td>
					      <td>
					      	<Button onClick={() => getDetails(survey._id)}>
					      		Details
					      	</Button>
					      </td>
					    </tr>
			  		);
			  	})
			  }
			 
			  </tbody>
			</Table>
			
			</Col>

			<Col>
				1 - Strongly disagree <br />
		    	2 - Disagree <br />
		    	3 - Neither agree nor disagree <br />
		    	4 - Agree <br />
		    	5 - Strongly agree <br />


				<Table striped bordered hover variant="dark">
				  <thead>
				    <tr>
				      <th>Key</th>
				      <th>Value</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Name</td>
				      <td>{ surveyDetails.name }</td>
				    </tr>
				    <tr>
				      <td>Country</td>
				      <td>{ surveyDetails.country }</td>
				    </tr>
				    <tr>
				      <td>Age</td>
				      <td>{ surveyDetails.age }</td>
				    </tr>
				    <tr>
				      <td>I am most afraid of coronavirus-19.</td>
				      <td>{ surveyDetails.question_1 }</td>
				    </tr>
				    <tr>
				      <td>2. It makes me uncomfortable to think about coronavirus-19.</td>
				      <td>{ surveyDetails.question_2 }</td>
				    </tr>
				    <tr>
				      <td>3. My hands become clammy when I think about coronavirus-19.</td>
				      <td>{ surveyDetails.question_3 }</td>
				    </tr>
				    <tr>
				      <td>4. I am afraid of losing my life because of coronavirus-19.</td>
				      <td>{ surveyDetails.question_4 }</td>
				    </tr>
				    <tr>
				      <td>5. When watching news and stories about coronavirus-19 on social media, I become nervous or anxious.</td>
				      <td>{ surveyDetails.question_5 }</td>
				    </tr>
				    <tr>
				      <td>6. I cannot sleep because I’m worrying about getting coronavirus-19.</td>
				      <td>{ surveyDetails.question_6 }</td>
				    </tr>
				    <tr>
				      <td>7. My heart races or palpitates when I think about getting coronavirus-19.</td>
				      <td>{ surveyDetails.question_7 }</td>
				    </tr>
				    <tr>
				      <td>Date</td>
				      <td>{ surveyDetails.date }</td>
				    </tr>

				  </tbody>
				</Table>


			</Col>

		</Row>
		</Container>
	);
};

export default MainAdmin;