import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, addUser } from "../../redux/auth/operation";
import { selectIsLoading } from "../../redux/storeSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginForm.css";

const initialValues = {
  email: "",
  password: ""
}

export function LoginForm() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const navigate = useNavigate()

  const [isLoginMode, setIsLoginMode] = useState(true)

  const handleClick = async (values, { resetForm }) => {
    try {
      if (isLoginMode) {
        const action = await dispatch(signInUser(values)).unwrap()
        console.log("Zalogowano pomyślnie:", action)
      } else {
        const action = await dispatch(addUser(values)).unwrap()
        console.log("Zarejestrowano pomyślnie:", action)
      }
      resetForm()
      navigate("/summary")
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

  return (
    <div className="login-form-wrapper">
      <p>You can log in with your Google Account:</p>
      <button className="google-form-button">Google</button>
      <p>
        Or {isLoginMode ? "log in" : "register"} using an email and password:
      </p>
      <Formik initialValues={initialValues} onSubmit={handleClick}>
        {() => (
          <Form>
            <div className="login-form-input-wrapper">
              {!isLoginMode && (
                <>
                  <label className="login-form-label" htmlFor="username">Username:</label><br />
                  <Field className="login-form-input" type="text" name="username" placeholder="Your username" />
                </>
              )}<br />

              <label className="login-form-label" htmlFor="email">Email:</label><br />
              <Field className="login-form-input" type="email" name="email" placeholder="your@email.com" /><br />
              
              <label className="login-form-label" htmlFor="password">Password:</label><br />
              <Field className="login-form-input" type="password" name="password" placeholder="Password" /><br />

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
                      setIsLoginMode(!isLoginMode)
                    }}>
                    {isLoginMode ? <>REGISTER<br />NEW USER</> : "SWITCH TO LOGIN"}</button>
                </>
              ) : (
                  <>
                    <button
                      className="login-form-button"
                      onClick={(e) => {
                        e.preventDefault()
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