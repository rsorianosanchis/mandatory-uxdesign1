'use strict';

// Object med metoderna


let mds = {
 texField: function(){
  console.log("hola");
  
  labelFloating();
 },
 switch: function () {
  /* body... */
 },
 checkbox: function () {
  /* body... */
 },
 radio: function () {
  /* body... */
 },
};

/* Delad functioner for att bli anropat från metoderna */

function labelFloating () {
 const vTextField = document.querySelectorAll('.mds-text-field');
 const vTextFieldInput = document.querySelectorAll('.mds-text-field__input');
 //
 for(let i = 0; i < vTextField.length; i++){
  vTextFieldInput[i].addEventListener('focus',()=>{vTextField[i].classList.add('mds-text-field--active')});
  vTextFieldInput[i].addEventListener('blur',()=>{vTextField[i].classList.remove('mds-text-field--active')});
  
 }

 console.log("soy un cabeza de chorlito");
 // body... 
};

mds.texField();
