let arr = [5,3,1,7,9,4]

function selectSort(arr){
    for(let i = 0;i < arr.length;i ++){
        let min = i
        for(let j = i;j < arr.length;j ++){
            if(arr[j] < arr[min])[
                min = j
            ]
        }

        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }

    return arr
}


let r = selectSort(arr)
console.log(r)