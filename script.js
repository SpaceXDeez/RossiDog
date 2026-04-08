function calcAge(birthYear, birthMonth, birthDay) {
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const hasBirthdayPassed =
    today.getMonth() + 1 > birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);
  if (!hasBirthdayPassed) age--;
  return age;
}

document.getElementById('age-dylan').textContent = calcAge(2010, 1, 5);
document.getElementById('age-kate-taylor').textContent = calcAge(2012, 2, 27);
document.getElementById('age-dylan-card').textContent = calcAge(2010, 1, 5);
document.getElementById('age-taylor-card').textContent = calcAge(2012, 2, 27);
document.getElementById('age-katelyn-card').textContent = calcAge(2012, 2, 27);

document.getElementById('change').addEventListener('click', function(){
  const h = document.getElementById('greeting');
  if(h.textContent.includes('Hello')){
    h.textContent = 'Welcome to RossiDog!';
  } else {
    h.textContent = 'Hello, RossiDog!';
  }
});
