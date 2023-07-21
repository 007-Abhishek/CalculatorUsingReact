import React from "react";
import Button from './Button';
import './Style.css';



function Calc(){
    const [display, setDisplay] = React.useState({
        current:"0",
        total:"0",
        isInitial:true,
        op:""
    });

    function doCalculation(){
        let total = parseInt(display.total);

        switch(display.op){
            case "+":
                total += parseInt(display.current);
                break;
                
            case "-":
                total -= parseInt(display.current);
                break;
           
            case "X":
                total *= parseInt(display.current);
                break;
            
            case "/":
                total /= parseInt(display.current);
                break;

            default:
                total = parseInt(display.current);
        }
        return total;

    }

    function handleNumber(value){
       let newValue=value;

       if(!display.isInitial){
           newValue=display.current + value;
       }
       
       setDisplay({current:newValue, total:display.total,isInitial:false, op:display.op});
    }
    
    function handleOperator(value){
        const total = doCalculation();

        setDisplay({current:total.toString(),total:total.toString(), isInitial:true, op:value})
    
    }

    function renderDisplay(){
        return display.current;
    }

    function handleClear(){
        setDisplay({
            current:"0",
            total:"0",
            isInitial:true,
            op:""

        });
    }
    
    return(
        <div className="calc">

            <div className="display">{renderDisplay()}</div>
            
            <Button value="7" onClick={handleNumber}/>
            <Button value="8" onClick={handleNumber}/>
            <Button value="9" onClick={handleNumber}/>
            <Button className="operator" onClick={handleOperator} value="/"/>

            <Button value="4" onClick={handleNumber}/>
            <Button value="5" onClick={handleNumber}/>
            <Button value="6" onClick={handleNumber}/>
            <Button className="operator" onClick={handleOperator} value="X"/>

            <Button value="1" onClick={handleNumber}/>
            <Button value="2" onClick={handleNumber}/>
            <Button value="3" onClick={handleNumber}/>
            <Button className="operator" onClick={handleOperator} value="-"/>

            <Button value="C" onClick={handleClear}/>
            <Button value="0" onClick={handleNumber}/>
            <Button value="=" onClick={handleOperator}/>
            <Button className="operator" onClick={handleOperator} value="+"/>
        </div>
    )
}

export default Calc;