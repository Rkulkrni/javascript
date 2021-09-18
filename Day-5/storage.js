
localStorage.setItem('name','Rahul');

document.write(localStorage.getItem('name'));

// localStorage.removeItem('name')

// document.write(localStorage.getItem('name'));

sessionStorage.setItem('city','Pune');

// document.write(sessionStorage.getItem('city'))

document.cookie = 'city=pune ; expires='+ new Date(2021, 10, 9)
.toUTCString()