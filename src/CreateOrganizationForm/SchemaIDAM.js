import * as yup from "yup";
const errorMessages = {
  name: {
    required: "Name is required",
  },
  clientId: {
    required: "clientId is required",
  },
  scope: {
    required: "scope is required",
  },
  idtokenURL: {
    required: "idtokenURL is required",
  },
  type: {
    required: "type is required",
  },
  clientSecret: {
    required: "clientSecret is required",
  },
  oauthURL: {
    required: "oauthURL is required",
  },
};
export const SchemaIDAM = yup
  .object({
    // for IDAM Details inputs
    name: yup.string().required(errorMessages.name.required),
    clientId: yup.string().required(errorMessages.clientId.required),
    scope: yup.string().required(errorMessages.scope.required),
    idtokenURL: yup.string().required(errorMessages.idtokenURL.required),
    type: yup.string().required(errorMessages.type.required),
    clientSecret: yup.string().required(errorMessages.clientSecret.required),
    oauthURL: yup.string().required(errorMessages.oauthURL.required),
  })
  .required();
