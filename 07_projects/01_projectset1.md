# Project related to DOM
## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-dewrcbqz?file=index.html)

# Solution code
## Projct 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.id==='grey'){
      body.style.backgroundColor=('grey')
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=('blue')
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=('white')
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=('yellow')
    }
    })
})
```

## Project 2
```javascript
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')
  if(height ===''|| height<0||isNaN(height)){
    results.innerHTML=`Please give valid height ${height}`
  }
  else if(weight ===''|| weight<0||isNaN(weight)){
    results.innerHTML=`Please give valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML =`<span>${bmi}</span>`
  }
})
```
<<<<<<< HEAD

## Project 3
```javascript
const clock = document.querySelector('#clock')

setInterval(()=>{
  let date = new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)

```
=======
## Project 3
```javascript
const randomColor = function(){
  let Hex = '0123456789ABCDEF'
  color = '#'
  for(i=0; i<6; i++){
    color+=Hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let intervalId;
const startChangingcolor = function(){

  intervalId=setInterval(changeBgColor, 1000)
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
    
}
const endChangingcolor = function(){
  clearInterval(intervalId);
}
document.querySelector('#start').addEventListener('click', startChangingcolor)
document.querySelector('#stop').addEventListener('click', endChangingcolor)
```
>>>>>>> 67673e7785e4422b72c87892c36d4201ffb1f059
