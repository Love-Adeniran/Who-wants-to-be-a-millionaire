

const add=()=> {
    console.log('Okay')
    window.location.href="/User/addQ.html";
}

// This is the function to add Questions

Question = [
    {question: "What type of book is the most associated the name Britanica?",option1 : "Encyclopedia",option2 : 'Atlas',option3 : 'Bible',option4 : 'Dictionary',answer : 'Encyclopedia'},
    {question: "What type of food is spaghetti?",option1 : "salad",option2 : 'pasta',option3 : 'desert',option4 : 'snack',answer : 'pasta'},
    {question: "What is the name of the preserved bodies of Ancient Egypt",option1 : "Daddies",option2 : 'Aunties',option3 : 'Grannies',option4 : 'Grannies',answer : 'Mummies'},
    {question: 'The fictional character Tarzan is said to be "Lord" of which environment?',option1 : "The Skies",option2 : 'The Sea',option3 : 'The Desert',option4 : 'The Jungle',answer : 'The jungle'},
    {question: 'Which of these creatures has gills to breathe through?',option1 : "Parrot",option2 : 'pasta',option3 : 'Goldfish',option4 : 'Hamster',answer : 'cat'},
    {question: "Which food is mentioned in the Lord's Prayer?",option1 : 'Meat',option2 : 'Milk',option3 : 'Carrots',option4 : 'Bread',answer : 'Bread'},];
localStorage.setItem("allQuestion", JSON.stringify(Question))

const addquestions=()=>{
    // console.log(eachQuestion)
    if(question.value==""|| Firstoption.value==""|| Secondoption.value=="" || Thirdoption.value==""|| Fourthoption.value=="" || correctanswer.value==""){
        alert("You have to fill in all the fields")
    }
    else{
        console.log(Question)
        let eachQuestion = {
            question: question.value,
            option1 : Firstoption.value,
            option2 : Secondoption.value,
            option3 : Thirdoption.value,
            option4 : Fourthoption.value,
            answer : correctanswer.value
        }
        Question.push(eachQuestion)
        console.log(eachQuestion)
        localStorage.setItem("allQuestion", JSON.stringify(Question))
        alert("Question Saved Successfully!")
        question.value = ""
        Firstoption.value = ""
        Secondoption.value = ""
        Thirdoption.value = ""
        Fourthoption.value = ""
        correctanswer.value = ""
        // window.location.href = ""
        
    }
}
// function addquestion Ends here


// Js for take test  start
// let storedQuestion = JSON.parse(localStorage.getItem("allQuestion"))
// console.log(storedQuestion[0].question);
// console.log(storedQuestion[0].option1);
// console.log(storedQuestion[0].option2);
// console.log(storedQuestion[0].option3);
// console.log(storedQuestion[0].option4);

// r = Math.round(Math.random()*10)
// console.log(r)
test.style.display = 'none'
const start=()=>{
    Welcome.style.display ='none'
    test.style.display = 'block'
    
    for(i=0; i<Question.length;){
        let correctAnswer = Question[i].answer
        let eachquestion = Question[i].question
        let firstOption = Question[i].option1
        let secondOption = Question[i].option2
        let thirdOption = Question[i].option3
        let fourthOption =Question[i].option4
        dquestion.innerHTML = eachquestion
        doption1.value = firstOption
        doption2.value = secondOption
        doption3.value = thirdOption
        doption4.value = fourthOption
        let option1 = document.getElementById('doption1')
        // console.log(option1.value)
        let option2 = document.getElementById('doption2')
        let option3 = document.getElementById('doption3')
        let option4 = document.getElementById('doption4')
        // console.log(Question[i].answer)
        option1.addEventListener('click',()=>{
           let choice = option1.value;
           if(choice==correctAnswer){
            console.log(correctAnswer)
            start();
           }
           else{
            console.log('nothing')
           }
        })

        option2.addEventListener('click',()=>{
            let choice = option2.value;
            if(choice==correctAnswer){
             console.log(correctAnswer)
             start();
            }
            else{
                console.log('nothing')
               }
         })
         option3.addEventListener('click',()=>{
            let choice = option3.value;
            if(choice==correctAnswer){
             console.log(correctAnswer)
             start();
            }
            else{
                console.log('nothing')
               }
         })
         option4.addEventListener('click',()=>{
            let choice = option4.value;
            if(choice==correctAnswer){
             console.log(correctAnswer)
             start();
            }
            else{
                console.log('nothing')
               }
         })
         i++;  
    }
     
    
}


// const yes=()=> {
//     alert("I'm working")
// }  
// JS for take test end here


// JavaScript for Admin login and display table start here

// display table for questions and answers added (onload)
const table=()=>{
    let listInLocalstorage = JSON.parse(localStorage.getItem('allQuestion'))
    listInLocalstorage.map((item,i)=>{
        let list = item;
        let questions = item[i]["option1"]
        console.log(list);
    })
}
// End of display table


// Admin Login start here

adminDetails = {
    adminUserName: "Love",
    adminUserpassword: "love"
}

let logIn = document.getElementById('login')
logIn.addEventListener('click',()=>{
    let adminName = adminname.value;
    let adminPassword = adminpassword.value;
    // console.log(adminName)
    if(adminname.value==""|| adminpassword.value==""){
        alert('Fill up the field please!')
    }
    else if(adminName== adminDetails.adminUserName && adminPassword== adminDetails.adminUserpassword){
        alert('login Successful!');
        window.location.href = "../addQ.html"
        // loginAdmin.style.display= "none"
    }
    else{
       alert('Incorrect name or Password!');
    }
})

// Admin Login Ends here


// JavaScript for Admin login and display table end here




