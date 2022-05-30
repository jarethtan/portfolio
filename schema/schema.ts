import * as yup from "yup";

export const contactSchema = yup
  .object()
  .shape({
    name: yup.string().required("This field is required").min(4, "Name must be more than four characters."),
    email: yup.string().required("This field is required").email("Must be a valid email").max(100),
    subject: yup.string().required("This field is required").min(4, "Subject must be more than four characters."),
    message: yup.string().required("This field is required").min(4, "Message must be more than four characters."),
  })
  .required();
