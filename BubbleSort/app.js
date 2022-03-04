
let arrayItems = Array.apply(null, Array(15)).map(function (item, index) {
    return Math.floor(Math.random() * 100);
});
let delay = 250;

let bubbleSortChart = new Chart("myChart", {
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



$("#start").on('click', function(){
    delay = $("#delay").val()
    if(delay < 0)
        delay = 500

    bubbleSort(arrayItems)
});

$("#reset").on('click', function(){
    location.reload(true);
});

$("#GenerateNewItem").on('click', function(){

    let length = $("#length").val()
    if(length <= 0 || length > 200)
        length = 50
    
    arrayItems = generateNewArray(length);
    bubbleSortChart = new Chart("myChart", {
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
});


function generateNewArray(lenght) {
    return Array.apply(null, Array(parseInt(lenght))).map(function (item, index) {
        return Math.floor(Math.random() * 100);
    });
}






function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function bubbleSort(numbers) {
    let sorted = false;
    let runs = 1;
    while (!sorted) {
        let everythingSorted = true;
        for (let i = 0; i < numbers.length - runs; i++) {
            bubbleSortChart.data.datasets[0].backgroundColor[i] = "red"
            bubbleSortChart.data.datasets[0].backgroundColor[i + 1] = "green"
            bubbleSortChart.update();

            if (numbers[i] > numbers[i + 1]) {
                temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                everythingSorted = false;
            }
            await sleep(delay);
        }
        runs++;

        if (everythingSorted) {
            sorted = true;
            bubbleSortChart.data.datasets[0].backgroundColor = "green"
            bubbleSortChart.update();
        }
    }
}
