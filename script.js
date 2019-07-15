

document.querySelector("button").addEventListener('click',function(){
  fetch(`https://haveibeenpwned.com/api/v2/breaches`)
    .then(res => res.json())
    .then(response => {

    response.forEach((el, i) => {
      const randomItem = response[Math.floor(Math.random()* response.length)]; // randomly selecting object out of response
      console.log(randomItem)
      document.getElementById("date").innerText=`${randomItem.Name}`
      document.getElementById("name").innerText=`${randomItem.BreachDate}`
      document.getElementById("description").innerHTML=`${randomItem.Description}`
    })
  })
  .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
  })







  /*

  document.querySelector("button").addEventListener('click',function(){
  fetch(`https://haveibeenpwned.com/api/v2/breaches`)
    .then(res => res.json())
    .then(response => {
      console.log(response) // our entire response array
      const randomItem = response[Math.floor(Math.random()* response.length)]; // randomly selecting object out of response
      console.log(randomItem)
      document.getElementById("date").innerText=`${randomItem.Name}`
      document.getElementById("name").innerText=`${randomItem.BreachDate}`
      document.getElementById("description").innerHTML=`${randomItem.Description}`
  })
  .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
  })

  */
