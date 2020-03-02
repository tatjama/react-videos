import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onSelectedVideo})=>{
    
   const onVideoClick =()=>{
        console.log(video.snippet.title);
       onSelectedVideo(video);
    }

    return(
        <div>
            <div onClick={onVideoClick} className="video-item item">                   
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
        </div>
    );
};

export default VideoItem;