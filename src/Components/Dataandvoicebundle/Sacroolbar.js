// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ApexChart = () => {
//   const [chartData, setChartData] = useState({
//     series: [83],
//     options: {
//       chart: {
//         height: 350,
//         type: 'radialBar',
//       },
//       plotOptions: {
//         radialBar: {
//           startAngle: -135,
//           endAngle: 225,
//           dataLabels: {
//             name: {
//               fontSize: '22px',
//             },
//             value: {
//               fontSize: '16px',
//             },
//             total: {
//               show: true,
//               label: 'Total',
//               formatter: function (w) {
//                 return chartData.series[0];
//               },
//             },
//           },
//         },
//       },
//       labels: ['Berries'],
//     },
//   });

//   const increaseValue = () => {
//     setChartData((prevChartData) => {
//       const newSeriesValue = prevChartData.series[0] + 10; // Increase by 10 or any other desired value
//       return {
//         ...prevChartData,
//         series: [newSeriesValue],
//       };
//     });
//   };

//   return (
//     <div>
//       <div id="chart" className='mt-32'>
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="radialBar"
//           height={350}
//         />
//       </div>
//       <button onClick={increaseValue}>Increase Value</button>
//     </div>
//   );
// };

// export default ApexChart;
