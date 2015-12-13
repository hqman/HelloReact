'use strict'
require('./css/test.scss');


// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import DividerClass from './coms/divider.js'



// var R = React.DOM;
// var DividerClass = React.createClass({
//     displayName : 'Divider',
//     render: function() {
//          return R.div(
//          {className:"divider"},
//          R.h2(null,this.props.children),
//          R.hr()
//          );
//      }

//  });
var divider = React.createElement(DividerClass,null,'问题');

console.dir(divider);

ReactDOM.render(
  <DividerClass  >test问题</DividerClass>,
  document.getElementById('app')
);
