const request = require('request');
const weatherstack=(adress,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=9109703bf6f7bf6bca1260ea3a1e246b&query='+adress
request({url:url,json:true},(error,response) =>{
     if (error) {
          callback("Unable to connect weather service",undefined);
     }else if(response.body.error){
          callback('Unable to find location',undefined);

     } else {
          callback(undefined,{temperature:response.body.current.temperature,
                         descriptions:response.body.current.weather_descriptions[0],
                         location:response.body.location.name}
                         );
     }

})
}
module.exports = weatherstack