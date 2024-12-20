import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/auth/operation";
import { selectIsLoading } from "../../redux/storeSlice";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const initialValues = {
  email: "",
  password: ""
};

export function LoginForm() {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  // const error = useSelector(selectIsError)
  const navigate = useNavigate()
        
        const handleSubmit = async (values, { resetForm }) => {
          const { email, password } = values
  
  try {
    const action = await dispatch(signInUser(values)).unwrap()
    console.log("Zalogowano pomyślnie:", action)
    resetForm()
    navigate("/summary")
  } catch (error) {
    console.error("Logowanie nie powiodło się:", error)
    alert("Logowanie nie powiodło się: " + error)
  }
}

    return (
        <div className="login-form-wrapper">
            <p>You can log in with your Google Account:</p>
            <button className="google-form-button">Google</button>
            <p>Or log in using an email and password, after registering:</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
            <Form>
              <div className="login-form-input-wrapper">
                    <label className="login-form-label" htmlFor="email">Email:</label>
                    <Field className="login-form-input" type="email" name="email" placeholder="your@email.com" />
                    <label className="login-form-label" htmlFor="password">Password:</label>
                <Field className="login-form-input" type="password" name="password" placeholder="Password" />
              </div>
              <div className="login-form-button-wrapper">
                <button className="login-form-button" type="submit" disabled={isLoading}>
                  {isLoading ? "Logging..." : "LOG IN"}
                </button>
                <button className="register-form-button">REGISTRATION</button>
              </div>
                    </Form>
                     )}
        </Formik>
        </div>
    )
}