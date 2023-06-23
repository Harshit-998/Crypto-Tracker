import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartJs } from "chart.js/auto"; //Don't get rid of this
import { convertNumber } from "../../../functions/convertNumbers";


function CoinChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },

        scales: {
            crypto1: {
                position:"left",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index) {
                        if( priceType === "prices") {
                            return '$' + value.toLocaleString();
                        } else {
                            return '$' + convertNumber(value);
                        }
                    },
                },
            },

            crypto2: multiAxis && {
                position:"right",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index) {
                        if( priceType === "prices") {
                            return '$' + value.toLocaleString();
                        } else {
                            return '$' + convertNumber(value);
                        }
                    },
                },
            },
        },

    };

    return <Line data={chartData} options={options} />
}

export default CoinChart;