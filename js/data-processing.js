//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
//console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

let myData = '';
urlParams.forEach(function(value, key) {
    
    //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
    //will replace underscore with spaces
   key = key.split("_").join(" ");

    myData += `<p>${key}: ${value}<p>`;
   //console.log(value, key);
 });

myData += `<p><a href="index.html">CLEAR</a></p>`
 document.getElementById("output").innerHTML = myData; 