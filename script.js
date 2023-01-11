function travelCounter () {
    let travel = document.querySelectorAll("img")
    let target = document.getElementById("travel-counter")
    target.innerText = (travel.length-4)
}
travelCounter ()

function hotBadge () {
    let summer = document.querySelectorAll(".container.welcome-summer.shadow-lg.p-3.mb-5.rounded div h5")
    let summerTemp;
    for (let i = 0; i<summer.length; i++)
    {
        summerTemp = summer[i].innerText 
        summer[i].innerHTML = summerTemp + `<span class="badge badge-warning" style="margin-left: 5px"> Hot<i class="bi bi-fire"></i></span>`

    }
}

function deleteCards() {
    let lastMinute = document.getElementById("last-minute")
    lastMinute.innerHTML = "";
}