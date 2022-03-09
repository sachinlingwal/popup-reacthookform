import * as yup from "yup";
const errorMessages = {
  organizationame: {
    required: "Organization Name is required",
  },
  website: {
    required: "website name is required",
  },
  region: {
    required: "region is required",
  },
  zipcode: {
    required: "zipcode  is required",
  },
  address: {
    required: "address is required",
  },
  country: {
    required: "country name is required",
  },
  email: {
    required: "Email is required",
  },

  phonenumber: {
    required: "Phone Number  is required",
    min: "Minimum 10 digit phone number required",
  },
};
export const SchemaOrgInfo = yup
  .object({
    organizationame: yup
      .string()
      .required(errorMessages.organizationame.required),
    website: yup.string().required(errorMessages.website.required),
    region: yup.string().required(errorMessages.region.required),
    zipcode: yup
      .string()
      .required(errorMessages.zipcode.required)
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, "Must be exactly 6 digits")
      .max(6, "Must be exactly 6 digits"),
    address: yup.string().required(errorMessages.address.required),
    country: yup.string().required(errorMessages.country.required),
    email: yup
      .string()
      .required(errorMessages.email.required)
      .email("Invalid email format"),
    phonenumber: yup
      .number()
      .typeError("Enter correct  phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, errorMessages.phonenumber.min)
      .required(errorMessages.phonenumber.required),
  })
  .required();
