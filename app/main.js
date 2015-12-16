'use strict'
require('./css/test.scss');


// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import DividerClass from './coms/divider.js'
import EPersons from './coms/employee.js'


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

// console.dir(divider);
//
 var persons=
   [
    {"name":"kai", "position":"设计师" },
    {"name":"wang", "position":"开发" },
    {"name":"wkai2", "position":"设计师" },
    {"name":"jian", "position":"开发" },
    {"name":"okai", "position":"开发" },
    {"name":"jing", "position":"设计师" }
    ]  ;

// ReactDOM.render(
//   <DividerClass title="xxx"  >test问题</DividerClass>,
//   document.getElementById('app')
// );
var p1={"name":"kai", "position":"设计师" };
ReactDOM.render(
  <EPersons data={persons}></EPersons>,
  document.getElementById('app')
);

