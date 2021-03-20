const spaceXapi = "https://api.spacexdata.com/v4";
const urlCrew = spaceXapi + "/crew";
const urlUpcomingLaunches = spaceXapi + "/launches/upcoming";
const urlRocker = spaceXapi + "/rockets";
const urlPastLaunches = spaceXapi + "/launches/past";


//fetch data from api
function getPromiseFromUrl(url) {
    return fetch(url).then(response => response.json());
}

//countdown function
function countDown(time, element) {
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = time - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        element.innerHTML = days + "d: " + hours + "h: "
            + minutes + "m: " + seconds + "s";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            element.innerHTML = "Uknown";
        }
    }, 1000)
}

//Load one rocket
function loadOneRocket(url, element) {
    getPromiseFromUrl(url).then(data => {
        element.innerHTML = data.name;
    });
}

//Crew
function loadAllCrews(url) {
    getPromiseFromUrl(url).then(data => {
    });
}
function loadOneCrew(id) {
    getPromiseFromUrl(url + "/" + id).then(data => {
        
    });
}



//Upcoming launches
function loadUpcomingLaunches(url) {
    getPromiseFromUrl(url).then(data => {
        for (let i = 0; i < 3; i++) {
            var parentElemnt = document.getElementById("upcoming" + (i + 1));
            parentElemnt.children[0].innerHTML = data[i].name;
            loadOneRocket((urlRocker+ "/" + data[i].rocket), parentElemnt.children[1])
            var countDownDate = new Date(data[i].date_local).getTime();
            countDown(countDownDate, parentElemnt.children[2].children[0])
        }

    });
}

function loadRecentLaunches(url) {
    getPromiseFromUrl(url).then(data => {
        for (let i = 0; i < 3; i++) {
            var dataSize = data.length - (i+1);
            var parentElemnt = document.getElementById("past" + (i + 1));
            parentElemnt.children[0].innerHTML = data[dataSize].name;
            loadOneRocket((urlRocker+ "/" + data[dataSize].rocket), parentElemnt.children[1])

            if (data[dataSize].success) {
                parentElemnt.children[2].children[0].innerHTML = "Successful".fontcolor("green");
            } else {
                parentElemnt.children[2].children[0].innerHTML= "Failed".fontcolor("red");
            }
        }

    });
}

loadUpcomingLaunches(urlUpcomingLaunches);
loadRecentLaunches(urlPastLaunches);
