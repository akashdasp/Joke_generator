const btnEl = document.getElementById("btn")
const jokeE1= document.getElementById('joke')
const apikey="UHBirklyz3xLL+UHxPKwCA==tnP24VMQC0SQiiiK"
const apiurl="https://api.api-ninjas.com/v1/jokes?limit=1"
const options={
    method :"GET",
    headers:{
        'X-Api-Key':apikey,
    },
}
var count=0
async function getjoke() {
    try {
        jokeE1.innerText='Getting funniest  jokes for you..'
        btnEl.disabled=true;
        btnEl.innerText='Loading'
        if (count<5){
        const response = await fetch(apiurl,options);
        const data =await response.json();
        jokeE1.innerText=data[0].joke;
        count+=1
        
        }
        else{
            jokeE1.innerText='Sorry you have Exausted the limit come next day to see more jokes'
        }
        btnEl.disabled=false;
        btnEl.innerText='Jokes';
        
    } catch (error) {
        jokeE1.innerText='Oh no you got and error try again later!!';
        btnEl.disabled=false;
        btnEl.innerText='Jokes';
        
    }

}
btnEl.addEventListener("click",getjoke)
