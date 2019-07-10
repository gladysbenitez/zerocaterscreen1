// begin screener code
const returnValues = [
  "Hakuna",
  "Matata",
  "It means",
  "No worries",
  "For the rest of your days"
].sort(() => (Math.random() > 0.5 ? 1 : -1));
console.log('these are the return Values', returnValues);


const createService = (retVal, index) => () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(`${index}. ${retVal}`);
      resolve(retVal);
    }, Math.random() * 10000)
  );

const services = returnValues.map(createService); 

// services.forEach(service => {
//   service();
// });

window.onload = () => {
  document.body.onload = addElement();
  // let status = true;
  function addElement () { 
  // let newStatus = status ? 'pending': 'resolved';
  for (let i = 0; i < returnValues.length; i++){ 
  // create a new div element 
  let newDiv = document.createElement('div'); 
  newDiv.setAttribute('id',[i]) 
  // and give it some content 
  let newContent = document.createTextNode(`${i}.  ${returnValues[i]} ... pending`);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  
  // add the newly created element and its content into the DOM 
  let currentDiv = document.getElementById('statusUI'); 
  currentDiv.appendChild(newDiv)
}
for (let x = 0; x < services.length; x++){
      let service = services[x];
       p = service();  // p is a promise 
       p.then((val)=>{ 
       document.getElementById('statusUI').children[x].innerHTML =` ${x}. ${val} Resolved! `;
       let myDiv = document.createElement('div');
       let content = document.createTextNode(`${x}.  ${val}`);
       myDiv.appendChild(content); 
       let currentDiv = document.getElementById('resultsUI'); 
       currentDiv.appendChild(myDiv)
     })
   };
 }
}
// end screener code
