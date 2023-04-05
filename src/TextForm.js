import React,{useState} from 'react'

export default function TextForm
() {

    const [text,settext]=useState("")
    const [mystyle,setstyle]=useState({
      color:"black",
      backgroundColor:"white"
    })
    const[screenmode,setmode]=useState("Enable Dark Mode")

    const handleChange=(event)=>{
        settext(event.target.value)
    }

    const upercase=()=>
    {
        settext(text.toUpperCase());
    }

    const lowercase=()=>
    {
      settext(text.toLowerCase());
    }

    const removespaces=()=>
    {
      settext(text.replace(/\s/g, ""));
    }

    const cleartext=()=>
    {
      settext("")
    }

    const togglemode=()=>
    {
            if(mystyle.color=="black")
            {
              setstyle({
                color:"white",
                backgroundColor:"black"
              })
              setmode("Enable Light Mode")
            }
            else{
              setstyle({
                color:"black",
                backgroundColor:"white"
              })
              setmode("Enable Dark Mode")
            }
    }
    
  return (
    <div>
        
<div class="mb-3" >
  <label for="exampleFormControlTextarea1" class="form-label">Magic Box</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" style={mystyle} rows="10" value={text}  onChange={handleChange}></textarea>
</div>
<button className="btn btn-primary mx-3 my-3"   onClick={upercase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3 my-3"   onClick={lowercase}>Convert to LowerCase</button>
<button className="btn btn-primary mx-3 my-3"   onClick={removespaces}>Remove Spaces</button>
<button className="btn btn-primary mx-3 my-3"   onClick={cleartext}>Clear Text</button>
<br/>
<button className="btn btn-primary mx-3 my-3"   onClick={togglemode}>{screenmode}</button>

    </div>
  )
}
