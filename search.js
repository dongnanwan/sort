let arr = [1,2,3,4,5]

function binary(val,arr){
    let mid
    let left = 0
    let right = arr.length - 1

    while(right > left){
        mid = Math.ceil((left + right)/2)
        if(val === arr[mid]){
            return mid
        }else if (val > arr[mid]){
            left = mid
        }else{
            right = mid
        }
    }

    return -1
}

let r = binary(6,arr)

console.log(r)