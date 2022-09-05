import React, {useState} from "react";
import {QrReader}  from "react-qr-reader";
import moment from "moment";

const Qrscan =()=>{
    const [result, setResult] = useState('No result');
    const [serial, setSerial] = useState('');
    const [id, setID] = useState('');

    const date = moment().format('YYYY-MM-DD')

    const handleError = (err) =>{
        console.err(err)
    }

    const handleScan = (result) =>{
         const codes = result.split(";")
            setID(codes[1])
            setSerial(codes[3])
         setResult(result);
    }

    const reset = () =>{
        setResult("No result");
        setID("");
        setSerial("");
    }
    
    const previewStyle = {
        height: 250,
        width: 250,
        
    }

    return (
        <div className="styles.container">
           <div style={{display: id ? 'none' : 'flex', justifyContent: "center" }}>
            <QrReader 
                    delay={500}
                    containerStyle={previewStyle}
                    onError={handleError}
                    constraints={{
                        facingMode: 'environment'
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
           </div>
           <div style={{display: !id ? 'none' : 'block' }}>
           <p style={{marginTop:"55px", color:"gray", textAlign:"center"}}><span style={{color: "black"}}>QR data: </span>{result}</p>   
            <div style={{fontSize:"15px", textAlign:"center"}}>
                <p style={{marginTop:"-10px"}}>Serial number:</p>
                <p style={{fontWeight:"bold", marginTop:"-20px"}}>{serial}</p>
                <p style={{marginTop:"-10px"}}>Hose ID:</p>
                <p style={{fontWeight:"bold", marginTop:"-20px"}}>{id}</p>
                <p style={{marginTop:"-10px"}}>Date:</p>
                <p style={{fontWeight:"bold", marginTop:"-20px"}}>{id ? date : null}</p>
                <p style={{fontWeight:"bold", marginTop:"-20px"}}>{id ? "(Fetched from database)" : null}</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", position:"fixed", bottom:"5px", width:"100%"}}>
                <div
                    onClick={reset} 
                    style={{
                    textAlign:"center", marginBottom:"0px", border:"1px solid red",
                    width:"80%", height:"50px", display:"flex", justifyContent:"center", 
                    alignItems:"center", fontSize:"20px"}}>
                    Reset
                </div>
            </div>
            </div> 
            
            
        </div>
        
    )
}

export default Qrscan;