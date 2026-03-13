var findKthPositive = function(arr, k) {
    let counter =1;
    let newArr=[];
    loop1:for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
            if(arr[i]==counter){
                ++counter
                continue loop1;
            }
            else {
                newArr.push(counter)
                ++counter
            }
        }
    }
    return newArr[k-1]
}
