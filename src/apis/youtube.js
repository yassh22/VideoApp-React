import axios from 'axios';

const KEY = 'AIzaSyCXjgxKMSqPYRVzEBTL0DkeUz7f4T3tNNs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

