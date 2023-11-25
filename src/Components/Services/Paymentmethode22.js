import React, { useState, useEffect } from 'react';

const LoadingBar = () => {
  const [paymentApproved, setPaymentApproved] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate payment approval status after 5 seconds
      setPaymentApproved(false); // Set to `true` for payment approved or `false` for not approved
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount

  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="mt-32 dot-loader-container">
      {paymentApproved === null && (
        <>
          <span className="mr-4 font font-bold text-[30px]">Payment in progress</span>
          <span className="dot-loader"></span>
          <span className="dot-loader"></span>
          <span className="dot-loader"></span>
        </>
      )}
      {paymentApproved === true && (
        <span className="text-green-500 text-lg">Payment approved!</span>
      )}
      {paymentApproved === false && (
        <span className="text-red-500 text-lg">Payment not approved</span>
      )}
   
    </div>


  );
};

export default LoadingBar;
