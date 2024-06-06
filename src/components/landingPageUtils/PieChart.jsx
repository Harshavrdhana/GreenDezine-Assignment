// PieChart.js
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
    const data = {
        labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
        datasets: [
            {
                label: 'Expenses',
                data: [30, 25, 35, 20],
                backgroundColor: [
                    '#343C6A',    // Entertainment
                    'orange',  // Bill Expense
                    'magenta', // Investment
                    'blue',    // Others
                ],
                borderColor: 'white', // Add white borders
                borderWidth: 5,       // Make borders thicker to simulate spacing
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            datalabels: {
                color: 'white',
                formatter: (value) => {
                    return `${value}%`;
                },
                font: {
                    size: 14,
                    weight: 'bold',
                },
            },
        },
        layout: {
            padding: 10, // Optional: Add padding to ensure labels fit nicely
        },
    };

    return <Pie data={data} options={options} />;
};

export default PieChart;
