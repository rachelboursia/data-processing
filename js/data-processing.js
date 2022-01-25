//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = '';//will store data for output
let myCart = '';//will store cart details
let myTotal = 0;//will store total cost
    
if(queryString != ""){//process data

  //separate querystring parameters
  const urlParams = new URLSearchParams(queryString);

  /*
    Print all data to id of output to page
  */


  urlParams.forEach(function(value, key) {
      //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
      //will replace underscore with spaces

  /* function titleCase(myData){
    let step1 = myData(' ');
    let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    ;

    console.log(step2);*/
  }


      if(key=="Cart"){//Process cart
         switch(value){
           case "Widget":
            myCart += "Widget: 3.99<br />"
            myTotal += 3.99;
          break;

          case "Sprocket":
            myCart += "Sprocket: 5.99<br />"
            myTotal += 5.99;
          break;

          case "Thingy":
            myCart += "Thingy: 1.99<br />"
            myTotal += 1.99;
          break;
         }
      }else{//Build Shipping Info
          key = key.split("_").join(" ");
          myData += `<p>${key}: ${value}<p>`;
      //console.log(value, key);
      }
 
  });

  myCart = `
    <p><b>Cart Contents</b></p>
    <p>${myCart}</p>
    <p>Total: $${myTotal}</p>
  `;
  myData = myCart + "<p><b>Shipping Information</b></p>" + myData;
  myData += `<p><a href="index.html">CLEAR</a></p>`
 
  document.getElementById("output").innerHTML = myData; 
    
}
    
