const monitorProps = {};

const createMonitorProps = idName =>{
    let inputValue = document.getElementById(idName).value; 
    monitorProps[idName] = inputValue;
    
}

const calculatePpi = () =>  {
    let result = Math.round((monitorProps.pixelVer * monitorProps.pixelHor)/(monitorProps.sideWidth*monitorProps.sideHeight));
                     
    document.getElementById('result').innerHTML = result
    
}