//Gets the crew information from the spaceX api
const url = spaceXapi + "/crew";

function loadAllCrews() {
    getPromiseFromUrl(url).then(data => {
        console.log(data)
    });
}

function loadOneCrew(id) {
    getPromiseFromUrl(url+"/"+id).then(data => {
        console.log(data)
    });
}
loadAllCrews();
loadOneCrew("5fe3ba5fb3467846b3242188");