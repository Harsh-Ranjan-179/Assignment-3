const box1 = document.getElementById('box-1');
box1.addEventListener('click',()=>{
    box1.style.backgroundColor="red";
})

const box2 = document.getElementById('box-2');
box2.addEventListener('click',()=>{
    box2.style.backgroundColor="blue";
})

const box3 = document.getElementById('box-3');
box3.addEventListener('click',()=>{
    box3.style.backgroundColor="green";
})

const box4 = document.getElementById('box-4');
box4.addEventListener('click',()=>{
    box4.style.backgroundColor="yellow";
})


const greetButton = document.getElementById('button');
const nameInput = document.getElementById('username');
const heading = document.getElementById('heading-1');

greetButton.addEventListener('click',()=>{
    const userName = nameInput.value;
    if(userName){
        heading.innerText = `Hello, ${userName}`;
    }else {
        heading.innerText = "Hello"; // reset if empty
    }
});