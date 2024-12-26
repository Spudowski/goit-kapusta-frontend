import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, addUser } from "../../redux/auth/operation";
import { selectIsLoading } from "../../redux/storeSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import "./LoginForm.css";

const initialValues = {
  username: "",
  email: "",
  password: ""
}

const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
});

const validationSchemaRegister = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
});

export function LoginForm() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const navigate = useNavigate()

  const [isLoginMode, setIsLoginMode] = useState(true)

  const handleClick = async (values, { resetForm }) => {
    try {
      const action = isLoginMode
        ? await dispatch(signInUser(values)).unwrap()
        : await dispatch(addUser(values)).unwrap();

      console.log(`${isLoginMode ? "Zalogowano" : "Zarejestrowano"} pomyślnie:`, action);

      resetForm();
      navigate("/summary");
    } catch (error) {
      console.error(
        isLoginMode
          ? "Logowanie nie powiodło się:"
          : "Rejestracja nie powiodła się:",
        error
      )
      alert(
        (isLoginMode
          ? "Logowanie nie powiodło się: "
          : "Rejestracja nie powiodła się: ") + error
      )
    }
  }

  const handleModeSwitch = (resetForm) => {
    setIsLoginMode((prev) => !prev);
    resetForm();
  };

  return (
    <div className="login-form-wrapper">
      <p>You can log in with your Google Account:</p>
      <button className="google-form-button">
        <svg className="google-form-button-logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <use href="./icons/sprite.svg#google-logo"></use>
        </svg>
        Google
      </button>
      <p>
        Or log in using an email and password, after registering:
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleClick}
        validationSchema={isLoginMode ? validationSchemaLogin : validationSchemaRegister}
      >
        {({ errors, resetForm }) => (
          <Form>
            <div className="login-form-input-wrapper">
              {!isLoginMode && (
                <>
                  <label className="login-form-label" htmlFor="username">
                    {errors.username && <span className="error-star">*</span>}
                    Username:
                  </label>
                  <Field className="login-form-input" type="text" name="username" placeholder="Your username" />
                  <ErrorMessage name="username" component="div" className="error" />
                </>
              )}

              <label className="login-form-label" htmlFor="email">
                {errors.email && <span className="error-star">*</span>}
                Email:
              </label>
              <Field className="login-form-input" type="email" name="email" placeholder="your@email.com" />
              <ErrorMessage name="email" component="div" className="error" />
              
              <label className="login-form-label" htmlFor="password">
                {errors.password && <span className="error-star">*</span>}
                Password:
              </label>
              <Field className="login-form-input" type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error" />

            </div>
            <div className="login-form-button-wrapper">
              {isLoginMode ? (
                <>
                  <button
                    type="submit"
                    className={`register-form-button ${isLoginMode ? "active" : ""}`}
                    disabled={isLoading}>
                    {isLoading ? "Logging..." : "LOGIN"}</button>
                  <button
                    className="register-form-button"
                    onClick={(e) => {
                      e.preventDefault()
                      handleModeSwitch(resetForm);
                      setIsLoginMode(!isLoginMode)
                    }}>
                    {isLoginMode ? <>REGISTER<br />NEW USER</> : "LOGIN USER"}</button>
                </>
              ) : (
                  <>
                    <button
                      className="login-form-button"
                      onClick={(e) => {
                        e.preventDefault()
                        handleModeSwitch(resetForm);
                        setIsLoginMode(!isLoginMode)
                      }}>LOGIN USER</button>
                    <button
                      type="submit"
                      className={`register-form-button ${!isLoginMode ? "active" : ""}`}
                      disabled={isLoading}>
                      {isLoading ? "Registering..." : "REGISTER"}</button>
                  </>
              )}
</div>      
          </Form>
        )}
      </Formik>
    </div>
  );
}