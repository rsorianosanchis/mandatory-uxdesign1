'use strict';
//
// Object med metodern
let mds = {
 texField: function(){
  /* body... */
 },
 switch: function () {
  /* body... */
 },
 checkbox: function () {
  /* body... */
 },
 radio: function () {
  // get radio buttons for enable/disabled elements
  let vRadioInput = document.querySelectorAll('.mds-radio__input');
  console.log(vRadioInput);
  let arrRadioInput = [];
  for(let i = 0; i < vRadioInput.length; i++){
   vRadioInput[i].addEventListener('change',(e)=>{kontroll(e)})
   arrRadioInput.push(vRadioInput[i])
   console.log(arrRadioInput);
  }
 },
};
//
/* functioner for att vara anropat från metoderna */
//
function kontroll(e) {
 //
 let allaInputElementer = document.querySelectorAll('input');
 console.log(allaInputElementer);
 //
 let kontrollDisable = e.target.nextElementSibling.innerHTML;
 console.log(kontrollDisable);
 //
 if (kontrollDisable === 'Ja'){
   allaInputElementer.forEach( function(element, index) {
    if (element.type !== 'radio'){
     element.setAttribute('disabled', 'true');
    }else{
     console.log("det är inte elemengt för att stopa");
    }
    // statements
   });
 }else if (kontrollDisable === 'Nej'){
   allaInputElementer.forEach( function(element, index) {
    if (element.disabled === true){
     element.removeAttribute('disabled');
    }else{
     console.log("det är inte element för att stopa");
    }
   });
 }else{
  console.error("ring utvecklare och fråga :(");
 }
};
// JavaScript program for kontrollera enable/disable
mds.radio();
