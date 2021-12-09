import {getData} from './getData1.js';
import { formatDate } from './formatDate.js';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    let startDateInput = document.getElementById('start-date');
    let endDateInput = document.getElementById('end-date');
    let today = new Date();
    endDateInput.max = formatDate(today);
    let selectTicker = document.getElementById('select-ticker');
    


    let chart = new Chart("myChart", {
        type: "line",
        data: {
            datasets: [{
                fill: false,
                lineTension: 0.2,
                borderWidth: 2,
                backgroundColor: "rgba(255,0,255,1)",
                borderColor: "rgba(255,0,255,0.5)",
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                xAxes: [{ display: true, gridLines: { color: "rgba(255,255,255,0.1)" } }],
                yAxes: [{ display: true, ticks: { beginAtZero: false }, gridLines: { color: "rgba(255,255,255,0.1)" } }]
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });
    
    selectTicker.addEventListener('change', () => {
        getData(startDateInput.value, endDateInput.value, selectTicker.value, chart)
    });
    startDateInput.addEventListener('change', () => {
        getData(startDateInput.value, endDateInput.value, selectTicker.value, chart)
    });
    endDateInput.addEventListener('change', () => {
        getData(startDateInput.value, endDateInput.value, selectTicker.value, chart)
    });
    getData(startDateInput.value, endDateInput.value, selectTicker.value, chart);



});