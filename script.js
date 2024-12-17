let currentElement = null;
let body = document.getElementById("body");
let body1 = document.getElementById("body1");
let body2 = document.getElementById("body2");
let body3 = document.getElementById("body3");
let body4 = document.getElementById("body4");
let cover = document.getElementById("box1");
let book1 = document.getElementById("pdf1");
let book2 = document.getElementById("pdf2");
let book3 = document.getElementById("pdf3");
let book4 = document.getElementById("pdf4");
let book5 = document.getElementById("pdf5");
let book6 = document.getElementById("pdf6");
let book7 = document.getElementById("pdf7");
let book8 = document.getElementById("pdf8");
let book9 = document.getElementById("pdf9");


function handleClick(element) {
    
    if (currentElement) {
      currentElement.classList.remove('highlight');
    }
    element.classList.add('highlight');
    currentElement = element;

    console.log(`${element.tagName} clicked!`);
  }

  function open(){
    window.open("https://gaana.com/podcast/stories/hindi/sunday-suspense-hindi-season1/the-adventure-of-the-copper-beeches-by-sir-arthur-conan-doyle", "","width=600,height=600");
  
  }

  function shift1(){
    body.style.display = "none";
    body1.style.display = "block";
    body2.style.display = "none";
    body3.style.display = "none";
    body4.style.display = "none";
  }
  
  function shift2(){
    body.style.display = "block";
    body1.style.display = "none";
    body2.style.display = "none";
    body3.style.display = "none";
    body4.style.display = "none";
  }
  function shift3(){
    body.style.display = "none";
    body1.style.display = "none";
    body2.style.display = "block";
    body3.style.display = "none";
    body4.style.display = "none";
  }
  function shift4(){
    body.style.display = "none";
    body1.style.display = "none";
    body2.style.display = "none";
    body3.style.display = "block";
    body4.style.display = "none";
  }
function shift5(){
  body.style.display = "none";
  body1.style.display = "none";
  body2.style.display = "none";
  body3.style.display = "none";
  body4.style.display = "block";
}
  function hello1(){
    cover.style.display = "none";
    book1.style.display = "block";
  }
  function hello2(){
    cover.style.display = "none";
    book2.style.display = "block";
  }
  function hello3(){
    cover.style.display = "none";
    book3.style.display = "block";
  }
  function hello4(){
    cover.style.display = "none";
    book4.style.display = "block";
  }
  function hello5(){
    cover.style.display = "none";
    book5.style.display = "block";
  }
  function hello6(){
    cover.style.display = "none";
    book6.style.display = "block";
  }
  function hello7(){
    cover.style.display = "none";
    book7.style.display = "block";
  }
  function hello8(){
    cover.style.display = "none";
    book8.style.display = "block";
  }
  function hello9(){
    cover.style.display = "none";
    book9.style.display = "block";
  }

// function lift(para1){
//     if (currentElement) {
//         currentElement.classList.remove('highlight');
//       }
//     let a = document.getElementById(para1);
//       a.style.scale = "1.2";
//       a.style.backgroundColor = "green";
//       remove();
// }  

// function remove(){
//             for(let i = 0 ; i < para2.length ; i++){
//                 if(para2[i] === null){
//                     para3 = para2[i-2] ;
//                 }
//             }   
//             let b  = document.getElementById(para3);
//             b.style.scale = "1";
//             b.style.backgroundColor = "blue";
            
// }