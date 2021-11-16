let languageList1 = [
  {
    num: "1",
    lang: "PHP",
    des: "A web server programming language",
    btn: ["PHP"],
    bgcolor: "#FFC0C7",
  },
  {
    num: "2",
    lang: "jQuery",
    des: "A JS library for developing web pages",
    btn: ["jQuery"],
    bgcolor: "#FFF4A3",
  },
  {
    num: "3",
    lang: "Java",
    des: "A programming language",
    btn: ["Java"],
    bgcolor: "#E7E9EB",
  },
  {
    num: "4",
    lang: "C++",
    des: "A web server programming language",
    btn: ["C++"],
    bgcolor: "#D9EEE1",
  },
  // {
  //   num: "5",
  //   lang: "W3.CSS",
  //   des: "A CSS framework for faster and better responsive web pages",
  //   btn: ["W3.CSS"],
  //   bgcolor: "#96D4D4",
  // },
  // {
  //   num: "5",
  //   lang: "Bootstrap",
  //   des: "A CSS framework for designing better web pages",
  //   btn: ["BS3", "BS4", "BS5"],
  //   bgcolor: "#D9EEE1",
  // },
];
languageList1.map(
  (fun = (e) => {
    document.getElementById("language-cards").innerHTML +=
      '<div class="sub-container"><div class="card-container" style="background-color:' +
      e.bgcolor +
      '"><div class="flex">            <p class="lang-head-text black">' +
      e.lang +
      '</p><p class="lang-caption">' +
      e.des +
      "</p>" +
      button(e.btn) +
      "</div></div></div>";
  })
);

function button(k) {
  let btns = "";
  k.map(
    (fun = (e) => {
      btns += '<div class="button-2 btn-4">Learn ' + e + "</div>";
    })
  );
  return btns;
}

let card = [
  {
    lang: "C#",
    bgcolor: "#FFC0C7",
  },
  {
    lang: "R",
    bgcolor: "#FFF4A3",
  },
  {
    lang: "Kotlin",
    bgcolor: "#F3ECEA",
  },
  {
    lang: "MySQL",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "NodeJS",
    bgcolor: "#96D4D4",
  },
  {
    lang: "React",
    bgcolor: "#FFC0C7",
  },
  {
    lang: "JSON",
    bgcolor: "#FFF4A3",
  },
  {
    lang: "AngularJS",
    bgcolor: "#F3ECEA",
  },
  {
    lang: "W3JS",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "XML",
    bgcolor: "#96D4D4",
  },
  {
    lang: "Sass",
    bgcolor: "#FFC0C7",
  },
  {
    lang: "Icons",
    bgcolor: "#FFF4A3",
  },
  {
    lang: "RWD",
    bgcolor: "#F3ECEA",
  },
  {
    lang: "Graphics",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "SVG",
    bgcolor: "#96D4D4",
  },
  {
    lang: "Canvas",
    bgcolor: "#FFC0C7",
  },
  {
    lang: "Rasbaerry Pi",
    bgcolor: "#FFF4A3",
  },
  {
    lang: "Cyber",
    bgcolor: "#F3ECEA",
  },
  {
    lang: "Colors",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "GIT",
    bgcolor: "#96D4D4",
  },
  {
    lang: "Matplotlib",
    bgcolor: "#E7E9EB",
  },
  {
    lang: "NumPy",
    bgcolor: "#FFF4A3",
  },
  {
    lang: "Pandas",
    bgcolor: "#F3ECEA",
  },
  {
    lang: "SciPy",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "ASP",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "Accessibility",
    bgcolor: "#E7E9EB",
  },
  {
    lang: "AppML",
    bgcolor: "#FFF4A3",
  },
  {
    lang: "Go",
    bgcolor: "#F3ECEA",
  },
];

let card2 = [
  {
    lang: "Excel",
    color: "white",
    bgcolor: "rgb(4, 170, 109)",
  },
  {
    lang: "Google Sheets",
    color: "Black",
    bgcolor: "#F3ECEA",
  },
  {
    lang: "Machine Learning",
    color: "Black",
    bgcolor: "#FFC0C7",
  },
  {
    lang: "Artificial Intelligence",
    color: "Black",
    bgcolor: "#D9EEE1",
  },
  {
    lang: "Statistics",
    color: "Black",
    bgcolor: "#96D4D4",
  },
  {
    lang: "Datascience",
    color: "Black",
    bgcolor: "#FFF4A3",
  },
];

card.map(
  (fun = (e) => {
    document.getElementById("bg-card").innerHTML +=
      ' <div class="sub-card"><div class="card-card" style="background:' +
      e.bgcolor +
      '"><div class="flex"><h2 class="lang-card-head black">' +
      e.lang +
      "</h2></div></div></div>";
  })
);
card2.map(
  (fun = (e) => {
    document.getElementById("bg-card").innerHTML +=
      ' <div class="sub-card2"><div class="card-card2" style="background:' +
      e.bgcolor +
      '"><div class="flex"><h2 class="lang-card-head" style="color:' +
      e.color +
      '">' +
      e.lang +
      "</h2></div></div></div>";
  })
);

function Frontend() {
  document.getElementById("img-frontend").style.display = "block";
  document.getElementById("img-backend").style.display = "none";
  document.getElementById("frontend-toggle").style.backgroundColor = "#e7e9eb";
  document.getElementById("backend-toggle").style.backgroundColor = "#00000000";
}

function Backend() {
  document.getElementById("img-backend").style.display = "block";
  document.getElementById("img-frontend").style.display = "none";
  document.getElementById("backend-toggle").style.backgroundColor = "#e7e9eb";
  document.getElementById("frontend-toggle").style.backgroundColor =
    "#00000000";
}

let image_number = 1;
document.getElementById("ss-dot" + image_number).style.backgroundColor =
  "#717171";

function left_arrow() {
  document.getElementById("ss-dot" + image_number).style.backgroundColor =
    "#bbb";
  if (image_number == 1) {
    image_number = 3;
  } else {
    image_number -= 1;
  }
  slideshow();
}

function right_arrow() {
  document.getElementById("ss-dot" + image_number).style.backgroundColor =
    "#bbb";
  if (image_number == 3) {
    image_number = 1;
  } else {
    image_number += 1;
  }
  slideshow();
}

function ss_dot(dot_number) {
  document.getElementById("ss-dot" + image_number).style.backgroundColor =
    "#bbb";

  image_number = dot_number;
  slideshow();
}

function slideshow() {
  if (image_number == 1) {
    document.getElementById("caption").innerText = "Caption One";
  } else if (image_number == 2) {
    document.getElementById("caption").innerText = "Caption Two";
  } else if (image_number == 3) {
    document.getElementById("caption").innerText = "Caption Three";
  }
  document.getElementById("image-num").innerText = image_number + " / 3";
  document.getElementById("ss-img").style.backgroundImage =
    'url("images/slideshow' + image_number + '.jpg")';
  document.getElementById("ss-dot" + image_number).style.backgroundColor =
    "#717171";
}

let text_area_bgcolor = "white";
let redcolor = "red";
let brown = "brown";
let blue = "blue";
let text_color = "black";

function change_theme() {
  if (text_area_bgcolor == "white") {
    text_area_bgcolor = "rgb(40,44,52)";
    red = "#c5a5c5";
    brown = "#ff9999";
    blue = "#88ccbb";
    text_color = "white";
  } else if ("rgb(40,44,52)") {
    text_area_bgcolor = "white";
    red = "red";
    brown = "brown";
    blue = "blue";
    text_color = "black";
  }
  let textarea = document.getElementsByClassName("textarea");
  let textred = document.getElementsByClassName("red");
  let textblue = document.getElementsByClassName("blue");
  let textbrown = document.getElementsByClassName("brown");

  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = text_area_bgcolor;
    textarea[i].style.color = text_color;
  }
  for (let i = 0; i < textred.length; i++) {
    textred[i].style.color = red;
  }
  for (let i = 0; i < textblue.length; i++) {
    textblue[i].style.color = blue;
  }
  for (let i = 0; i < textbrown.length; i++) {
    textbrown[i].style.color = brown;
  }
}

let menu=[
  { button:"tutorial",
    name:"Tutorials",
    columns:[
      {heading:"HTML and CSS",values:["Learn HTML","Learn CSS","Learn RWD","Learn Bootstrap","Learn W3.CSS","Learn Colors","Learn Icons","Learn Graphics","Learn SVG","Learn Canvas","Learn How To","Learn Sass"]},
      {heading:"JavaScript",values:["Learn JavaScript","Learn jQuery","Learn React","Learn AngularJS","Learn JSON","Learn AJAX","Learn AppML","Learn W3.JS"]},
      {heading:"Data Analytics",values:["Learn AI","Learn Machine Learning","Learn Data Science","Learn NumPy","Learn Pandas","Learn SciPy","Learn Matplotlib","Learn Statistics","Learn Excel","Learn Google Sheets"]},
      {heading:"XML Tutorials",values:["Learn XML","Learn XML AJAX","Learn XML DOM","Learn XML DTD","Learn XML Schema","Learn XSLT","Learn XPath","Learn XQuery"]},
      {heading:"Programming",values:["Learn Python","Learn Java","Learn C++","Learn C#","Learn R","Learn Kotlin","Learn Go"]},
      {heading:"Server Side",values:["Learn SQL","Learn MySQL","Learn PHP","Learn ASP","Learn Node.js","Learn Raspberry Pi","Learn Git"]},
      {heading:"Web Building",values:["Create aWebsite","Web Template","Web Statistics","Web Certificate","Web Development","Code Editor","Test Your Typing Speed","Play a Code Game","Cyber Security","Accessibility"]}]
  },{button:"references",
    name:"References",
    columns:[
      {heading:"HTML",values:["HTML Tag Reference","HTML Browser Support","HTML Event Reference","HTML Color Reference","HTML Canvas Reference","HTML SVG Reference","Google Maps Reference"]},
      {heading:"CSS",values:["CSS Reference","CSS Browser Support","CSS Selector Reference","Bootstrap 3 Reference","Bootstrap 4 Reference","W3.CSS Reference","Icon Reference","Sass Reference"]},
      {heading:"JavaScript",values:["JavaScript Reference","HTML DOM Reference","jQuery Reference","AngularJS Reference","AppML Reference","W3.JS Reference"]},
      {heading:"Programming",values:["Python Reference","Java Reference"]},
      {heading:"Server Side",values:["SQL Reference","MySQL Reference","PHP Reference","ASP Reference"]},
      {heading:"XML",values:["XML DOM Reference","XML Http Reference","XSLT Reference","XML Schema Reference"]},
      {heading:"Character Sets",values:["HTML Character Sets","HTML ASCII","HTML ANSI","HTML Windows-1252","HTML ISO-8859-1","HTML Symbols","HTML UTF-8"]}]
  },{button:"exercises",
    name:"Exercises and Quizzes",
    columns:[{heading:"Exercises",values:["HTML Exercises","CSS Exercises","CSS Exercises","SQL Exercises","MySQL Exercises","PHP Exercises","Python Exercises","NumPy Exercises","Pandas Exercises","SciPy Exercises","jQuery Exercises","Java Exercises","C++ Exercises","C# Exercises","R Exercises","Kotlin Exercises","Go Exercises","Bootstrap Exercises","Bootstrap 4 Exercises","Bootstrap 5 Exercises","Git Exercises"]},{heading:"Quizes",values:["HTML Quiz","CSS Quiz","Javascript Quiz","SQL Quiz","MySQL Quiz","PHP Quiz","Pyhon Quiz","NumPy Quiz","Pandas Quiz","SciPy Quiz","jQuiery Quiz","Java Quiz","C++ Quiz","C# Quiz","R Quiz","XML Quiz","Cyber Security Quiz","Bootstrap Quiz","Bootstrap 4 Quiz","Bootstrap 5 Quiz","Accessibility Quiz"]},
    {heading:"HTML Course",values:["HTML Course","CSS Course","Javascript Course","Frontend Course","SQL Course","PHP Course","Python Course","Numpy Course","Pandas Course","Data Analytics Course","jQuery Course","Java Course","C++ Course","C# Course","R Course","XML Course","Cyber Security Course", "Accessibility Course"]},{
      heading:"Certificates",values:["HTML Certificate","CSS Certificate","JavaScript Certificate","Front End Certificate","SQL Certificate","PHP Certificate","Python Certificate","Data Science Certificate","Bootstrap 3 Certificate","Bootstrap 4 Certificate","jQuery Certificate","Java Certificate","C++ Certificate","React Certificate","XML Certificate"]
    }]
  }
];
menu.map(fun = (e)=>{
  e.columns.map(
    column_heading =(k)=>{
      document.getElementById("dropdown-menu-"+e.button).innerHTML+='<div class="menu-column" id="mob-col-'+k.heading+e.button+'"><h2 class="menu-heading2" id="heading2-'+k.heading+'">'+k.heading+'</h2></div>';
      k.values.map(
        menu_items = (m) =>{
          document.getElementById("mob-col-"+k.heading+e.button).innerHTML+='<h3 class="menu-text">'+m+'</h3>';
        }
      )
    }
  )}
);
let mob_tutorial_state="none";
let mob_references_state="none";
let mob_exercises_state="none";
let mob_menu_state ="none";

function mob_tutorial(){
  if(mob_tutorial_state=="none"){
    mob_tutorial_state="grid";
  }
  else{
    mob_tutorial_state="none"
  }
  document.getElementById("dropdown-menu-tutorial").style.display=mob_tutorial_state;
}
function mob_references(){
  if(mob_references_state=="none"){
    mob_references_state="grid";
  }
  else{
    mob_references_state="none"
  }
  document.getElementById("dropdown-menu-references").style.display=mob_references_state;
}

function mob_exercises(){
  if(mob_exercises_state=="none"){
    mob_exercises_state="grid";
  }
  else{
    mob_exercises_state="none"
  }
  document.getElementById("dropdown-menu-exercises").style.display=mob_exercises_state;
}
function mob_menu(){
  if(mob_menu_state=="none"){
    mob_menu_state="grid";
  }else{
    mob_menu_state="none";
  }
  document.getElementById("mob-menu").style.display=mob_menu_state;
}


function  menu_heading(e){
  document.getElementById("menu").innerHTML+='<h1 class="menu-heading1" id="heading-'+e.name+'">'+e.name+'</h1>';
  e.columns.map(
    column_heading =(k)=>{
      document.getElementById("menu").innerHTML+='<div class="menu-column" id="col-'+k.heading+'"><h2 class="menu-heading2" id="heading2-'+k.heading+'">'+k.heading+'</h2></div>';
      k.values.map(
        menu_items = (m) =>{
          document.getElementById("col-"+k.heading).innerHTML+='<h3 class="menu-text">'+m+'</h3>';
        }
      )
    }
  )
}

let menustate="none";
let menubuttonstate=-1;
document.getElementById("menu-bar").style.display=menustate;
function display_menu(num){

  if(num==-1){
    document.getElementById("menu-btn-"+menubuttonstate).style.backgroundColor="white";
    document.getElementById("menu-btn-"+menubuttonstate).style.color="#282a35";
    document.getElementById("up-icon-"+menubuttonstate).style.display="none";
      document.getElementById("down-icon-"+menubuttonstate).style.display="inline";
    menubuttonstate=-1;
  menustate="none";
  document.getElementById("menu-bar").style.display=menustate;
  }else{
  if(menubuttonstate!=num){
    if(menubuttonstate!=-1){
      document.getElementById("menu-btn-"+menubuttonstate).style.backgroundColor="white";
      document.getElementById("menu-btn-"+menubuttonstate).style.color="#282a35";document.getElementById("up-icon-"+menubuttonstate).style.display="none";
      document.getElementById("down-icon-"+menubuttonstate).style.display="inline";
      

    }
    menubuttonstate=num;
    document.getElementById("up-icon-"+menubuttonstate).style.display="inline";
    document.getElementById("down-icon-"+menubuttonstate).style.display="none";
    document.getElementById("menu-btn-"+menubuttonstate).style.backgroundColor="#282a35";
    document.getElementById("menu-btn-"+menubuttonstate).style.color="white";
    document.getElementById("menu").innerHTML='<i class="fas fa-times cancel" onclick="display_menu(-1)"></i>';
    menustate="block";
    document.getElementById("menu-bar").style.display=menustate;
    menu_heading(menu[num]);
  }else{
    document.getElementById("up-icon-"+menubuttonstate).style.display="none";
      document.getElementById("down-icon-"+menubuttonstate).style.display="inline";
    document.getElementById("menu-btn-"+menubuttonstate).style.backgroundColor="white";
    document.getElementById("menu-btn-"+menubuttonstate).style.color="#282a35";
    menubuttonstate=-1;
    menustate="none";
    document.getElementById("menu-bar").style.display=menustate;
  }
}
}


let alert_box_state="none";
function show_alert(){
  if(alert_box_state=="none"){
    alert_box_state="flex";
  }else{
    alert_box_state="none";
  }
  document.getElementById("alert-overlay").style.display=alert_box_state;
}