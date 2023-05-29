//checkbox hide/show password
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//checkbox hide/show password
function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//sign in
function mySignin() {
    var signin = document.getElementById("container");
    var login = document.getElementById("login-container");
    var footer = document.getElementById("footer");
    if (signin.style.display === "") {
        signin.style.display = "none";
        login.style.display = "block";
        footer.style.marginTop = "2rem";
    }
    else {
        signin.style.display = "none";
        login.style.display = "block";
        footer.style.marginTop = "2rem";
    }

}

//sign up
function myCreate() {
    var login = document.getElementById("login-container");
    var signin = document.getElementById("container");
    var footer = document.getElementById("footer");
    if (signin.style.display === "") {
        signin.style.display = "block";
        login.style.display = "none";
        footer.style.marginTop = "7rem";

    }
    else {
        signin.style.display = "block";
        login.style.display = "none";
        footer.style.marginTop = "7rem";
    }
}

//if signing in
function mylog() {
    document.getElementById("btn-in")
    localStorage.setItem("mylog", "login");
    window.location.href = "sign-up-in.html";
}

//if signing up
function myreg() {
    document.getElementById("btn-up")
    window.localStorage.clear();
    window.location.href = "sign-up-in.html";
}
//adding dstv
function mydstv() {
    window.location.href = "add-dstv.html";
}
//mtn discount
function mymtn() {
    window.location.href = "mtn-bill.html";
}
//view offers
function myoffer() {
    window.location.href = "latest-offers.html";
}
function myenter() {
    var boxCo = document.getElementById("box-container");
    var boxCo2 = document.getElementById("box-container-2");
    var checksport = document.getElementById("fa-check-circle-sport");
    var checkenter = document.getElementById("fa-check-circle-enter");
    if (boxCo.style.display === "none" && boxCo.style.display === "none") {
        boxCo.style.display = "block";
        boxCo2.style.display = "none";
        checkenter.style.color = "#FF1493";
        checksport.style.color = "transparent";
    }
    if (boxCo.style.display === "" && boxCo.style.display === "") {
        boxCo.style.display = "block";
        boxCo2.style.display = "none";
        checkenter.style.color = "#FF1493";
        checksport.style.color = "transparent";
    }

}

function mysport() {
    var boxCo = document.getElementById("box-container");
    var boxCo2 = document.getElementById("box-container-2");
    var checksport = document.getElementById("fa-check-circle-sport");
    var checkenter = document.getElementById("fa-check-circle-enter");
    if (boxCo2.style.display === "none" && boxCo2.style.display === "none") {
        boxCo.style.display = "none";
        boxCo2.style.display = "block";
        checkenter.style.color = "transparent";
        checksport.style.color = "#00BFFF";
    }
    if (boxCo2.style.display === "" && boxCo2.style.display === "") {
        boxCo.style.display = "none";
        boxCo2.style.display = "block";
        checkenter.style.color = "transparent";
        checksport.style.color = "#00BFFF";
    }

}

//first left box

function mouseOver() {
    var showmaxmobile = document.getElementById("showmax-mobile");
    var enjoyone = document.getElementById("enjoy-1");
    var infoone = document.getElementById("info-1");
    var bottomone = document.getElementById("bottom-1");
    var buttonone = document.getElementById("button-1");
    var x = window.matchMedia("(min-width: 906px)");
    if (x.matches) {
        //showmax-mobile
        showmaxmobile.style.borderTopColor = "lightpink";
        showmaxmobile.style.borderLeftColor = "lightpink";
        showmaxmobile.style.borderRightColor = "lightpink";
        showmaxmobile.style.borderBottomColor = "grey";

        showmaxmobile.style.borderTopWidth = "6px";
        showmaxmobile.style.borderLeftWidth = "6px";
        showmaxmobile.style.borderRightWidth = "6px";
        showmaxmobile.style.borderBottomWidth = "0.01px";

        //enjoy-1
        enjoyone.style.borderTopColor = "ffffff";
        enjoyone.style.borderLeftColor = "lightpink";
        enjoyone.style.borderRightColor = "lightpink";
        enjoyone.style.borderBottomColor = "grey";

        enjoyone.style.borderTopWidth = "0.01px";
        enjoyone.style.borderLeftWidth = "6px";
        enjoyone.style.borderRightWidth = "6px";
        enjoyone.style.borderBottomWidth = "0.01px";


        //info-1
        infoone.style.borderTopColor = "ffffff";
        infoone.style.borderLeftColor = "lightpink";
        infoone.style.borderRightColor = "lightpink";
        infoone.style.borderBottomColor = "grey";

        infoone.style.borderTopWidth = "0.01px";
        infoone.style.borderLeftWidth = "6px";
        infoone.style.borderRightWidth = "6px";
        infoone.style.borderBottomWidth = "0.01px";

        //bottom-1
        bottomone.style.borderTopColor = "ffffff";
        bottomone.style.borderLeftColor = "lightpink";
        bottomone.style.borderRightColor = "lightpink";
        bottomone.style.borderBottomColor = "grey";

        bottomone.style.borderTopWidth = "0.01px";
        bottomone.style.borderLeftWidth = "6px";
        bottomone.style.borderRightWidth = "6px";
        bottomone.style.borderBottomWidth = "0.01px";

        //button
        buttonone.style.borderStyle = "solid";
        buttonone.style.borderTop = "none";

        buttonone.style.borderLeftColor = "lightpink";
        buttonone.style.borderRightColor = "lightpink";
        buttonone.style.borderBottomColor = "lightpink";

        buttonone.style.borderLeftWidth = "6px";
        buttonone.style.borderRightWidth = "6px";
        buttonone.style.borderBottomWidth = "6px";
    }


}
function mouseOut() {
    var showmaxmobile = document.getElementById("showmax-mobile");
    var enjoyone = document.getElementById("enjoy-1");
    var infoone = document.getElementById("info-1");
    var bottomone = document.getElementById("bottom-1");
    var buttonone = document.getElementById("button-1");

    //showmax-mobile
    showmaxmobile.style.borderTopColor = "#ffffff";
    showmaxmobile.style.borderLeftColor = "#ffffff";
    showmaxmobile.style.borderRightColor = "#ffffff";

    showmaxmobile.style.borderTopWidth = "0.01px";
    showmaxmobile.style.borderLeftWidth = "0.01px";
    showmaxmobile.style.borderRightWidth = "0.01px";

    //enjoy-1
    enjoyone.style.borderLeftColor = "#ffffff";
    enjoyone.style.borderRightColor = "#ffffff";

    enjoyone.style.borderLeftWidth = "0.01px";
    enjoyone.style.borderRightWidth = "0.01px";

    //info-1
    infoone.style.borderLeftColor = "#ffffff";
    infoone.style.borderRightColor = "#ffffff";

    infoone.style.borderLeftWidth = "0.01px";
    infoone.style.borderRightWidth = "0.01px";

    //bottom-1
    bottomone.style.borderLeftColor = "#ffffff";
    bottomone.style.borderRightColor = "#ffffff";

    bottomone.style.borderLeftWidth = "0.01px";
    bottomone.style.borderRightWidth = "0.01px";

    //button

    buttonone.style.borderLeftColor = "#ffffff";
    buttonone.style.borderRightColor = "#ffffff";
    buttonone.style.borderBottomColor = "#ffffff";

    buttonone.style.borderLeftWidth = "0.01px";
    buttonone.style.borderRightWidth = "0.01px";
    buttonone.style.borderBottomWidth = "0.01px";

}

//first right box

function mouseOver2() {
    var showmax = document.getElementById("showmax");
    var enjoyoneside = document.getElementById("enjoy-1-side");
    var infooneside = document.getElementById("info-1-side");
    var bottomoneside = document.getElementById("bottom-1-side");
    var buttontwo = document.getElementById("button-2");
    var x = window.matchMedia("(min-width: 906px)");
    if (x.matches) {

        //showmax-mobile
        showmax.style.borderTopColor = "none";
        showmax.style.borderLeftColor = "lightpink";
        showmax.style.borderRightColor = "lightpink";
        showmax.style.borderBottomColor = "grey";

        showmax.style.borderTopWidth = "0px";
        showmax.style.borderLeftWidth = "6px";
        showmax.style.borderRightWidth = "6px";
        showmax.style.borderBottomWidth = "0.01px";

        //enjoy-1
        enjoyoneside.style.borderTopColor = "ffffff";
        enjoyoneside.style.borderLeftColor = "lightpink";
        enjoyoneside.style.borderRightColor = "lightpink";
        enjoyoneside.style.borderBottomColor = "grey";

        enjoyoneside.style.borderTopWidth = "0.01px";
        enjoyoneside.style.borderLeftWidth = "6px";
        enjoyoneside.style.borderRightWidth = "6px";
        enjoyoneside.style.borderBottomWidth = "0.01px";


        //info-1
        infooneside.style.borderTopColor = "ffffff";
        infooneside.style.borderLeftColor = "lightpink";
        infooneside.style.borderRightColor = "lightpink";
        infooneside.style.borderBottomColor = "grey";

        infooneside.style.borderTopWidth = "0.01px";
        infooneside.style.borderLeftWidth = "6px";
        infooneside.style.borderRightWidth = "6px";
        infooneside.style.borderBottomWidth = "0.01px";

        //bottom-1
        bottomoneside.style.borderTopColor = "ffffff";
        bottomoneside.style.borderLeftColor = "lightpink";
        bottomoneside.style.borderRightColor = "lightpink";
        bottomoneside.style.borderBottomColor = "grey";

        bottomoneside.style.borderTopWidth = "0.01px";
        bottomoneside.style.borderLeftWidth = "6px";
        bottomoneside.style.borderRightWidth = "6px";
        bottomoneside.style.borderBottomWidth = "0.01px";

        //button
        buttontwo.style.borderStyle = "solid";
        buttontwo.style.borderTop = "none";

        buttontwo.style.borderLeftColor = "lightpink";
        buttontwo.style.borderRightColor = "lightpink";
        buttontwo.style.borderBottomColor = "lightpink";

        buttontwo.style.borderLeftWidth = "6px";
        buttontwo.style.borderRightWidth = "6px";
        buttontwo.style.borderBottomWidth = "6px";
    }
}
function mouseOut2() {
    var showmax = document.getElementById("showmax");
    var enjoyoneside = document.getElementById("enjoy-1-side");
    var infooneside = document.getElementById("info-1-side");
    var bottomoneside = document.getElementById("bottom-1-side");
    var buttontwo = document.getElementById("button-2");

    //showmax-mobile

    showmax.style.borderLeftColor = "#ffffff";
    showmax.style.borderRightColor = "#ffffff";


    showmax.style.borderLeftWidth = "0.01px";
    showmax.style.borderRightWidth = "0.01px";

    //enjoy-1
    enjoyoneside.style.borderLeftColor = "#ffffff";
    enjoyoneside.style.borderRightColor = "#ffffff";

    enjoyoneside.style.borderLeftWidth = "0.01px";
    enjoyoneside.style.borderRightWidth = "0.01px";

    //info-1
    infooneside.style.borderLeftColor = "#ffffff";
    infooneside.style.borderRightColor = "#ffffff";

    infooneside.style.borderLeftWidth = "0.01px";
    infooneside.style.borderRightWidth = "0.01px";

    //bottom-1
    bottomoneside.style.borderLeftColor = "#ffffff";
    bottomoneside.style.borderRightColor = "#ffffff";

    bottomoneside.style.borderLeftWidth = "0.01px";
    bottomoneside.style.borderRightWidth = "0.01px";

    //button

    buttontwo.style.borderLeftColor = "#ffffff";
    buttontwo.style.borderRightColor = "#ffffff";
    buttontwo.style.borderBottomColor = "#ffffff";

    buttontwo.style.borderLeftWidth = "0.01px";
    buttontwo.style.borderRightWidth = "0.01px";
    buttontwo.style.borderBottomWidth = "0.01px";

}

//second left box

function mouseOver3() {
    var showmaxmobilepro = document.getElementById("showmax-mobile-pro");
    var enjoytwo = document.getElementById("enjoy-2");
    var infotwo = document.getElementById("info-2");
    var bottomtwo = document.getElementById("bottom-2");
    var buttononeone = document.getElementById("button-1-1");
    var x = window.matchMedia("(min-width: 906px)");
    if (x.matches) {
        //showmax-mobile
        showmaxmobilepro.style.borderTopColor = "lightblue";
        showmaxmobilepro.style.borderLeftColor = "lightblue";
        showmaxmobilepro.style.borderRightColor = "lightblue";
        showmaxmobilepro.style.borderBottomColor = "grey";

        showmaxmobilepro.style.borderTopWidth = "6px";
        showmaxmobilepro.style.borderLeftWidth = "6px";
        showmaxmobilepro.style.borderRightWidth = "6px";
        showmaxmobilepro.style.borderBottomWidth = "0.01px";

        //enjoy-1
        enjoytwo.style.borderTopColor = "ffffff";
        enjoytwo.style.borderLeftColor = "lightblue";
        enjoytwo.style.borderRightColor = "lightblue";
        enjoytwo.style.borderBottomColor = "grey";

        enjoytwo.style.borderTopWidth = "0.01px";
        enjoytwo.style.borderLeftWidth = "6px";
        enjoytwo.style.borderRightWidth = "6px";
        enjoytwo.style.borderBottomWidth = "0.01px";


        //info-1
        infotwo.style.borderTopColor = "ffffff";
        infotwo.style.borderLeftColor = "lightblue";
        infotwo.style.borderRightColor = "lightblue";
        infotwo.style.borderBottomColor = "grey";

        infotwo.style.borderTopWidth = "0.01px";
        infotwo.style.borderLeftWidth = "6px";
        infotwo.style.borderRightWidth = "6px";
        infotwo.style.borderBottomWidth = "0.01px";

        //bottom-1
        bottomtwo.style.borderTopColor = "ffffff";
        bottomtwo.style.borderLeftColor = "lightblue";
        bottomtwo.style.borderRightColor = "lightblue";
        bottomtwo.style.borderBottomColor = "grey";

        bottomtwo.style.borderTopWidth = "0.01px";
        bottomtwo.style.borderLeftWidth = "6px";
        bottomtwo.style.borderRightWidth = "6px";
        bottomtwo.style.borderBottomWidth = "0.01px";

        //button
        buttononeone.style.borderStyle = "solid";
        buttononeone.style.borderTop = "none";

        buttononeone.style.borderLeftColor = "lightblue";
        buttononeone.style.borderRightColor = "lightblue";
        buttononeone.style.borderBottomColor = "lightblue";

        buttononeone.style.borderLeftWidth = "6px";
        buttononeone.style.borderRightWidth = "6px";
        buttononeone.style.borderBottomWidth = "6px";
    }
}
function mouseOut3() {
    var showmaxmobilepro = document.getElementById("showmax-mobile-pro");
    var enjoytwo = document.getElementById("enjoy-2");
    var infotwo = document.getElementById("info-2");
    var bottomtwo = document.getElementById("bottom-2");
    var buttononeone = document.getElementById("button-1-1");

    //showmax-mobile
    showmaxmobilepro.style.borderTopColor = "#ffffff";
    showmaxmobilepro.style.borderLeftColor = "#ffffff";
    showmaxmobilepro.style.borderRightColor = "#ffffff";

    showmaxmobilepro.style.borderTopWidth = "0.01px";
    showmaxmobilepro.style.borderLeftWidth = "0.01px";
    showmaxmobilepro.style.borderRightWidth = "0.01px";

    //enjoy-1
    enjoytwo.style.borderLeftColor = "#ffffff";
    enjoytwo.style.borderRightColor = "#ffffff";

    enjoytwo.style.borderLeftWidth = "0.01px";
    enjoytwo.style.borderRightWidth = "0.01px";

    //info-1
    infotwo.style.borderLeftColor = "#ffffff";
    infotwo.style.borderRightColor = "#ffffff";

    infotwo.style.borderLeftWidth = "0.01px";
    infotwo.style.borderRightWidth = "0.01px";

    //bottom-1
    bottomtwo.style.borderLeftColor = "#ffffff";
    bottomtwo.style.borderRightColor = "#ffffff";

    bottomtwo.style.borderLeftWidth = "0.01px";
    bottomtwo.style.borderRightWidth = "0.01px";

    //button

    buttononeone.style.borderLeftColor = "#ffffff";
    buttononeone.style.borderRightColor = "#ffffff";
    buttononeone.style.borderBottomColor = "#ffffff";

    buttononeone.style.borderLeftWidth = "0.01px";
    buttononeone.style.borderRightWidth = "0.01px";
    buttononeone.style.borderBottomWidth = "0.01px";

}


//sec right box

function mouseOver4() {
    var showmaxpro = document.getElementById("showmax-pro");
    var enjoytwoside = document.getElementById("enjoy-2-side");
    var infotwoside = document.getElementById("info-2-side");
    var bottomtwoside = document.getElementById("bottom-2-side");
    var buttontwotwo = document.getElementById("button-2-2");
    var x = window.matchMedia("(min-width: 906px)");
    if (x.matches) {
        //showmax-mobile
        showmaxpro.style.borderTopColor = "none";
        showmaxpro.style.borderLeftColor = "lightblue";
        showmaxpro.style.borderRightColor = "lightblue";
        showmaxpro.style.borderBottomColor = "grey";

        showmaxpro.style.borderTopWidth = "0px";
        showmaxpro.style.borderLeftWidth = "6px";
        showmaxpro.style.borderRightWidth = "6px";
        showmaxpro.style.borderBottomWidth = "0.01px";

        //enjoy-1
        enjoytwoside.style.borderTopColor = "ffffff";
        enjoytwoside.style.borderLeftColor = "lightblue";
        enjoytwoside.style.borderRightColor = "lightblue";
        enjoytwoside.style.borderBottomColor = "grey";

        enjoytwoside.style.borderTopWidth = "0.01px";
        enjoytwoside.style.borderLeftWidth = "6px";
        enjoytwoside.style.borderRightWidth = "6px";
        enjoytwoside.style.borderBottomWidth = "0.01px";


        //info-1
        infotwoside.style.borderTopColor = "ffffff";
        infotwoside.style.borderLeftColor = "lightblue";
        infotwoside.style.borderRightColor = "lightblue";
        infotwoside.style.borderBottomColor = "grey";

        infotwoside.style.borderTopWidth = "0.01px";
        infotwoside.style.borderLeftWidth = "6px";
        infotwoside.style.borderRightWidth = "6px";
        infotwoside.style.borderBottomWidth = "0.01px";

        //bottom-1
        bottomtwoside.style.borderTopColor = "ffffff";
        bottomtwoside.style.borderLeftColor = "lightblue";
        bottomtwoside.style.borderRightColor = "lightblue";
        bottomtwoside.style.borderBottomColor = "grey";

        bottomtwoside.style.borderTopWidth = "0.01px";
        bottomtwoside.style.borderLeftWidth = "6px";
        bottomtwoside.style.borderRightWidth = "6px";
        bottomtwoside.style.borderBottomWidth = "0.01px";

        //button
        buttontwotwo.style.borderStyle = "solid";
        buttontwotwo.style.borderTop = "none";

        buttontwotwo.style.borderLeftColor = "lightblue";
        buttontwotwo.style.borderRightColor = "lightblue";
        buttontwotwo.style.borderBottomColor = "lightblue";

        buttontwotwo.style.borderLeftWidth = "6px";
        buttontwotwo.style.borderRightWidth = "6px";
        buttontwotwo.style.borderBottomWidth = "6px";
    }
}
function mouseOut4() {
    var showmaxpro = document.getElementById("showmax-pro");
    var enjoytwoside = document.getElementById("enjoy-2-side");
    var infotwoside = document.getElementById("info-2-side");
    var bottomtwoside = document.getElementById("bottom-2-side");
    var buttontwotwo = document.getElementById("button-2-2");

    //showmax-mobile

    showmaxpro.style.borderLeftColor = "#ffffff";
    showmaxpro.style.borderRightColor = "#ffffff";


    showmaxpro.style.borderLeftWidth = "0.01px";
    showmaxpro.style.borderRightWidth = "0.01px";

    //enjoy-1
    enjoytwoside.style.borderLeftColor = "#ffffff";
    enjoytwoside.style.borderRightColor = "#ffffff";

    enjoytwoside.style.borderLeftWidth = "0.01px";
    enjoytwoside.style.borderRightWidth = "0.01px";

    //info-1
    infotwoside.style.borderLeftColor = "#ffffff";
    infotwoside.style.borderRightColor = "#ffffff";

    infotwoside.style.borderLeftWidth = "0.01px";
    infotwoside.style.borderRightWidth = "0.01px";

    //bottom-1
    bottomtwoside.style.borderLeftColor = "#ffffff";
    bottomtwoside.style.borderRightColor = "#ffffff";

    bottomtwoside.style.borderLeftWidth = "0.01px";
    bottomtwoside.style.borderRightWidth = "0.01px";

    //button

    buttontwotwo.style.borderLeftColor = "#ffffff";
    buttontwotwo.style.borderRightColor = "#ffffff";
    buttontwotwo.style.borderBottomColor = "#ffffff";

    buttontwotwo.style.borderLeftWidth = "0.01px";
    buttontwotwo.style.borderRightWidth = "0.01px";
    buttontwotwo.style.borderBottomWidth = "0.01px";

}

$(function () {
    $('#btn-mtn-view').click(function () {
        $('html,body').animate(
            {
                scrollTop: $("#main-sec").offset().top
            },
            'slow'
        )
    })
})
