const URL='https://official-joke-api.appspot.com/random_joke';
let promise=fetch(URL);
console.log(promise);

const question=document.querySelector('#question');
const answer=document.querySelector('#answer');
const button=document.querySelector('button');


//using asynchronous function
//as when we call any API and requests to give some data is asynchronous work. as it may take some time so we use await
const getFacts=async()=>{
    /*
    let promise=await fetch(URL);
    console.log(promise);
    */
    console.log("Geeting data from API");
    let response=await fetch(URL);
    console.log(response);//response is an object in JSON format

    //printing status of response object
    console.log(response.status);//200 means successful

    //converting JSON format to JS object usable format
    let data=await response.json();
    console.log(data);//usable data
    console.log(data.setup);
    //check data 1st in console and then write which data is to fetch here setup is taken for this API

    console.log(data.punchline);
    //check data 1st in console and then write which data is to fetch here punchline is taken for this API

    //manipulating with DOM
    question.innerText=data.setup;
    answer.innerText=data.punchline;
}

button.addEventListener("click",getFacts);