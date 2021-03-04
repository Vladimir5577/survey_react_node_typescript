import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
// Survey
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import FormSurvey from './Components/FormSurvey';
import ThankYouPage from './Components/ThankYouPage';

// Admin
import LoginAdmin from './Components/Admin/LoginAdmin';
import MainAdmin from './Components/Admin/MainAdmin';

const App: React.FC = () => {

	const [adminLoginStatus, setAdminLoginStatus] = useState<boolean>(false);

  return (
  	<Router>
	    <div>
		  <NavBar />
	    	<Switch>
	    		<Route path="/" exact component={ Intro } />
		    	<Route path="/form_survey" component={ FormSurvey } />
		    	<Route path="/thank_you" component={ ThankYouPage } />
		    	<Route path="/admin" exact component={ () => <MainAdmin 
		    		adminLoginStatus={adminLoginStatus}
					setAdminLoginStatus={setAdminLoginStatus}
		    	 /> } />
		    	<Route path="/admin/login" component={ () => <LoginAdmin 
		    		adminLoginStatus={adminLoginStatus}
					setAdminLoginStatus={setAdminLoginStatus}
		    	/> } />
	    	</Switch>
	    </div>
    </Router>
  );
};

export default App;
