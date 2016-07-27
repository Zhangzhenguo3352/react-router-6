import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import IndexList from '../Component/IndexList';
import Xxx from '../Component/xxx';

class RouteApp extends Component {
	render(){
		return (<div>{this.props.children}</div>)
	}

}


const RouteConfig = () => 
	<Router history={browserHistory}>
		<Route path="/" component={RouteApp}>
			<IndexRoute component={IndexList}/>
			<Route path="xxx" component={Xxx}/>
		</Route>
	</Router>

export default RouteConfig;