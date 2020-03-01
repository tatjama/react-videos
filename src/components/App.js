import youtube from '../api/youtube.js';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList.js';

const KEY = 'AIzaSyBFCzah_fbLs9U0pd9oGeUY4eWr2J4t6CA';

class App extends React.Component{
    state={videos:[]};

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
        this.setState({videos: response.data.items})
        console.log(this.state.videos)
    } 

    render(){
       console.log(this.state.videos)
        return(
            <div className = "ui container">
                <SearchBar onSearchSubmit = {this.onSearchSubmit}/>
               <div className = "ui grid">
                   <div className="eleven wide column">
                        Video display
                   </div>
                   <div className = "five wide column">
                    <VideoList videos = {this.state.videos} />
                    </div>
                </div>
                App
            </div>
        );
    }
};

export default App;