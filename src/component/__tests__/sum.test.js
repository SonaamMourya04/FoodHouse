import {sum} from "../sum"

test("sum of 2 function should  calculate the sum of the numbers", ()=>{
const result=sum(3,4);

//assertion
expect(result).toBe(7);

});