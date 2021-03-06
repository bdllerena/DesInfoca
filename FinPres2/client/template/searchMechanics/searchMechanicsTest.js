import {coutSearch} from "./searchMechanics.js";

export const TestSearchMechanicBanana = () => {
  expResult=0;
  actuRestult = coutSearch('Banana');
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicNegatives = () => {
  expResult=0;
  actuRestult = coutSearch(-10);
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicNumbers = () => {
  expResult=0;
  actuRestult = coutSearch(10);
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicLavado = () => {
  expResult=1;
  actuRestult = coutSearch('Lavado');
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicEmpty = () => {
  expResult=0;
  actuRestult = coutSearch('');
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicJhonBox = () => {
  expResult=0;
  actuRestult = coutSearch('JhonBox');
  //La razon porque sera 0 es debido a que no existe registrada la mecanica aun
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicNegative = () => {
  expResult=0;
  actuRestult = coutSearch('-1489');
  //La razon porque sera 0 es debido a que no existe registrada la mecanica aun
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicNegativeLetters = () => {
  expResult=0;
  actuRestult = coutSearch('-mecanev');
  //La razon porque sera 0 es debido a que no existe registrada la mecanica aun
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicOffnum = () => {
  expResult=0;
  actuRestult = coutSearch('Off1234');
  //La razon porque sera 0 es debido a que no existe registrada la mecanica aun
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicSymbols = () => {
  expResult=0;
  actuRestult = coutSearch('Yu$y');
  //La razon porque sera 0 es debido a que no existe registrada la mecanica aun
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
