//Articles
//https://www.spaceflightnewsapi.net/documentation#/

//5e9d0d95eda69973a809d1ec
//https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec
const spaceXapi = "https://api.spacexdata.com/v4"
function getPromiseFromUrl(url) {
    return fetch(url).then(response => response.json());
}


