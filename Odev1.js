// Kullanicidan isim alinan ve alinan ismin sayfaya yazdirildigi kisim 

let userName = prompt("Lütfen adınızı giriniz")

if (userName == "") {
    alert("Adınızı girmediniz (:")
    location.reload()    
}
  
let myName = document.querySelector("#myName")

myName.innerHTML = `${userName}` 

// Canli saatin eklendigi kisim

let myClock = document.querySelector("#myClock")


function time() {    

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]; 

    let d = new Date();

    let s = d.getSeconds();

    let m = d.getMinutes();

    let h = d.getHours();

    let dayName = days[d.getDay()]; 

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    myClock.textContent = `${h}:${m}:${s} ${dayName}`
    
}

setInterval(time, 1000);


