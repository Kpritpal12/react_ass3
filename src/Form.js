import React,{Component} from 'react'
import Feedback from './Feedback';

class Form extends Component {
  state={
      name:"",
      dept:"",
      rating:"",
      user:[],
      val:true
  }
  handleChange=(event) =>{
      this.setState({
          [event.target.name]:event.target.value,
      });
  };
  handleSubmit=(event)=>{
      event.preventDefault();

      this.setState({
        val:!this.state.val
    })
      const tempObj={
          name:this.state.name,
          rating:this.state.rating,
          dept:this.state.dept,      
        };

        const tempArr=this.state.user;
        tempArr.push(tempObj)
        this.setState({user: tempArr})
  }
  back=()=>{
    this.setState({
      val:!this.state.val
    })
  }
  render(){
    return (
    <div>
         {this.state.val && ( <>
        <h1>Employee Feedback Form : </h1>
        <form>
            <section>
                <center>
            <label className="label" for="name">Name : </label>
            <input type="text" id="name" className='pop'  name="name" placeholder='Enter your name' onChange={this.handleChange} value={this.state.name} />
            <br></br><br></br>
            <label  className="label" for="dept">Department : </label>
            <input type="text" id="dept" className='pop'  name="dept" placeholder='Department name' onChange={this.handleChange} value={this.state.dept} />
            <br></br><br></br>
            <label className="label" for="rating">Rating : </label>
            <input type="rating" id="rating" className='pop' name="rating" placeholder='Rating' onChange={this.handleChange} value={this.state.rating} />
            <br></br><br/>
            <button className='submit' onClick={this.handleSubmit}>Submit</button>
            </center>
            </section>
           
        </form>
        <br></br>
        <br></br>
        </>)}
        {/* <div className='Div1'>
        {this.state.user.map((value)=>
        {return(
            <div className='Div2'>
                Rating : { value.name} | Department : {value.dept} | Rating :  {value.rating}
            </div>
        );}
        )}
        </div> */}

       { !this.state.val && 
            <Feedback data={
            this.state.user} 
            backf={this.back}

            />}
    </div>
  );
}
}
export default Form