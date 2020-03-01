import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) =>{

   console.log(props.videos);
  const listVideo = props.videos.map((video)=>{
       return(           
               <div className="item">
                   <VideoItem/>
                    <img style = {{width: "180px"}} 
                        className="ui image"
                        alt={video.snippet.title}
                        src={video.snippet.thumbnails.medium.url}/>
                    <div className = "content">
                        <h4 className="header">{video.snippet.title}</h4>
                        <p className="description">{video.snippet.description}</p>
                    </div>
               </div>        
       )
   })    
        
        return(
            <div className="ui list">
                {listVideo}
            </div>
        )
    
}

export default VideoList;