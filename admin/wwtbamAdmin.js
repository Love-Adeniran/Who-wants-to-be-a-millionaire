// This is the function to add Questions

Question = [];
const addquestion=()=>{
    // alert("E dey Work!")
    let eachQuestion = {
        question: question.value,
        option1 : Firstoption.value,
        option2 : Secondoption.value,
        option3 : Thirdoption.value,
        option4 : Fourthoption.value,
        answer : correctanswer.value
    }
    // console.log(eachQuestion)
    if(question.value==""|| Firstoption.value==""|| Secondoption.value=="" || Thirdoption.value==""|| Fourthoption.value=="" || correctanswer.value==""){
        Alert("You have to fill in all the fields")
    }
    else{
        Question.push(eachQuestion)
        console.log(eachQuestion)
        localStorage.setItem('allQuestion', JSON.stringify(Question))
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
adminDetails = {
    adminUserName: "Love",
    adminUserpassword: "love"
}
// Admin Login start here

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

