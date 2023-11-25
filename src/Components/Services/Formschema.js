import * as Yup from 'yup';
export const Formschema=Yup.object({
    phonenumber:Yup.string().min(12,"number mustbe 12 digit").max(12,"number no more exceed 12 digit ").required(''),
    // simnumber:Yup.string()
    //   .min(12, "Number must be 12 digits")
    //   .max(12, "Number cannot exceed 12 digits")
    //   .required(''),
});
// export const Formschema = Yup.object({
//     // phonenumber:Yup.string().min(12,"number mustbe 12 digit").max(12,"number no more exceed 12 digit ").required(''),

//     simnumber:Yup.string()
//       .min(12, "Number must be 12 digits")
//       .max(12, "Number cannot exceed 12 digits")
//       .required('This field is required'),
//   });
  