//Articles
//https://www.spaceflightnewsapi.net/documentation#/

//5e9d0d95eda69973a809d1ec

const url = "https://api.spacexdata.com/v4/launches/latest"

fetchTheApi(url);
function fetchTheApi(url) {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8' 
        }
    }

    fetch(url, options).then(respone => {
        console.log(respone.status);
    })
}