const controller = new AbortController();
document.getElementById('abort').addEventListener('click', () => {
controller.abort(); // Cancel the form submission request
});
document.getElementById('start').addEventListener('click',()=>{
    setTimeout(fetch_Data,5000);});
const url ='https://jsonplaceholder.typicode.com/users';
var i=-1;
function fetch_Data(){
fetch(url, { signal: controller.signal})
.then(response => response.json())
.then(data => document.getElementById('name').innerText=data[i].name,i+=1)
.then(data => console.log('Data:', data))
// .then(data => console.log(data.name), i+=1)

.catch(error => {
if (error.name === 'AbortError') {
    document.getElementById('name').innerText='Request was aborted due to timeout'; }
});}

// -----------------something----------------------
// const controller = new AbortController();
// document.getElementById('abort').addEventListener('click', () => {
// controller.abort(); // Cancel the form submission request
// });
// document.getElementById('start').addEventListener('click',()=>{
//     setTimeout(fetch_Data,0);});
// const url ='https://jsonplaceholder.typicode.com/users';
// var i=-1;
// function fetch_Data(){
// fetch(url)
// .then(response => response.json())
// // .then(data => console.log('Data:', data))
// .then(data => document.getElementById('name').innerText=data[i].name)
// // .then(data => document.getElementById('name').innerHTML(data[1].name))
// .then(data => console.log(data), i+=1)
// .catch(error => {
// if (error.name === 'AbortError') {
// console.error('Request was aborted due to timeout'); }
// });
// }

// console.log(card());

// ---------------------Single Value output-------------------
// const controller = new AbortController();
// document.getElementById('abort').addEventListener('click', () => {
// controller.abort(); // Cancel the form submission request
// });
// document.getElementById('start').addEventListener('click',()=>{
//     setTimeout(fetch_Data,0);});
// const url ='https://jsonplaceholder.typicode.com/users';
// var i=-1;
// function fetch_Data(){
// fetch(url, { signal: controller.signal})
// .then(response => response.json())
// // .then(data => console.log('Data:', data))
// .then(data => console.log(data[i].name), i+=1)

// .catch(error => {
// if (error.name === 'AbortError') {
// console.error('Request was aborted due to timeout'); }
// });

// }
