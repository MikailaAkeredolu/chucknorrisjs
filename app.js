document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.send();

    //what to do when we get data
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';

            if(response.type === 'success'){

                response.value.forEach(function(joke){
                    output +=  `<li>${joke.joke}</li>`
                });

            }else{
                output += '<li>Something Went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    e.preventDefault();
}




//document.getElementById('button').addEventListener('click', loadData);

// function loadData(){
//     //Create an XHR Object
//     const xhr = new XMLHttpRequest();
//     //Open - type of request and url
//     xhr.open('GET', 'data.txt', true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             console.log(this.responseText);
//         }
//     }

//     xhr.send();

// }