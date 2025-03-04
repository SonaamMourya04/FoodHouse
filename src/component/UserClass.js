
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={count:0,

            count1:2,
            
        }
    }
    render(){
        const{name, location, contact}= this.props;
        const{count,count1}=this.state
     return( 
    <div className="user-card">
          <h2>Name:{name}</h2>
           <h2>Location:{location}</h2>
         <h2>Contact:{contact}</h2>
         <h1>count:{count}</h1>
         <h1>count1:{count1}</h1>
         <button onClick={()=>{
            this.setState({
                count:this.state.count + 1,
                count1:this.state.count1 + 1,
                
                

            })
         }}>Button</button>
        
            </div>
            
        );
    }
}
export  default  UserClass;