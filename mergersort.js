function mergeSort(arr)
{
    if(!Array.isArray(arr) || isNaN(arr[0])) return 'Please pass in an array of numbers';
    if(arr.length===1)
    {
        return arr
    }
    let mid=Math.floor(arr.length/2);
    let arrleft= arr.slice(0, mid)
    let arrright=arr.slice(mid,arr.length)

    arrleft=mergeSort(arrleft)
    arrright=mergeSort(arrright)
    return merge(arrleft, arrright)
}

function merge(arrleft, arrright)
{
    let mergedarr=[];
    while (arrleft.length > 0 && arrright.length > 0)
    {
        if(arrleft[0]<arrright[0])
        {
            mergedarr.push(arrleft[0])
            arrleft.shift()
        }else
        {
            mergedarr.push(arrright[0])
            arrright.shift()
        }
    }
    while (arrright.length > 0) {
        mergedarr.push(arrright[0]);
        arrright.shift();
    }

    while (arrleft.length > 0) {
        mergedarr.push(arrleft[0]);
        arrleft.shift();
    }
    return mergedarr;
}

console.log(mergeSort([1,5,4,3]))