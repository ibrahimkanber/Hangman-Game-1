const word=document.querySelector(".word");
const finalMessage=document.querySelector(".final-message-container");
const message=document.querySelector(".message")
const notifications=document.querySelector(".notifications");
const wordEntry=document.getElementById("wordEntry");
const wrongLettersElement=document.querySelector(".wrong-letters p");
const figureParts=document.querySelectorAll(".partOfFigure");


///Select random word from array

const  vocabulary=["clarusway","john","edward","walter","Mccarthy","joseph","tom"]
let index=Math.floor(Math.random()*vocabulary.length);
const selectedWord=vocabulary[index];

////Get value from input and seperate values

wordEntry.addEventListener("change",seperateLetters);

const correctLetters=[];
const wrongLetters = [];
function seperateLetters(){
    
    if (selectedWord.includes(wordEntry.value)){
        correctLetters.push(wordEntry.value);
    }else{
        wrongLetters.push(wordEntry.value);
        console.log(wrongLetters);
        showFigurePart();
        wrongLettersElement.innerHTML+= `${wordEntry.value} |`
    }
    createLetter();
    wordEntry.value=""
}
////Show  Part of figure if answer is not correct
function showFigurePart(){
    figureParts.forEach((part,index)=>{
        const errors = wrongLetters.length;
        console.log(errors)
        if (index < errors) {
            part.style.display = 'block';
          } else {
            part.style.display = 'none';
          }
       
    })
    
}


///Manupulate and create letter

function createLetter(){
    let html="";
    for (let letter of selectedWord){
        html+=`<div class='letters'>${correctLetters.includes(letter)? letter:""}</div>`;  
         
    }
    word.innerHTML=html;
}
createLetter()

////

























// let innerWord=word.innerText.replace(/\n/g,"");
// if (innerWord===vocabulary[2]){
//     finalMessage.style.display="grid";
//     finalMessage.style.backgroundColor="green"
//     message.innerHTML="Congrulations!!!"
   
// }else{
//     finalMessage.style.display="grid";
//     finalMessage.style.backgroundColor=`rgba(179,46,53,${innerWord.length/vocabulary[2].length})`
//     message.innerHTML="Man down"
    
// }   


