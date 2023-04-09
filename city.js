var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters',
//   headers: { }
// };

async function logJSONData() {
    // const response = await fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters");
    // const jsonData = await response.json();
    // console.log(jsonData);


      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=restaurant&name=harbour&key=AIzaSyCECaEjaDYSWxL2jR15YwyblfEPtx_WFzw", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        console.log()
        .catch(error => console.log('error', error));
  }

  logJSONData()
  

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
module.exports=logJSONData