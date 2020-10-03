let arr = [4,1,5,9,3,1]

function insertSort(arr){
    let temp
    for(let i = 1;i < arr.length;i ++ ){
        if(arr[i] < arr[i - 1]){
            temp = arr[i]
            arr[i] = arr[i - 1]
            for(let j = i - 2;j > 0 && arr[j] > temp;j --){
                arr[j + 1] = arr[j]
            }
            arr[j + 1] = temp
        }
    }
}

function insert_sort(arr){
    for(let i = 0;i < arr.length;i ++){
        let current = arr[i]
        let pos = i
        for(let j = i;j > 0;j --){
            if(arr[j - 1] > current){
                arr[j] = arr[j - 1]
                pos --
            }
        }
        arr[pos] = current
    }

    return arr
}

let r = insert_sort(arr)
console.log(r)