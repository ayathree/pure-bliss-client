import ParrisWeek from "../../components/home/ParrisWeek";


const Cart = () => {
    return (
        <div>
            <h1 className="text-xl font-bold text-center mt-28">Your cart is currently empty.</h1>
            <div className="flex justify-center">
            <button className="btn btn-outline mt-10 hover:bg-black font-semibold uppercase  px-16 text-black rounded-none">Return to shop</button>
            </div>
            <ParrisWeek></ParrisWeek>
            
        </div>
    );
};

export default Cart;