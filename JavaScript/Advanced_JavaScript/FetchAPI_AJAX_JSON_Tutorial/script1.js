const URL='https://official-joke-api.appspot.com/random_joke';
let promise=fetch(URL);
console.log(promise);

const question=document.querySelector('#question');
const answer=document.querySelector('#answer');
const button=document.querySelector('button');


function getFacts()
{
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);//data is in readable format

        console.log(data.setup);
        //check data 1st in console and then write which data is to fetch here setup is taken for this API
        console.log(data.punchline);
        //check data 1st in console and then write which data is to fetch here punchline is taken for this API

        //manipulating with DOM
        question.innerText=data.setup;
        answer.innerText=data.punchline;
    });
}

button.addEventListener("click",getFacts);