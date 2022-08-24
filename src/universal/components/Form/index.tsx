import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";

import classes from "./formStyle.module.scss";

export function Form() {
  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Preparing to send");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 800);
        }}
      >
        {(props) => (
          <FormikForm className={classes["form-style"]}>
            <Field
              type="text"
              name="title"
              placeholder="Title of your publication"
            />
            <ErrorMessage name="title" component="div" />
            <Field
              type="text"
              name="description"
              placeholder="Add a description..."
            />
            <ErrorMessage name="description" component="div" />
            <button
              type="submit"
              disabled={props.isSubmitting}
              className={classes["submit-button"]}
            >
              Submit
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}
