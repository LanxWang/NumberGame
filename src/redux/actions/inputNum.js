import {Input,ClearInput} from '../constant.js'
export const createInputNumAction = (value)=>({type:Input,data:value})
export const createClearInputNumAction = (value)=>({type:ClearInput,data:value})