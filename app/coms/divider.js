// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

var R = React.DOM;
var DividerClass = React.createClass({
    displayName: 'Divider',
    //设置默认值
    getDefaultProps: function() {
        return {
            text: "xxx",
            title: "您好啊 ",
        }
    },
    //内部状态 初始值
    getInitialState: function() {
        return {
            title: 'this is my state'
        }
    },
    updateText: function(e) {
        this.setState({
            text: e.target.value
        });
    },
    propTypes: {
        //属性值类型
        text: React.PropTypes.string,
    },
    render: function() {
        // console.log(this.props.text);
        //  return R.div(
        //  {className:"divider"},
        //  R.h2(null,this.state.title),
        //  R.hr(),
        //  R.span(null, this.props.text ),
        //  R.input( ),
        //  );
        return ( < div className="hero">
            < h2 > {
                this.state.title
            } < /h2>
            <hr />
            <button className="btn">save</button>
            < /div>
        )
    }

});
module.exports = DividerClass;
