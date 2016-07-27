import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Xxx from './xxx.js';
class Header extends Component {

	render(){
		console.log(this.props.location)
		return(<div><Link to="xxx">Hoem</Link></div>)
	}
}
export default Header;