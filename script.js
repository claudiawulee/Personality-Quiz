//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var quirky = 0;
var outgoing = 0;
var kind = 0;
var ambitious = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");

var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", quirky_fun);
//q1a1.onclick = handleClick;
q1a2.addEventListener("click", outgoing_fun);
q1a3.addEventListener("click", kind_fun);
q1a4.addEventListener("click", ambitious_fun);

q2a1.addEventListener("click", kind_fun);
q2a2.addEventListener("click", ambitious_fun);
q2a3.addEventListener("click", outgoing_fun);
q2a4.addEventListener("click", quirky_fun);

q3a1.addEventListener("click", ambitious_fun);
q3a2.addEventListener("click", kind_fun);
q3a3.addEventListener("click", quirky_fun);
q3a4.addEventListener("click", outgoing_fun);

restart.addEventListener("click", restart_fun);

//#TODO: Define quiz functions here
function quirky_fun() {
  quirky += 1;
  questionCount += 1;
  //alert("quirky!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function outgoing_fun() {
  outgoing += 1;
  questionCount += 1;
  //alert("outgoing!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function kind_fun() {
  kind += 1;
  questionCount += 1;
  //alert("kind!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function ambitious_fun() {
  ambitious += 1;
  questionCount += 1;
  //alert("ambitious!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function updateResult() {
  if (quirky >= 2) {
    result.innerHTML = "You are quirky!<br>";
    var img = document.createElement("img");
    img.src =
      "https://66.media.tumblr.com/2fcfe29fca70e742cf0d8bcd64dcfa1a/tumblr_p4mqzjlG2p1x6zeevo1_400.gifv";
    var src = document.getElementById("result");
    src.appendChild(img);
  } else if (outgoing >= 2) {
    result.innerHTML = "You are outgoing!<br>";
    var img = document.createElement("img");
    img.src =
      "https://66.media.tumblr.com/94639953ce066f112549e3737e5be8bb/tumblr_oywjptv9yz1wzjh0ro2_250.gifv";
    var src = document.getElementById("result");
    src.appendChild(img);
  } else if (kind >= 2) {
    result.innerHTML = "You are kind!<br>";
    var img = document.createElement("img");
    img.src =
      "https://66.media.tumblr.com/9d060583367ac594e6019950ba5cb45e/tumblr_nv1vorEHxH1udcrtto1_400.gifv";
    var src = document.getElementById("result");
    src.appendChild(img);
  } else if (ambitious >= 2) {
    result.innerHTML = "You are ambitious!<br>";
    var img = document.createElement("img");
    img.src =
      "https://66.media.tumblr.com/271249d74fbc10fe2c42861cad5b1042/tumblr_o4l6w5vxWI1sgw7hlo1_400.gifv";
    var src = document.getElementById("result");
    src.appendChild(img);
  } else {
    var arr = [];
    if (quirky == 1) {
      arr.push(" quirky");
    }
    if (outgoing == 1) {
      arr.push(" outgoing");
    }
    if (kind == 1) {
      arr.push(" kind");
    }
    if (ambitious == 1) {
      arr.push(" ambitious");
    }
    result.innerHTML =
      "You are a mix of" + arr[0] + "," + arr[1] + ", and" + arr[2] + ".<br>";
    var img = document.createElement("img");
    img.src =
      "https://cdn.lowgif.com/full/d32c2560daf644bb-pastel-blue-aesthetics-tumblr.gif";
    var src = document.getElementById("result");
    src.appendChild(img);
  }
}
function restart_fun() {
  location.reload();
}
