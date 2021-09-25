import "./Cart.css";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-nav">
                <p className="iconForward"><IoIosArrowRoundForward/></p>
                <p>Your Cart</p>
                <div className="cart-icon">
                    <p className="iconCart"><FiShoppingCart/></p>
                    <p>Cart</p>
                </div>
            </div>
            <div className="cart-body">

            </div>
        </div>
    )
}

export default Cart;