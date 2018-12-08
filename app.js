//Init Github
const github = new GitHub;

//Init UI
const ui = new UI;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
//Get input text
    const userText = e.target.value;
    //check if user input is not empty
    if(userText !== ''){
    //Make http call to github using github.js method
        github.getUser(userText)
        .then( data => {
            if(data.profile.message === 'Not Found'){
                //show alert - from UI.js
              ui.showAlert('User not found', 'alert alert-danger');
            }else{
                //show profile -from ui.js
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //clear profile -from ui.js
        ui.clearProfile();
    }
});














/*//Async with Fetch
async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //proceed only when promise is resolved
    const data = await response.json();
    //only proceed when second promise is resolved
    let output = '';
    data.forEach(user => {
        output += `<li>${user.name}`
    });
    document.getElementById('output').innerHTML = output;
    return data;
}


getUsers()
.then(users=>console.log(users))
.catch(err=>console.log(err));

*/



//asyn returns a promise
/*
async function myFunc(){
    //return 'Hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(( )=> resolve('hello'), 1000);
    });
    //error
    const error = false;
    if(!error){
         //use await to wait till its resolved
    const res = await promise; //wait till promise is resolved b4 sending response
    return res;
    }else{
        await Promise.reject(new Error('Something went wrong!!!'));
    }
}

myFunc()
.then(res=>console.log(res))
.catch(err=>console.log(err));
*/