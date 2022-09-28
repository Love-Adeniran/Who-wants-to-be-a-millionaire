// This is the function to add Questions

Question = [{question: "What type of book is the most associated the name Britanica?",option1 : "Encyclopedia",option2 : 'Atlas',option3 : 'Bible',option4 : 'Dictionary',answer : 'Encyclopedia'},{question: "What type of food is spaghetti?",option1 : "salad",option2 : 'pasta',option3 : 'desert',option4 : 'snack',answer : 'pasta'},{question: "What is the name of the preserved bodies of Ancient Egypt",option1 : "Daddies",option2 : 'Aunties',option3 : 'Grannies',option4 : 'Grannies',answer : 'Mummies'},{question: 'The fictional character Tarzan is said to be "Lord" of which environment?',option1 : "The Skies",option2 : 'The Sea',option3 : 'The Desert',option4 : 'The Jungle',answer : 'The jungle'},{question: 'Which of these creatures has gills to breathe through?',option1 : "Parrot",option2 : 'pasta',option3 : 'Goldfish',option4 : 'Hamster',answer : 'cat'},{question: "Which food is mentioned in the Lord's Prayer",option1 : 'Meat',option2 : 'Milk',option3 : 'Carrots',option4 : 'Bread',answer : 'Bread'},];
localStorage.setItem("allQuestion", JSON.stringify(Question))

const addquestion=()=>{
    // alert("E dey Work!")
   
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