const wrongLetters=document.querySelector(".wrong-letters");
const word=document.querySelector(".word");
const finalMessage=document.querySelector(".final-message-container");
const message=document.querySelector(".message")
const notifications=document.querySelector(".notifications");

const  vocabulary=["clarusway","john","edward","walter","apple","samsung"]


const correctAnswer=["r","e","d","w","a"]

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
