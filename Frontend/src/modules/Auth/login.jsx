import { FormikProvider, useFormik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useNavigate, Link } from "react-router-dom";
import AxiosInstnace from "../../utils/Axios/Axiox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userSchema = object({
  email: string().min(8).email().max(20).required(),
  password: string().min(8).max(20).required(),
});

function Login() {
  const navigate = useNavigate();

  const login = async (data) => {
    return AxiosInstnace.post("/members/login", data);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await login(data);
      toast.success(response.data.message);
      if(response.status==200){
        navigate("/membersDashboard/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <FormikProvider value={formik}>
      <ToastContainer />

      <div className="mt-10  mb-16">
        <form
          className="flex flex-col w-80  px-5 rounded-2xl shadow-xl justify-center mx-auto   "
          action=""
        >
          <h1 className="text-center text-green-600 text-2xl">Login</h1>

          <label htmlFor="email">Email</label>
          <Field
            className=" mt-3  bg-transparent border-b-2 "
            placeholder="Type your Email"
            name="email"
          />
          <div className="h-4">
            <ErrorMessage name="email">
              {(msg) => <div className=" text-red-600 mt-1">{msg}</div>}
            </ErrorMessage>
          </div>

          <label className="mt-5" htmlFor="password">
            Password
          </label>
          <Field
            className="  mt-3 bg-transparent border-b-2"
            placeholder="Type Your password"
            name="password"
          />
          <div className="h-4">
            <ErrorMessage name="password">
              {(msg) => <div className=" text-red-600 mt-1">{msg}</div>}
            </ErrorMessage>
          </div>

          <button
            className="mt-5 mb-4   bg-green-500 rounded-md "
            onClick={formik.handleSubmit}
          >
            Login
          </button>
          <h3 className="mb-5 ">
            Dont have account?
                <span className="text-green-600">Only members can register </span>
            
          </h3>
        </form>
      </div>
    </FormikProvider>
  );
}
export default Login;
