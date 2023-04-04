// // import React, { useState } from "react";
// // export default function Form() {
// //   const [validationErrors, setValidationErrors] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     phonenumber: "",
// //     arcade: "",
// //     advanced: "",
// //     pro: "",
// //     online: "",
// //     largerstorage: "",
// //     customizeprofile: "",
// //     arcademonthly: "",
// //     onlineservice: "",
// //     totalCost: "",
// //   });
// //   if (page === 0) {
// //     if (formData.name.length < 3) {
// //       setValidationErrors({
// //         ...validationErrors,
// //         name: "Length should be greater than 3",
// //       });
// //       setErrors(true);
// //     } else {
// //       setValidationErrors({
// //         ...validationErrors,
// //         name: "",
// //       });
// //       setErrors(false);
// //     }
// //   }
// //   return (
// //     <button
// //       onClick={() => {
// //         if (page === FormTitles.length - 1) {
// //           alert("FORM SUBMITTED");
// //           console.log(formData);
// //         } else {
// //           let hasErrors = false;
// //           if (page === 0) {
// //             if (formData.name.length < 3) {
// //               setValidationErrors({
// //                 ...validationErrors,
// //                 name: "Length should be greater than 3",
// //               });
// //               hasErrors = true;
// //             } else {
// //               setValidationErrors({
// //                 ...validationErrors,
// //                 name: "",
// //               });
// //             }
// //           }

// //           console.log(validationErrors);
// //           if (!hasErrors) {
// //             setPage((page) => page + 1);
// //             setErrors(false);
// //           }
// //         }
// //       }}
// //     >
// //       {page === FormTitles.length - 1 ? "Submit" : "Next"}
// //     </button>
// //   );
// // }largerstorage: "",

// // // ...

// // // ...

// import React, { useState } from "react";
// import PersonalInfo from "./personalInfo";
// import SelectYourPlan from "./selectYourPlan";
// import PickAddOns from "./pickAddOns";
// import FinishUp from "./finishingUp";
// import { getname } from "../store/appState";

// function Form() {
//   const [page, setPage] = useState(0);
//   const [formData,setFormData] = useState({})
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     phonenumber: "",
// //     arcade: "",
// //     advanced: "",
// //     pro: "",
// //     online: "",
// //     largerstorage: "",
// //     customizeprofile: "",
// //     arcademonthly: "",
// //     onlineservice: "",
// //     total: "",
// //   });

//   const [errors, setErrors] = useState([]);
// //   const [validationErrors, setValidationErrors] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     phonenumber: "",
// //     arcade: "",
// //     advanced: "",
// //     pro: "",
// //     online: "",
// //     largerstorage: "",
// //     customizeprofile: "",
// //     arcademonthly: "",
// //     onlineservice: "",
// //     total: "",
// //   });

//   const FormTitles = ["Personal Info", "Select Plan", "Pick Add Ons", "Finish"];

//   const PageDisplay = () => {
//     if (page === 0) {
//       return (
//         <PersonalInfo
//           formData={formData}
//           name={getname}
//           setFormData={setFormData}
//             errors={errors}
//         />
//       );
//     } else if (page === 1) {
//       return <SelectYourPlan formData={formData} setFormData={setFormData} />;
//     } else if (page === 2) {
//       return <PickAddOns formData={formData} setFormData={setFormData} />;
//     } else {
//       return <FinishUp formData={formData} setFormData={setFormData} />;
//     }
//   };
//   console.log(formData)

//   return (
//     <div className="form">
//       <div className="progressbar">
//         <div
//           style={{
//             width:
//               page === 0
//                 ? "25%"
//                 : page === 1
//                 ? "25%"
//                 : page === 1
//                 ? "25%"
//                 : "25%",
//           }}
//         ></div>
//       </div>
//       <div className="form-container">
//         <div className="header">
//           <h1>{FormTitles[page]}</h1>
//         </div>
//         <div className="body">{PageDisplay()}</div>
//         <div className="footer">
//           <button
//             disabled={page === 0}
//             onClick={() => {
//               setPage((page) => page - 1);
//             }}
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => {
//               if (page === FormTitles.length - 1) {
//                 alert("FORM SUBMITTED");
//                 console.log(formData);
//               } else {
//                 // show errors
//                 if (page === 0) {
//                   if (formData.name && formData.name.length < 3) { // added null check
//                     setErrors([...errors, "Too few characters in the name"]);
//                   }
//                 }
                
//                 // if (page === 0) {
//                 //   if (formData.name.length < 3) {
//                 //     setErrors([
//                 //       ...errors,
//                 //       "Too few characters in the name",
//                 //     ]);
//                 //     // setErrors(true);
//                 //   }
//                 // }

//                 // console.log(validationErrors);
//                 if (errors === false) {
//                   setPage((page) => page + 1);
//                 }

//                 //
//               }
//             }}
//           >
//             {page === FormTitles.length - 1 ? "Submit" : "Next"}
//           </button>
//           {/* {errors.length > 0 && (
//                                 <ul style={{color:"red"}}className="fs-5">
//                                     {errors.map(error => <li key={error}>{error}</li>)}
//                                 </ul>
//                             )} */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;


// 


// ...

// ...

import React, { useState } from "react";

export default function Form() {
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    arcade: "",
    advanced: "",
    pro: "",
    online: "",
    largerstorage: "",
    customizeprofile: "",
    arcademonthly: "",
    onlineservice: "",
    totalCost: "",
  });

  // Define the missing variables
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(false);
  const FormTitles = ["Personal Info", "Select Your Plan", "Pick Add-Ons", "Finish Up"];

  if (page === 0) {
    if (formData.name.length < 3) {
      setValidationErrors({
        ...validationErrors,
        name: "name should be greater than 3",
      });
      setErrors(true);
    } else {
      setValidationErrors({
        ...validationErrors,
        name: "",
      });
      setErrors(false);
    }
  }

  return (
    <button
      onClick={() => {
        if (page === FormTitles.length - 1) {
          alert("FORM SUBMITTED");
          console.log(formData);
        } else {
          let hasErrors = false;
          if (page === 0) {
            if (formData.name.length < 3) {
              setValidationErrors({
                ...validationErrors,
                name: "name should be greater than 3",
              });
              hasErrors = true;
            } else {
              setValidationErrors({
                ...validationErrors,
                name: "",
              });
            }
          }

          console.log(validationErrors);
          if (!hasErrors) {
            setPage((page) => page + 1);
            setErrors(false);
          }
        }
      }}
    >
      {page === FormTitles.length - 1 ? "Submit" : "Next"}
    </button>
  );
}
