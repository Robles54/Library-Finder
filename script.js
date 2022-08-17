// async function googleAPI(zipcode){
//     const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
//     const api = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=library+bookstores+"+zipcode+"&key=AIzaSyC1spK1ps2FOnI-V8zlMy8H0zftftVEmi0"; // Change this to your API's
//     const response = await fetch(proxy+api)
//     const data = await response.json()
//     // const user = data.results[0]
//     // console.log(user)
//     console.log(data)
//   return data
// }



let button = document.getElementById("submitBtn");
let input = document.getElementById("userInput");
let libraryContainer = document.getElementById("libraryContainer")

button.onclick = function (event) {
  event.preventDefault();
  libraryContainer.innerHTML = ""
  let inputValue = input.value;
  const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
  const api =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=library+bookstores+" +
    inputValue +
    "&key=AIzaSyC1spK1ps2FOnI-V8zlMy8H0zftftVEmi0"; // Change this to your API's
  fetch(proxy + api)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
      

      for (let i = 0; i < data.results.length; i++) {
        let newDiv = document.createElement("div");
        

        let newh1 = document.createElement("h1");
        newh1.innerHTML = data.results[i].name;
        newDiv.append(newh1);

        let newh2 = document.createElement("h2");
        newh2.innerHTML = data.results[i].formatted_address;
        newDiv.append(newh2);

        let newp = document.createElement("p");
        newp.innerHTML = data.results[i].rating;
        newDiv.append(newp);

        newDiv.className = "infoContain";
        libraryContainer.append(newDiv);
      }
    });
};



