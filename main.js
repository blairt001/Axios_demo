
function performGetRequest1(){
 	var resultElement = document.getElementById('getResult1');
 	resultElement.innerHTML = '';

 	axios.get('http://jsonplaceholder.typicode.com/todos')
 	     .then(function(response){
 	     	resultElement.innerHTML = generateSuccessHTMLOutput(response);
 	     })
 	     .catch(function(error){
 	     	resultElement.innerHTML = generateErrorHTMLOutput(error);
 	     });
 }
 function generateSuccessHTMLOutput(response){
 	return '<h4>Result:</h4>' + 
 	       '<h4>Status:</h4>' +
 	       '<pre>' + response.status + ' ' + response.statusText + '</pre>',
 	       '<h5>Headers:</h5>' + 
 	       '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>',
 	       '<h5>Data</h5>' + 
 	       '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'
			 }

			 function generateSuccessHTMLOutput(error){
				return '<h4>Result:</h4>' + 
					   '<h5>Message:</h5>' +
					   '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>',
					   '<h4>Status:</h4>' +
					   '<pre>' + error.message + ' ' + error.response.statusText + '</pre>',
					   '<h5>Headers:</h5>' + 
					   '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>',
					   '<h5>Data</h5>' + 
					   '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'
						}