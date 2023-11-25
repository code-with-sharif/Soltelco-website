import React from 'react'
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Telesomminsms = ({value ,setValue,percent,setPercent}) => {

       
        
       
        
        
          const handleIncrement = () => {
            if (percent === 15) {
              setValue(value + 10);
              setPercent(percent + 10);
            } else if (percent === 25) {
              setValue(value + 20);
              setPercent(percent + 20);
            } else if (percent === 45) {
              setValue(value + 20);
              setPercent(percent + 15);
            } else if (percent === 60) {
              setValue(value + 55);
              setPercent(percent + 15);
            }
          };
        
          const handleDecrement = () => {
          
            if (percent === 75) {
                setValue(value - 55);
               setPercent(percent - 15);
            } else if (percent === 60) {
               setValue(value - 20);
              setPercent(percent -15);
            } else if (percent === 45) {
               setValue(value - 20);
              setPercent(percent - 20);
            } else if (percent === 25) {
                setValue(value - 10);
              setPercent(percent - 10);
            }
            
          };
        
          const chartData = {
            series: [percent],
        
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
              labels: ['  mint/sms'], // Add additional labels
            },
          };
        
          return (
           <div>
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
                    value === 30 ? 'bg-gray-400' : 'bg-[#26A0FC]'
                  } text-white text-[24px] text-center`}
                  onClick={handleDecrement}
                  disabled={value === 30}
                >
                  _
                </button>
                <button
                  className={`w-5 h-5 rounded-full  ${
                    value === 135 ? 'bg-gray-400' : 'bg-[#26A0FC]'
                  } text-white ml-4`}
                  onClick={handleIncrement}
                  disabled={value === 135}
                >
                  +
                </button>
              </div>
        <div className='text-center my-8'>
        <span className="mx-10">{value } USD</span>
        
        </div>
            </div>
           </div>
          );
        };
        
        
        
export default Telesomminsms;