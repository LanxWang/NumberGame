
import { CheckNum,ClearResult} from '../constant.js'
export const createCheckNumAction = (rightNum,inputNum) =>({type:CheckNum,data:{rightNum,inputNum}})
export const createClearResultAction = ()=>({type:ClearResult})
