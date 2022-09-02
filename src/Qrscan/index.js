import React, {useState} from "react";
import {QrReader}  from "react-qr-reader";

const Qrscan =()=>{
    const [result, setResult] = useState('No result');
    
    const handleError = (err) =>{
        console.err(err)
    }

    const handleScan = (result) =>{
         setResult(result);
    }
    
    const previewStyle = {
        height: 240,
        width: 320,
    }

    return (
        <div className="styles.container">
           <input type="file" accept="image/*" capture="environment"></input>
            <QrReader 
                delay={500}
                style={previewStyle}
                onError={handleError}
                constraints={{
                    facingMode: 'user'
                  }}
                onResult={(result, error) => {
                    if (!!result) {
                        handleScan(result?.text);
                    }
          
                    if (!!error) {
                      console.info(error);
                    }
                  }}
            />
            <div className="styles.result">{result}</div>
        </div>
    )
}

export default Qrscan;