import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
    return(
        <div className="">
            <h1>About</h1>
            <h1>my self sonam</h1>
            <User name={"sonam mourya"}
            location={"delhi"}
            contact={"7683019301"}/>
            <UserClass
            name={"sonam mourya"}
            location={"delhi"}
            contact={"7683019301"}/>
        </div>
    )
}
export default About;