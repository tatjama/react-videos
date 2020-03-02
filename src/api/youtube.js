import axios from 'axios';

const KEY = 'AIzaSyBFCzah_fbLs9U0pd9oGeUY4eWr2J4t6CA';
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        key: KEY,        
                part: 'snippet',
                maxResults: 5,
                type: "video"
    }   
});

