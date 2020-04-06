/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * {
  *   "type":"api",
  *   "country":"France"
  * }
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
    
    var request = require("request-promise");
    if (params.type === "api") {
    var options = {
        method: "GET",
        uri: "https://api.covid19api.com/summary",
        json: true
    }  
    
    var promise = request(options)
    .then(function (body) {
        
        for (var i = 0; i < body.Countries.length; i++) {
          if (
            body.Countries[i].Country.toLowerCase() ===
            params.country.toLowerCase()
          ) {
            return {
              result: `Il y a ce jour en ${params.country} ${body.Countries[i].TotalConfirmed} cas confirmés, ${body.Countries[i].TotalDeaths} morts et ${body.Countries[i].TotalRecovered} guéris selon les données de Johns Hopkins CSSE`
            };
          }
        }
      return { message: 'Error' };
    })
    .catch(function (err) {
    	console.log(err);
    });
    return promise;
    
    }
    else
	return { message: 'Hello World' + params.type };
}