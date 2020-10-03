function mergerSort(arr){
    if(arr.length <= 1){
        return arr
    }else{
        let mid = Math.ceil(arr.length / 2)
        let left_arr = arr.slice(0,mid)
        let right_arr = arr.slice(mid,arr.lenght)

        return merger_sorted_arr(left_arr,right_arr)
    }
}



function merger_sorted_arr(a,b){
    return a.concat(b).sort((a,b)=> a - b)
    // let a_cursor = 0, 
    //     b_cursor = 0,
    //     rst = []
    
    // for(let i = 0;i < a.length + b.length;i ++){
    //     if(a[a_cursor] <= b[b_cursor]){
    //         rst.push(a[a_cursor])
    //         a_cursor ++
    //     }else{
    //         rst.push(b[b_cursor])
    //         b_cursor ++
    //     }
    // }
    // return rst
}

let arr = [7,6,1,5,9,11]

console.log(mergerSort(arr))

// let arr = [3,4,5,6,7,8]
// let len = arr.length
// let mid = Math.ceil(len/2)

// let left = arr.slice(0,mid)
// let right = arr.slice(mid,len)

// console.log(left)
// console.log(right)