import * as yup from "yup";

export const BasicFormSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("required"),
  age: yup
    .number()
    .positive("only positive numbers are allowed")
    .integer("Enter a number")
    .required("required"),
});
