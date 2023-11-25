import React from 'react'
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Buildurplan from './Buildurplan';
import Telesomminsms from './Telesomminsms';
const Soltelcomints = ({data ,setData,datapercent,setdatapercent}) => {
   
    
   
  
    
      const handleIncrement = () => {
        if (datapercent === 15) {
          setData(data + 10);
          setdatapercent(datapercent + 10);
        } else if (datapercent === 25) {
          setData(data + 20);
          setdatapercent(datapercent + 20);
        } else if (datapercent === 45) {
          setData(data + 20);
          setdatapercent(datapercent + 15);
        } else if (datapercent === 60) {
          setData(data + 55);
          setdatapercent(datapercent + 15);
        }
      };
    
      const handleDecrement = () => {
      
        if (datapercent === 75) {
            setData(data - 55);
           setdatapercent(datapercent - 15);
        } else if (datapercent === 60) {
           setData(data - 20);
          setdatapercent(datapercent -15);
        } else if (datapercent === 45) {
           setData(data - 20);
          setdatapercent(datapercent - 20);
        } else if (datapercent === 25) {
            setData(data - 10);
          setdatapercent(datapercent - 10);
        }
        
      };
    
      const chartData = {
        series: [datapercent],
    
        options: {
          chart: {
            height: 200,
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '80%',
                background: '#fff',
              },
              track: {
                background: '#fff',
                margin: 0,
              },
              dataLabels: {
                name: {
                  show: true,
                  color: '#888',
                  fontSize: '17px',
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: '36px',
                  color: '#111',
                  formatter: (val) => val,
                  offsetY: 15, 
                },
                labels: {
                  show: true,
                  name: {
                    offsetY: 20,
                  },
                  value: {
                    offsetY: -20,
                  },
                },
              },
            },
          },
          fill: {
            type: 'solid',
            color: '#000000',
          },
          stroke: {
            lineCap: 'round',
          },
          labels: ['GB/sms', '45GB Data', '50GB data'], // Add additional labels
        },
      };
    
      return (
       <>
        <main>
        <div id="card" className=" mt-">
          <div id="chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="radialBar"
              height={200}
            />
          </div>
          <div className="flex justify-center items-center mt-">
            <button
              className={`w-5 h-5 rounded-full ${
                data === 30 ? 'bg-gray-400' : 'bg-[#26A0FC]'
              } text-white text-[24px] text-center`}
              onClick={handleDecrement}
              disabled={data === 30}
            >
              _
            </button>
            <button
              className={`w-5 h-5 rounded-full  ${
                data === 135 ? 'bg-gray-400' : 'bg-[#26A0FC]'
              } text-white ml-4`}
              onClick={handleIncrement}
              disabled={data === 135}
            >
              +
            </button>
          </div>
    <div className='text-center my-8'>
    <span className="mx-10">{data } USD</span>
    
    </div>
        </div>



        </main>
       </>
      );
    };
    
    
    
export default Soltelcomints;