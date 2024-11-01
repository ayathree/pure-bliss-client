import ParrisWeek from "../../components/home/ParrisWeek";


const MyAccount = () => {
    return (
        <div>
           <div className="m-28">
           <h1 className="uppercase text-6xl font-bold">Login</h1>
            <form >
                <p className="mt-8">Email address *</p>
            <input type="email" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
            <p className="mt-8">Password *</p>
            <input type="password" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" />
            <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 px-16 text-black rounded-none">Log In</button>

            </form>
            <p className="hover:underline cursor-pointer mt-8">Lost your password?</p>
           </div>
           <ParrisWeek></ParrisWeek>
        </div>
    );
};

export default MyAccount;