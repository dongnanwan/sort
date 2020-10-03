let arr = [5,1,2,7,4,6,3]

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let index = 0
    let base = arr[index]
    let left = []
    let right = []

    for(let i = 0;i < arr.length;i ++){
        if(arr[i] < base){
            left.push(arr[i])
        }else if(arr[i] > base){
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(base,quickSort(right))
}

let r = quickSort(arr)
console.log(r)

// let a = []
// let b = [1]
// let c = []

// console.log(a.concat(b,c))
