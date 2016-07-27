import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import Route from './Config/Route';

const Init = () => 
	<div><Route/></div>

		




ReactDOM.render(<Init/>,document.getElementById('app'))