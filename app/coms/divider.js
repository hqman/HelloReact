// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

var R = React.DOM;
var DividerClass = React.createClass({
    displayName : 'Divider',
    render: function() {
         return R.div(
         {className:"divider"},
         R.h2(null,this.props.children),
         R.hr()
         );
     }

 });
module.exports = DividerClass;