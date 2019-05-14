function clock() {
    const fullDate = new Date();

    let hour = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();
    
    let days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    
    let day = days[fullDate.getDay()];
    let date = fullDate.getDate();
    let month = months[fullDate.getMonth()];
    let year = fullDate.getFullYear();
    
    if(hour < 10) {
        hour = "0" + hour;
    } if(min < 10) {
        min = "0" + min;
    } if(sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById('day').innerHTML = day;
    
    document.getElementById('hour').innerHTML = hour + " :";
    document.getElementById('min').innerHTML = min + ".";
    document.getElementById('sec').innerHTML = sec
    
    document.getElementById('calender-day').innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
}
setInterval(clock, 1000);

