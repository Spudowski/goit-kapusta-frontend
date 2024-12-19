import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/auth/operation";
import { selectIsLoading } from "../../redux/storeSlice";

const initialValues = {
  email: "",
  password: ""
};

export function LoginForm() {

    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    // const error = useSelector(selectIsError)
        
        const handleSubmit = async (values, { resetForm }) => {
          const { email, password } = values
  
  try {
    const action = await dispatch(signInUser(values)).unwrap()
    console.log("Zalogowano pomyślnie:", action)
    resetForm()
  } catch (error) {
    console.error("Logowanie nie powiodło się:", error)
    alert("Logowanie nie powiodło się: " + error)
  }
}

    return (
        <div>
            <p>You can log in with your Google Account:</p>
            <button>Google Button</button>
            <p>Or log in using an email and password, after registering:</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                <Form>
                    <label htmlFor="email">Email:</label>
                    <Field type="email" name="email" placeholder="your@email.com" />
                    <label htmlFor="password">Password:</label>
                    <Field type="password" name="password" placeholder="Your password" />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Logowanie..." : "ZALOGUJ SIĘ"}
                    </button>
                    {/* <button type="submit">REGISTRATION</button> */}
                    </Form>
                     )}
            </Formik>
        </div>
    )
}