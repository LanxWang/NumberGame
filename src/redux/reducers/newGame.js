import { NewNum} from '../constant.js'

const innitState = ['','','','']
export default function newNum(preState=innitState,action){
  const{type} = action
  switch (type) {
    case NewNum:
      {
        let arrNum=[];
        let len = 4 ;
        while (len) {
          let num = Math.floor(Math.random()*10)
          if(arrNum.indexOf(num)===-1) {
            arrNum.push(num) ;
            len--;
          }
        }
        console.log(`create newNum`, arrNum)
        return [...arrNum]
    }
      
    default:{
      console.log(`return default num`)
      return [...preState]
    }
      
  }
}