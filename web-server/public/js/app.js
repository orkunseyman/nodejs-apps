console.log("Client side js file is loaded");

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


weatherForm.addEventListener('submit',(e)=>{
    const location=search.value
    
    fetch('http://localhost:3000/weather?adress='+location).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            document.getElementById('result').innerHTML=data.error
            document.getElementById('description').innerHTML=null
        }else{
            document.getElementById('result').innerHTML=data.temperature
            document.getElementById('description').innerHTML=data.descriptions
        }
    })
})


    e.preventDefault()
})
