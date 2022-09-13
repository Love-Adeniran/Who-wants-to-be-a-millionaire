// let welcome = document.getElementById('Welcome')
test.style.display = 'none'
const start =()=>{
    Welcome.style.display ='none'
    test.style.display = 'block'
}

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
        window.location.href = "/admin/wwtbamAdmin.html"
    }
    else{
       alert('Incorrect name or Password!');
    }
})
