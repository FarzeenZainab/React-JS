import React from "react";
import { Field, Formik, Form } from "formik";

const AdvancedForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "email@email.com",
          username: "username",
          color: "color",
        }}
      >
        {() => {
          return (
            <Form>
              <Field type="email" name="email" placeholder="Email" />
              <Field as="select" name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default AdvancedForm;

{
  /* <div>
  <Formik
    initialValues={{ email: "", color: "red", firstName: "", lastName: "" }}
  >
    {(props) => (
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
</div>; */
}
