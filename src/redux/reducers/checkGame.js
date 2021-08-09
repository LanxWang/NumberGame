import { CheckNum,ClearResult } from "../constant.js"
const result=[]
export default function checkNum(preState=result,action){
  const {type,data} = action
  //const {rightNum,inputNum} = data
  switch (type) {
    case CheckNum:
      {
        const {rightNum,inputNum} = data
        let countA=0,countB=0,countC=0
          for (let i = 0; i < rightNum.length; i++) {
            for (let j = 0; j < inputNum.length; j++) {
              // eslint-disable-next-line
              if(inputNum[i]==rightNum[j]){
                i===j ?  countA = countA+1 : countB = countB+1
                break
              }        
            }
          }
        countC = 4-countA-countB;
        if(countA===4){
          result.push(`RIGHT!Num:${inputNum} ` )
        } else result.push(`WRONG!Num:${inputNum},A:${countA},B:${countB},C:${countC} `) 
        return [result]
      }
    case ClearResult:
      {
        console.log(`clear`)
        result.splice(0,result.length)
        return [result]
      }
    
    default:
      return result
  }
 
    

}