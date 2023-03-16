import { useFormik } from "formik";
import { BasicFormSchema } from "../validations/basicForm";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
    },
    onSubmit: (values, action) => {
      action.resetForm();
    },
    validationSchema: BasicFormSchema,
  });

  // console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        id="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.onBlur}
        placeholder="Enter your email"
      />
      <label htmlFor="age">Age</label>
      <input
        value={formik.values.age}
        id="age"
        type="age"
        onChange={formik.handleChange}
        onBlur={formik.onBlur}
        placeholder="Enter your age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
