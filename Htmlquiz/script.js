const startButton =document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')

const questionContainerElement =document.getElementById('question-container')
const questionElement =document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')

let shuffledQuestions,correctQuestionIndex;
let quizScore=0;


startButton.addEventListener('click',setGame)

nextButton.addEventListener('click' ,() =>{
    correctQuestionIndex++
    setnextQuestion()
})



function setGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(() =>Math.random() -0.5)
    correctQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}



function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText=question.question;
    question.answers.forEach(answer => {
    const button=document.createElement('button')
     button.innerText=answer.text;
       button.classList.add('btn')
       if(answer.correct){
         button.dataset.correct =answer.correct
          }
           button.addEventListener('click',selectAnswer)
            answerButtonsElement.appendChild(button)
         });
}



function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body.correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
   
   if(shuffledQuestions.length > correctQuestionIndex +1){
    nextButton.classList.remove("hide")
   }
   else{
    startButton.innerText="restart"
    startButton.classList.remove=("hide")
   }
   if(selectedButton.dataset=correct){
    quizScore++
   }
document.getElementById('right-answers').innerText=quizScore
    
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
    }


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




const questions=[
    {
        question:'Which restaurant do you wanna visit first?',
        answers:[
            {text:'Ngong',correct:true},
            {text:'Westlands',correct:false},
            {text:'CBD' , correct:false},
            {text:'Karen' , correct:false},
            
        ],
    },
    {
        question:'Where should be our first vacation?',
        answers:[
         
            {text:'Mombasa',correct:false},
            {text:'Dubai' , correct:false},
            {text:'Kajiado',correct:true},
            {text:'Karen' , correct:false},
            
        ],
    },
    {
        question:'Which mall should we visit next?',
        answers:[
         
            {text:'WestMall',correct:false},
            {text:'Ananas mall',correct:false},
            {text:'Waterfront' , correct:false},
            {text:'Village market' , correct:true},
            
        ],
    },
]