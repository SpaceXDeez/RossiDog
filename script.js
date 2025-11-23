document.getElementById('change').addEventListener('click', function(){
  const h = document.getElementById('greeting');
  if(h.textContent.includes('Hello')){
    h.textContent = 'Welcome to RossiDog!';
  } else {
    h.textContent = 'Hello, RossiDog!';
  }
});
