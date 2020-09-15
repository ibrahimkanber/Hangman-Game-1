const wrongLetters=document.querySelector(".wrong-letters");
const word=document.querySelector(".word");
const finalMessage=document.querySelector(".final-message-container");
const message=document.querySelector(".message")
const notifications=document.querySelector(".notifications");
const wordEntry=document.getElementById("wordEntry");

const  vocabulary=["clarusway","john","edward","walter","Mccarthy","joseph","tom"]

wordEntry.addEventListener("change",arr1);

const correctAnswer=["r","e"]
function arr1(){
   correctAnswer.push(wordEntry.value);
   createLetter()
   wordEntry.value=""
}




function createLetter(){
    let index=Math.floor(Math.random()*vocabulary.length);
    let html="";
    for (let letter of vocabulary[index]){
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
