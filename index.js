window.onload = function () {
    ems = document.getElementsByTagName("em")
    work1 = document.getElementById("work1")
    work2 = document.getElementById("work2")
    work1.onmouseover = function () {
        move(ems[0],'top',0,1)
        move(ems[1],'bottom',0,1)
    }
    work1.onmouseout = function () {
        move(ems[0],'top',-20,1)
        move(ems[1],'bottom',-20,1)
    }
    work2.onmouseover = function () {
        move(ems[2],'top',0,1)
        move(ems[3],'bottom',0,1)
    }
    work2.onmouseout = function () {
        move(ems[2],'top',-20,1)
        move(ems[3],'bottom',-20,1)
    }
}
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
        return obj.currentStyle[name];
    }
}        
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if (newValue === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style[attr] = newValue + "px";
    }, 10)
}
