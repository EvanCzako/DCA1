import { formatDate } from './formatDate.js';

function timeConverter(unix_timestamp) {
    // let unix_timestamp = 1549312452
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp);
    return formatDate(date);
}

function updateChart(chart,data) {
    console.log(data);
    // chart.data.datasets[0].data.push(17);
    chart.data.datasets[0].data=data.results.map((result) => {
        return result.l;
    });
    chart.data.datasets[1] = {
        fill: false,
        lineTension: 0.2,
        backgroundColor: "rgba(0,200,0,1)",
        borderColor: "rgba(0,200,0,1)",
        borderWidth: 2,
        data: data.results.map((result) => {
            return result.h;
        })
    };
    chart.data.datasets[2] = {
        fill: false,
        lineTension: 0.2,
        backgroundColor: "rgba(0,0,200,1)",
        borderColor: "rgba(0,0,200,1)",
        borderWidth: 2,
        data: data.results.map((result) => {
            return result.o;
        })
    };
    chart.data.labels = data.results.map((result) => {
        return timeConverter(result.t);
    });
    chart.update();
};

export function getData(startDate,endDate,ticker,chart) {

    $.ajax({
        url: `http://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${startDate}/${endDate}?apiKey=OQOFc8h5JbXyGXTddJg8apBILddzVR2y`,
        type: 'GET',
        success: (data) => {
            updateChart(chart,data);
        },
        error: (error) => { console.log(error) }
    })
};

