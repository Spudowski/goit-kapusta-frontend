import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn, register } from "../../redux/auth/authOperations";

const initialValues = {
  email: "",
  password: ""
};

export function LoginForm() {

    const dispatch = useDispatch()
        
        const handleSubmit = async (values, { resetForm }) => {
        const { email, password } = values
        
      
            if (!email || !password) {
                alert("Email and password are required.")
                return
            }

            try {
                await dispatch(logIn({ email, password })).unwrap()
                resetForm()
            } catch (error) {
                alert("Login failed: " + error)
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
                    <button type="submit">LOG IN</button>
                    {/* <button type="submit">REGISTRATION</button> */}
                    </Form>
                     )}
            </Formik>
        </div>
    )
}