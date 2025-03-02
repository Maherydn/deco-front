import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartComponentProps {
  data: number[];
}

const ChartComponent:React.FC<ChartComponentProps> = ({data}) => {
  const month = {
    labels: [
      'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'
    ], 
    datasets: [
      {
        label: 'Ventes Mensuelles',
        data: data, 
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1, 
      },
    ],
  };


  const options = {
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };

  return <Line data={month} options={options} />;
};

export default ChartComponent;
