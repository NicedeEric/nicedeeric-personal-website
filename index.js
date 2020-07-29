window.onload = function () {
    
    home = document.getElementById('home')
    SelfIntro = document.getElementById('SelfIntro')
    Education = document.getElementById('Education')
    MyWork = document.getElementById('MyWork')
    Experience = document.getElementById('Experience')
    Contact = document.getElementById('Contact')
    titles = document.getElementsByTagName('h3')
    for (var i = 0;i <titles.length-1;i++) {
        console.log(getStyle(titles[i],'top'))
    }
    nav = document.getElementById('nav')
    navItems = nav.getElementsByTagName('a')
    document.onscroll = function () {
        position = document.documentElement.scrollTop
        setColor ()
        if (position >=-10 && position < 500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==0) {
                    navItems[i].style.color = '#65bff4'
                    navlist[0].style.backgroundColor = '#65bff4'
                }
                else {
                    navItems[i].style.color = '#999'
                }
            }
        }
        else if  (position >=500 && position <1500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==1) {
                    navItems[i].style.color = '#65bff4'
                    navlist[1].style.backgroundColor = '#65bff4'
                }
                else {
                    navItems[i].style.color = '#999'
                }
            }
        }
        else if (position >= 1500 && position < 2500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==2) {
                    navItems[i].style.color = '#65bff4'
                    navlist[2].style.backgroundColor = '#65bff4'
                }
                else {
                    navItems[i].style.color = '#999'
                }
            }
        }
        else if  (position >=2500 && position < 3500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==3) {
                    navItems[i].style.color = '#65bff4'
                    navlist[3].style.backgroundColor = '#65bff4'
                }
                else  {
                    navItems[i].style.color = '#999'
                }
            }
        }
        else if  (position >= 3500 && position < 4500) {
            for (var i=0;i<navItems.length;i++) {
                if (i==4) {
                    navItems[i].style.color = '#65bff4';
                    navlist[4].style.backgroundColor = '#65bff4';
                }
                else  {
                    navItems[i].style.color = '#999'
                }
            }
        }
        else if (position >=4500 && position <5000) {
            for (var i=0;i<navItems.length;i++) {
                if (i==5) {
                    navItems[i].style.color = '#65bff4';
                    navlist[5].style.backgroundColor = '#65bff4'
                }
                else  {
                    navItems[i].style.color = '#999'
                }
            }
        }
    }
    function setColor() {
        for (var i = 0;i<navlist.length;i++) {
            navlist[i].style.backgroundColor = '#999'
        }
    }
    //nav 
    move(nav,'marginLeft',0,4)
    navlist = document.getElementsByClassName('underline')
    for (var i=0;i<navItems.length;i++) {
        navItems[i].num = i;
        navItems[i].onmouseover = function() {
            move(navlist[this.num],'top',0,1)
            navlist[this.num].style.backgroundColor = '#65bff4'
        }
        navItems[i].onmouseout = function() {
            move(navlist[this.num],'top',10,1)
            navlist[this.num].style.backgroundColor = '#999'
        }
        navItems[i].onclick = function() {
            this.style.color = '#65bff4'
            scrollSlowly(20,10,1000*this.num)
        }
    }
    //Home Page
    focusImg = document.getElementById('focusImg')
    focusTxt = document.getElementById('focusTxt')
    move(focusImg,'left',0,2)
    move(focusTxt,'left',0,2)

    //MyWork Page
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
        if (Math.abs(newValue-target)<=1) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style[attr] = newValue + "px";
    }, 15)
}
function scrollSlowly (speed,sec,target) {
    clearInterval(timer);
    var distance = window.pageYOffset
    speed = distance <= target ? speed : -speed;
    var timer = setInterval(function(){
        window.scrollBy(0,speed)
    },sec)

    window.onscroll = function() {
        var distance1 = window.pageYOffset;
        var y = distance1 - target;
        if (y>=-20 && y<=20) {
            clearInterval(timer);
        }
    }
}
