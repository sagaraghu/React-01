import { sum } from "../sum"

test("sum function should calculate the sum of two numbers",()=>{
    const result = sum(1,2);

    // below line is known as assertion
    expect(result).toBe(3);
})