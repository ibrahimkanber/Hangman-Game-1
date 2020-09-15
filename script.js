const wrongLetters=document.querySelector(".wrong-letters");
const word=document.querySelector(".word");
const finalMessage=document.querySelector(".final-message-container");
const message=document.querySelector(".message")
const notifications=document.querySelector(".notifications");
const deneme=document.getElementById("deneme");

const  vocabulary=["clarusway","john","edward","walter","Mccarthy","joseph","tom"]

deneme.addEventListener("change",arr1);

const correctAnswer=["r","e"]
function arr1(){
   correctAnswer.push(deneme.value);
   createLetter()
   deneme.value=""
}




function createLetter(){
    let x=vocabulary[2].split("");
    let html="";
    for (let letter of x){
        html+=`<div class='letters'>${correctAnswer.includes(letter)? letter:""}</div>`;  
         
    }
    word.innerHTML=html;
    let innerWord=word.innerText.replace(/\n/g,"");
    // if (innerWord===vocabulary[2]){
    //     finalMessage.style.display="grid";
    //     finalMessage.style.backgroundColor="green"
    //     message.innerHTML="Congrulations!!!"
       
    // }else{
    //     finalMessage.style.display="grid";
    //     finalMessage.style.backgroundColor=`rgba(179,46,53,${innerWord.length/vocabulary[2].length})`
    //     message.innerHTML="Man down"
        
    // }

    
}

createLetter()
