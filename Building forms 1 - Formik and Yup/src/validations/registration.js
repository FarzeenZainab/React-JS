import * as Yup from "yup";

export const registrationSchema = Yup.object({
  name: Yup.string().max(50).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});
