import React from 'react';

import ReactDOM from 'react-dom';




var ERow = React.createClass({

    render: function() {
        var name ;
        if (this.props.person.position =="设计师"){
            name= <li><span style={{color: 'red'}}>{this.props.person.name}</span>{'--'}
            <span>{this.props.person.position}</span></li>;
        }else{
            name=<li><span>{this.props.person.name}</span>{'--'} <span> {this.props.person.position}</span></li>;
        }
        // console.log(name);
        return (
            <ul>

                 {name}

            </ul>
        );
    }

});



var EList = React.createClass({
    render: function() {
        var rows = [];
        this.props.persons.forEach(function(person){
            //|| (person.position=='设计师' && this.props.isDesign)
            console.log(this.props.filterText);
            if (person.name.indexOf(this.props.filterText) === -1 || (person.position!='设计师' && this.props.isDesign)) {
                return ;
            }
            rows.push(<ERow person={person} key={person.name}  ></ERow>);
        }.bind(this));
        return (
           <ul>
             {rows}
            </ul>
        );
    }

});



var SearchBar = React.createClass({
    handleChange:function(){
        this.props.onUserInput(
            this.refs.filterInput.value,
            this.refs.isDesignInput.checked
            );

    },
    render: function() {
        return (
        <div className="search">
            <form  >
                <input type="text" placeholder='搜索...'
                     ref="filterInput"
                      value={this.props.filterText}
                    onChange={this.handleChange}
                 />
                <p>
                    <input type="checkbox"
                         ref="isDesignInput"
                          value={this.props.isDesign}
                    onChange={this.handleChange}
                    /> {' '}<span style={{color: 'red'}}>只显示设计师</span>
                </p>
            </form>
        </div>
        );
    }

});




var EPersons = React.createClass({
    getInitialState: function(){
        return {
            filterText:'',
            isDesign: false
        };
    },
    handleUserInput:function(filterText,isDesign){
        this.setState({
            filterText:filterText,
            isDesign: isDesign
        });
    },
    render: function() {
        return (
           <div className='box'>
           <SearchBar onUserInput={this.handleUserInput}></SearchBar>
             <EList persons={this.props.data}
               filterText={this.state.filterText}
                isDesign={this.state.isDesign}
               ></EList>
           </div>
        );
    }

});







module.exports = EPersons;