/**
 * @str a.name=nimahai&a.dress&x=1&y=1   a&b&c   a[name]=ghx  color=deep%20blue a[0] = 1
 */

let str = 'a.name=nimahai&a.dress&x=1&y=deep%20blue'

function parse(url){
    return url.split('&').reduce((preVal,curVal)=>{
        let [key,val] = curVal.split('=')
        if(!val){
            return preVal
        }
        preVal[key] = decodeURIComponent(val)
        return preVal
    },{})
}


let r = parse(str)

console.log(r)