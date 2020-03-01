import React from 'react';

class SearchBar extends React.Component{
    state = {term:''}

    onInputChange = (event)=>{        
        this.setState({term: event.target.value})
        console.log(this.state.term)
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.term)
        this.props.onSearchSubmit(this.state.term);
    }

    render(){
        
        return(
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Search video</label>
                        <input value={this.state.term} onChange={this.onInputChange} type="text"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;