import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onSelectedVideo})=>{
 

    return(        
            <div onClick={()=>{onSelectedVideo(video)}} className="video-item item">                   
                    <img 
                        className="ui image"
                        alt={video.snippet.title}
                        src={video.snippet.thumbnails.medium.url}/>
                    <div className = "content">
                        <h4 className="header">
                            {video.snippet.title}
                        </h4>
                        {/*<p className="description">{props.video.snippet.description}</p>*/}
                    </div>
               </div>         
    );
};

export default VideoItem;