
import {useState} from 'react';
import "./App.css"
function App() {
  const [calc , setCalc]=useState("");
  const [result,setResult]=useState("");

  const ops =['÷','*','+','-','.'];
  const updateCalc = value =>
  {
    // if(calc.includes('.') && value==='.')
    // {
    //   alert("Check for Decimal Number !!");
    //   // return;
    // }
   
    const isnumber = (value) =>{
       if(value=='1'|| value=='2'||value=='3'||value=='4'||value=='5'||value=='6'||
       value=='7'||value=='8'||value=='9')
       return true;
    }

    if(
       (ops.includes(value) && calc === '')
    || (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
    return;
    
    if(calc==='0' && isnumber(value))
     setCalc(value);
     else 
    setCalc (calc+value);

    // if(!ops.includes(value))
    // {
    //   setResult(eval(calc+value).toString());
    // }
  }

  const calculate = () => {
    setResult(eval(calc).toString());
    setCalc(eval(calc).toString());
  }
  
  const allClear =()=> {
    setResult((0).toString());
    setCalc('');
  }
  
  const deleteLast =() => {
    if(calc ==='')
    return;

    const value = calc.slice(0,-1);
    setCalc(value);
  }

  return (
    <div className="main">
    <div className="calculator-grid">
      <div className="output">
        <div className="previous">{calc}</div>
        <div className="current">{result || "0"}</div>
      </div>
      <button onClick={allClear}  className="span-two">AC</button>
      <button onClick={ deleteLast} className="">DEL</button>
      <button onClick = {()=> updateCalc('÷')} >÷</button>
      <button onClick = {()=> updateCalc('1')}>1</button>
      <button onClick = {()=> updateCalc('2')}>2</button>
      <button onClick = {()=> updateCalc('3')}>3</button>
      <button onClick = {()=> updateCalc('*')} >*</button>
      <button onClick = {()=> updateCalc('4')} >4</button>
      <button onClick = {()=> updateCalc('5')} >5</button>
      <button onClick = {()=> updateCalc('6')} >6</button>
      <button onClick = {()=> updateCalc('+')} >+</button>
      <button onClick = {()=> updateCalc('7')} >7</button>
      <button onClick = {()=> updateCalc('8')} >8</button>
      <button onClick = {()=> updateCalc('9')} >9</button>
      <button onClick = {()=> updateCalc('-')} >-</button>
      <button onClick = {()=> updateCalc('.')} >.</button>
      <button onClick = {()=> updateCalc('0')} >0</button>
      <button onClick={calculate} className="span-two">=</button>
    

    </div>
    </div> 
  );
}

export default App;
