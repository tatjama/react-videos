import youtube from '../api/youtube.js';
import React from 'react';
import SearchBar from './SearchBar';

const KEY = 'AIzaSyBFCzah_fbLs9U0pd9oGeUY4eWr2J4t6CA';

class App extends React.Component{

    onSearchSubmit =async (term)=>{
console.log(term)
   const response =  await youtube.get('/search',{
            params:{
                q : term,
                key: KEY,        
                part: 'snippet',
                maxResults: 5,
                type: "video"
            }
        })
        console.log(response.data.items);
    } 

    render(){
        return(
            <div className = "ui container">
                <SearchBar onSearchSubmit = {this.onSearchSubmit}/>
                App
            </div>
        );
    }
};

export default App;