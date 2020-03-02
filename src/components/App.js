import youtube from '../api/youtube.js';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList.js';
import VideoDisplay from './VideoDisplay.js';


class App extends React.Component{
    state={videos:[],
            selectedVideo: null};

    onSearchSubmit =async (term)=>{
   // console.log(term)
    const response =  await youtube.get('/search',{
            params:{q : term}
        })
       // console.log(response.data.items);
        this.setState({videos: response.data.items,
                        selectedVideo: response.data.items[0]})
       // console.log(this.state.videos)
    } 
    onSelectedVideo=(video)=>{
        this.setState({selectedVideo: video})
    }
    componentDidMount(){
        this.onSearchSubmit('buildings')
    }

    render(){
       //console.log(this.state.videos)
        return(            
            <div className = "ui container">
                <SearchBar onSearchSubmit = {this.onSearchSubmit}/>
               <div className = "ui grid">
                   <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDisplay video = {this.state.selectedVideo}/>
                         </div>
                        <div className = "five wide column">
                            <VideoList 
                            onSelectedVideo = {this.onSelectedVideo} 
                            videos = {this.state.videos} />
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
};

export default App;