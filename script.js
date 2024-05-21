let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('mouseover',()=>{
  foods.style.backgroundImage="url('food1.png')";
});
food2s.addEventListener('mouseover',()=>{
  foods.style.backgroundImage="url('food.jpg')";
});

console.log("hi");
