import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Xxx extends Component {

	render(){
		console.log(this.props.location)
		return(<div><Link to="/">xxx</Link></div>)
	}
}
export default Xxx;