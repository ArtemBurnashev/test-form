export const checkRequired= (schema:any,name:string):boolean=>schema?.describe().fields[name]?.tests.some(v=>v.name==="required")
