function add(param1: number, param2: number): number {
    const sum = param1 + param2;
    return sum
   }
   
   function add2(...param1: number[]): number {
       let sum2 = 0;
       
       console.log(param1)
   
       param1.forEach((num) => {
          sum2 += num
       })
       return sum2
   }
   
   console.log(add(1, 2));
   console.log(add(3, 2));
   
   console.log(add2(1,2,3,4,5));
   console.log(add2(2,3));
   
   