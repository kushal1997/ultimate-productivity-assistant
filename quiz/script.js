const correctAnswers=["C","D","D","C","B"];
const result=document.querySelector(".result");
const form=document.querySelector(".quiz-form");
const questions=document.querySelectorAll(".question");



form.addEventListener("submit",event => {
    event.preventDefault();
    let score=0;
    let count=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    console.log(userAnswers);
    userAnswers.forEach((answer) => {
        
        if(answer==''){
            count+=1;
            
        }

    });
    if(count>=1){
        alert("Attempt all of them");
    }else{
        userAnswers.forEach((answer,index)=>{
        
        
            if(answer===correctAnswers[index]){
               score+=1;
               questions[index].classList.add("correct");
           }
           
           else{
               
               questions[index].classList.add("wrong");
           }
           
   
   
       });
    }
    
    
    
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent=`You scored ${score}/5`;


});