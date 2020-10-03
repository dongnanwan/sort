function bubbleSort(arr){
    for(let i = 0;i < arr.length;i ++){
        for(let j = 0;j < arr.length;j ++){
            if(arr[j] > arr[j + 1]){
                let temp
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}


let arr = [5,3,1,7,9,4]

let r = bubbleSort(arr)
console.log(r)