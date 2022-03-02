import React from 'react'

function Feedback (props)  {
  return (
    <>
        <h1 style={{ textAlign:"center"}}>Employee Feedback Data : </h1>
        {console.log(props.data)}

     <div className='Div1'>
        {props.data.map((value,index)=>
        {return(
            <div className='Div2'>
            Name : { value.name} | Department : {value.dept} | Rating :  {value.rating}
            </div>
        )}
        )}

        <center>
        <button onClick={props.backf} className="submit"> Go Back</button></center>
        </div> 
      
    </>
  )
}

export default Feedback