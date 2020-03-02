import React from 'react';

const VideoDisplay =({video})=>{    
    if(!video){
        return(<div>Loading...</div>)
    }
    const srcVideo = `https://www.youtube.com/embed/${video.id.videoId}`
        return(
            <div >
                <div className="ui embed">
                    <iframe src={srcVideo} title="video player"></iframe>
              </div>
                <div className="ui segment">
                    <h4 className="header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>

                </div>
            </div>
        )
    
}

export default VideoDisplay;