import { Link, useLocation, useNavigate } from "react-router-dom";
import ParrisWeek from "../../components/home/ParrisWeek";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const MyAccount = () => {
    const {signIn, updateUser} =useContext(AuthContext)
    const navigate = useNavigate();
  const location =useLocation();
  const [success, setSuccess]= useState('');
  const[errors, setErrors]= useState('')

  const handleLogIn=e=>{
    e.preventDefault();
    const form= e.target;
    const email= form.email.value;
    const password = form.password.value;
    const newLogger= {email, password}
    console.log(newLogger)

    setErrors('')
    setSuccess('')

    signIn(email, password)
    .then(result=>{
      console.log(result.user)
      setSuccess('User logged successfully')
      Swal.fire({
           
        text: 'successfully logged in',
        icon: 'success',
        confirmButtonText: 'Ok'
      }, success)
      form.reset();
      navigate(location?.state? location.state:'/');
    })
    .catch(error=>{
      console.log(error.message)
      setErrors(error.message)
      Swal.fire({
           
        text: 'An error occurred',
        icon: 'error',
        confirmButtonText: 'Ok'
      }, errors)
    })
}
    return (
        <div>
            <Helmet>
                <title>Shop | My Account</title>
            </Helmet>
           <div className="lg:m-28 p-5">
           <h1 className="uppercase text-6xl font-bold">Login</h1>
            <form onSubmit={handleLogIn} >
                <p className="mt-8">Email address *</p>
            <input type="email" name="email" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
            <p className="mt-8">Password *</p>
            <input type="password" name="password" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
            <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 px-16 text-black rounded-none">Log In</button>

            </form>
           <Link to={'/register'}> <p className="hover:underline cursor-pointer mt-8">Do not have an account?</p></Link>
            <p className="hover:underline cursor-pointer mt-8">Lost your password?</p>
           </div>
           <ParrisWeek></ParrisWeek>
        </div>
    );
};

export default MyAccount;