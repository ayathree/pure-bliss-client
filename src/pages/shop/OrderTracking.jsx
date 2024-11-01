import ParrisWeek from "../../components/home/ParrisWeek";


const OrderTracking = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:m-28">
                {/* section 1 */}
            <div className=" p-5">
           <h1 className="uppercase text-5xl font-bold">Track your order</h1>
           <p className="mt-8">To track your order please enter your Order ID in the  box below <br /> and press the "Track" button.This was given to  you on your <br /> receipt  and in the confirmation  email you should have received.</p>
            <form >
                <p className="mt-8 font-bold text-xl uppercase">Order ID</p>
            <input type="email" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Found in your order confirmation email" />
            <p className="mt-8 font-bold text-xl uppercase">Billing email</p>
            <input type="password" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Email you used during checkout" />
            <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 px-16 text-black rounded-none">Track</button>

            </form>
           
           </div>
           {/* section 2 */}
                <div>
                    <img src="https://parris.qodeinteractive.com/wp-content/uploads/2021/02/track-order-test-img-01.jpg" alt="" />
                </div>
            </div>

            <ParrisWeek></ParrisWeek>
            
        </div>
    );
};

export default OrderTracking;