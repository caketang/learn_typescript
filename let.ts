var a:number;
let b:number;
//数组生命2种方法
let c: Array<number> = [1,2,3]
let d: number[] = [111,22]
// turple 跟数组差不多 里面内容固定 顺序不能变
let h: [string, number] = ['2,', 2]
h.push(1)
console.log(h)
// function 
let j = function(a: string, b:string):void {
    console.log(a+b)
}
j('1','22')