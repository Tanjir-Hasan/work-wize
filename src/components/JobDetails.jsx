// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const JobDetails = () => {
//   const id  = useParams();
//   console.log(id.id)
//   const [job, setJob] = useState({});

//   useEffect(() => {
//     fetch(`data.json`)
//       .then(res => res.json())
//       .then(data => console.log(data))
//   }, []);

//   return (
//     <div>
//       {/* <h1>{job.job_description}</h1> */}
      
//     </div>
//   );
// };

// export default JobDetails;

// import React from 'react';

// const JobDetails = () => {
//     const cartData = JSON.parse(localStorage.getItem('cart')) || {};

//     return (
//       <div>
//         <h1>Shopping Cart</h1>
//         {Object.values(cartData).map((item) => (
//           <div key={item.id}>
//             <img src={item.logo} alt="" className="w-36 h-16" />
//             <h1>{item.job_title}</h1>
//             <p>{item.company_name}</p>
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };


// export default JobDetails;