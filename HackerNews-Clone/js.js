

async function fetchDataAsync(url) {
    const response = await fetch(url);
    var topStoriesArray = [];
    
    topStoriesArray.push(await response.json());
    console.log(topStoriesArray);
    // var mainContainer = document.getElementById("elements");
    // for(i=0; i<10; i++) {
    //   var div = document.createElement("div");
    //   div.innerHTML = 'Name: ' + topStoriesArray[i] + ' test ' + topStoriesArray[i];
    //   mainContainer.appendChild(div);
    // }
    function appendData(topStoriesArray) {
        console.log("tetstee");
        console.log(topStoriesArray);
        var mainContainer = document.getElementById("elements");
        for (var i = 0; i < topStoriesArray.length; i++) {
          var div = document.createElement("div");
          div.innerHTML = 'Name: ' + topStoriesArray[i].firstName + ' ' + topStoriesArray[i].lastName;
          mainContainer.appendChild(div);
        }
      }
    
}
fetchDataAsync('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');





 