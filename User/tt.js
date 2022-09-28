

let storedQuestion = JSON.parse(localStorage.getItem("allQuestion"))
console.log(storedQuestion[0].question);
console.log(storedQuestion[0].option1);
console.log(storedQuestion[0].option2);
console.log(storedQuestion[0].option3);
console.log(storedQuestion[0].option4);

// r = Math.round(Math.random()*10)
// console.log(r)
test.style.display = 'none'
const start=()=>{
    Welcome.style.display ='none'
    test.style.display = 'block'
    for(i=0; i<storedQuestion.length; i++){
        console.log(storedQuestion[i].question)
        console.log(storedQuestion[i].option1);
        console.log(storedQuestion[i].option2);
        console.log(storedQuestion[i].option3);
        console.log(storedQuestion[i].option4);
        let eachquestion =storedQuestion[i].question
        let firstOption = storedQuestion[i].option1
        let secondOption = storedQuestion[i].option2
        let thirdOption = storedQuestion[i].option3
        let fourthOption =storedQuestion[i].option4
        dquestion.innerHTML = eachquestion
        doption1.value = firstOption
        doption2.value = secondOption
        doption3.value = thirdOption
        doption4.value = fourthOption
    }
    // storedQuestion.map((item,i)=>{
    //     // console.log(item.question)
    //     let eachquestion = item[i].question
    //     let firstOption = item[i].option1
    //     let secondOption = item[i].option2
    //     let thirdOption = item[i].option3
    //     let fourthOption =item[i].option4
    //     console.log(eachquestion)
    //     console.log(firstOption)
    //     console.log(secondOption)
    //     console.log(thirdOption)
    //     console.log(fourthOption)

        // dquestion.innerHTML = eachquestion
        // doption1.innerHTML = firstOption
        // doption2.innerHTML = secondOption
        // doption3.innerHTML = thirdOption
        // doption4.innerHTML = fourthOption
        
    // })
}


// quit test
const quit =()=>{
    window.location.href ='tt.html'
}
