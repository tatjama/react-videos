import React from 'react';

const VideoDisplay =({video})=>{    
    if(!video){
        return(<div>Loading...</div>)
    }
    
        return(
            <div >
                <div className="ui embed">
                <iframe 
                src={video.snippet.thumbnails.medium.url}
                title = "video player"/>
                </div>
                <div className="ui segment">
                    <h4 className="header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>

                </div>
            </div>
        )
    
}

export default VideoDisplay;