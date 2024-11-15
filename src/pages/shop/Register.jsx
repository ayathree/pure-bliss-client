import { Link, useLocation, useNavigate } from "react-router-dom";
import ParrisWeek from "../../components/home/ParrisWeek";
import { Helmet } from "react-helmet";
// import useAuth from "../../hooks/useAuth";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createUser, logOut, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [errors, setErrors] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                console.log("User created:", result.user);
                updateUser(name)
                    .then(() => {
                        console.log("Profile updated with display name:", name);
                        setRegisterSuccess('User Created Successfully');
                        Swal.fire({
                            text: 'Successfully Registered',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        });
                        logOut();
                        form.reset();

                        // Wait a short time to ensure currentUser is set, then navigate
                        setTimeout(() => {
                            navigate(location?.state || '/');
                        }, 500); // Adjust delay as needed
                    })
                    .catch((error) => console.log("Error updating profile:", error));
            })
            .catch((error) => {
                console.log("Error creating user:", error);
                setErrors(error.message);
                Swal.fire({
                    text: 'User email already in use',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                });
            });
    };

    return (
        <div>
            <Helmet>
                <title>Shop | Sign Up</title>
            </Helmet>
            <div className="lg:m-28 p-5">
                <h1 className="uppercase text-6xl font-bold">Sign Up</h1>
                <form onSubmit={handleRegister}>
                    <p className="mt-8">Email address *</p>
                    <input type="email" name="email" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
                    <p className="mt-8">Name *</p>
                    <input type="text" name="name" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
                    <p className="mt-8">Password *</p>
                    <input type="password" name="password" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
                    <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 px-16 text-black rounded-none">Sign Up</button>
                </form>
                <Link to={'/myAccount'}>
                    <p className="hover:underline cursor-pointer mt-8">Already have an account?</p>
                </Link>
            </div>
            <ParrisWeek></ParrisWeek>
        </div>
    );
};

export default Register;
