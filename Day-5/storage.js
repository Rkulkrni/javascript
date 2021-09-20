// Storage type
//---------------------------------------------------------------------------------------------------------------------
// 1) Local storage
//The data does not expire. It remains after the browser restart.
localStorage.setItem('name','Rahul');

document.write(localStorage.getItem('name'));

localStorage.removeItem('name')

document.write(localStorage.getItem('name'));

//---------------------------------------------------------------------------------------------------------------------
// 2) session storage
//The sessionStorage exists only within the current browser tab.
//once we close the browser data will removed from session storage.
sessionStorage.setItem('city','Pune');

document.write(sessionStorage.getItem('city'))

//---------------------------------------------------------------------------------------------------------------------
// 3) cookies=>
//cookies are used to store the data at client side.
//less secure.
//can store only upto 4kb data.
//anyone can disabled cookies.

document.cookie = 'city=pune ; expires='+ new Date(2021, 10, 9)
.toUTCString()

