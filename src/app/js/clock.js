
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = addLeadingZeros(m);
    s = addLeadingZeros(s);
    document.getElementById('hours').innerHTML = h + ":" + m;
 //   document.getElementById('seconds').innerHTML = s
    var t = setTimeout(startTime, 1000);
  }

  function addLeadingZeros(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  function calculateFontSize(width, height, content){
    var area = width*height;
    var contentLength = content.length;

    return  Math.sqrt(area/contentLength)*0.95; //this provides the font-size in pixels.
}

    function adjustFontSize() {    
        var element = document.getElementById("hours");
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height;
        var width = positionInfo.width;
        element.style.fontSize = calculateFontSize(width, height, element.innerHTML) + "pt";
        var t = setTimeout(adjustFontSize, 100);
    }