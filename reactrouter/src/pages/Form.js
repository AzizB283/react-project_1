import React from "react";
import { useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const myStyle = {
  color : "red"
}

function UserForm() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
 

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Welcome!</h1>
          <p>Fill up the form to register yourself!</p>

          <form onSubmit={handleSubmit}>
            <table cellPadding={5}>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>
                  <input
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {" "}
                  {errors.name && touched.name ? (
                    <p className="form-error" style={myStyle}>{errors.name}</p>
                  ) : null}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {errors.email && touched.email ? (
                    <p className="form-error" style={myStyle}>{errors.email}</p>
                  ) : null}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {errors.password && touched.password ? (
                    <p className="form-error" style={myStyle}>{errors.password}</p>
                  ) : null}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="confirm_password">Confirm Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error" style={myStyle}>{errors.confirm_password}</p>
                  ) : null}
                </td>
              </tr>

              <tr>
                <button type="submit">Registration</button>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
