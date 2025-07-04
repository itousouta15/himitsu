function BirthDay() {
    setTimeout(BirthDay, 1000); // Repeat every second
    var birthDate = new Date("07/12/2008 00:00:00"); // Set birthday here
    var today = new Date();
    var timeold = today.getTime() - birthDate.getTime(); // Milliseconds since birth
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold); // Days
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold); // Hours
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor(e_minsold); // Minutes
    var seconds = Math.floor((e_minsold - minsold) * 60); // Seconds
    document.getElementById('span_dt_dt').innerHTML =
        '<span style="color:#ff69b4;">' + daysold + '</span> 天 '
        + '<span style="color:#ffb6c1;">' + hrsold + '</span> 小時 '
        + '<span style="color:#ffb6c1;">' + minsold + '</span> 分 '
        + '<span style="color:#ffb6c1;">' + seconds + '</span> 秒';
}
BirthDay();
