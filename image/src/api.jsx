import axios from 'axios';

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID Vo7gLfygyZj7-OAfTHJfjC7gL-Dm24SUo0DOokvUUdk',
      },
      params:{
        query:term,
      },
    })
    
    return response.data.results;
  };

  export default searchImages;