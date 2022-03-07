let arrayItems = Array.apply(null, Array(6)).map(function (item, index) {
    return Math.floor(Math.random() * 100);
});
 arrayItems = [56, 18, 60, 86, 13, 27];

let delay = 250;

var bubbleSortChart = new Chart("myChart2", {
    type: "bar",
    data: {
        labels: arrayItems,
        datasets: [{
            backgroundColor: ["pink"],
            data: arrayItems
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Bubble Sort Chart"
        }
    }
});

console.log(arrayItems)
call(arrayItems)

function call(arr) {
    var pivot = arr.pop();
    var arrLength = arr.length;
    console.log({"PIVOT" : pivot})
    // console.log(arr)
    // console.log(arrLength)
    console.log('-----------')

    var IsSort = 0
    while(IsSort <6){
        
        console.log(arr)

        var II = 0
        var IndexLitem;
        while(II < arrLength){
            if(arr[II] > pivot){
                IndexLitem = II;
                break
            }
            II++
        }
        console.log(II)
    
        var JJ = arrLength
        var IndexRitem;
        while(JJ >= 0){
            if(arr[JJ] < pivot){
                IndexRitem = JJ;
                break
            }
            JJ--
        }
        console.log(JJ)
    


        if(arr[IndexLitem] < arr[IndexRitem]){
            console.log("!!!!!!!!!!")
            break
        }else{
            temp = arr[IndexLitem]
            arr[IndexLitem] =  arr[IndexRitem]
            arr[IndexRitem] = temp
        }

        IsSort++
    }




    console.log('-----------')
    console.log(arr)


    // var LastICheck = 0
    // for (let i = 0; i < arrLength; i++) {
    //     if(arr[i] > pivot){
    //         var LastJCheck = arrLength-1
    //         for (let j = arrLength-1; j >= 0; j--) {
    //             if(arr[j] < pivot){
    //                 temp = arr[i];
    //                 arr[i] = arr[j];
    //                 arr[j] = temp;
    //                 continue
    //             }
    //             LastJCheck++
    //         }
    //     }
    //     LastICheck++
    // }
    // console.log(arr)

    // console.log('-----------')
    // for (let i = arrLength-1; i >= 0; i--) {
    //     if(arr[i] < pivot){
    //         console.log(arr[i])
    //         break;
    //     }
    // }
}

function swap(num1, num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

function quickSort(start,end,arr){

}


// console.log(arrayItems)
// var res = quickSort(arrayItems)
// console.log(res)
// // bubbleSortChart.update();

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     } else {
//         var lArr = [];
//         var rArr = [];
//         var nArr = [];
//         var pivot = arr.pop();
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] <= pivot) {
//                 lArr.push(arr[i])
//             } else {
//                 rArr.push(arr[i])
//             }
//         }

//         NNarrayItems = nArr.concat(lArr, pivot, rArr);
//         NNarrayItems.forEach((v, i) => {
//             arrayItems[i] = v
//         });
        
//         return nArr.concat(quickSort(lArr), pivot, quickSort(rArr));
//     }
// }
