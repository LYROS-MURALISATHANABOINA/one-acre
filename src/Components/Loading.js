import React from "react";

const Loading = () => {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "10vh", backgroundColor: "#f8f9fa" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Loading;


// import React from 'react'

// function Loading() {
//     return (
//         <div class="spinner-border text-success" role="status">
//             <span class="sr-only">Loading...</span>
//         </div>
//     )
// }

// export default Loading
