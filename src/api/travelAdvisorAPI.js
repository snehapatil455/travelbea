import axios from 'axios';



  



export  const getPlacesData = async (type, sw,ne) => {
  try {
    const {data : { data }} = await axios.get(     `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        
       
      },
      headers: {
        'X-RapidAPI-Key': '0a00b815c8msh8f8ec3be97927b0p1494d3jsnb623ef036787',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    }
      );


    return data;

  }catch (error) {
   console.log(error)
  }
};

export const  getWeatherData = async (lat,lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
      params: {
       
        lat: lng,
        lon: lat,
        
      },
      headers: {
        'X-RapidAPI-Key': '0a00b815c8msh8f8ec3be97927b0p1494d3jsnb623ef036787',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      },
    });

    return data;
    
  
} catch (error) {
  console.log(error);
}
};
