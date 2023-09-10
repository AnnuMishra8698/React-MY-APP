import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was enabled" + " " +text);
        let newText=text.toUpperCase();
        // setText("you have clicked on handle up click")
        setText(newText);
        props.showalert("converted to upper case", "success")

    }
    const handleLoClick = () => {
        console.log("lowercase was enabled" + " " +text);
        let newText=text.toLowerCase();
        // setText("you have clicked on handle up click")
        setText(newText);

    }
    const handleOnChange = (event) => {
        console.log("ONchange was enabled");
        setText(event.target.value);
    }
    const [text, setText]=useState('enter text2');
//for changing state
 return (
    <>
<div className='container' style={{color: props.mode=='dark'?'white':'grey'}}>
     <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode=='light'?"white":"grey", color: props.mode=='dark'?'white':'grey'}} value={text} id="myBox" rows="8"></textarea>
  {/* enter text2 set inside textarea */}
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

</div>
<div className="conatiner my-300" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>
        Your Text summary
    </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008*text.split(" ").length} minutes</p>
    <h2>preview</h2>
    <p> {text.length>0?text:"Enter something to preview"}</p>
</div>
</>
  )
}
