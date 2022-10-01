import { useCallback, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

// function for understanding useMemo
const sleep = (milliseconds) => {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
};

// any variable, React re-initicalize it every single time

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate(); // navigate's reference is never changed so technically you don't need to add it to the dependency array

  // state for understanding useCallback
  const [temp, setTemp] = useState("A");

  // ----- start logic for understanding useMemo -------
  const [count, setCount] = useState(0);

  const hundredCount = useMemo(() => {
    console.log("start");
    sleep(2000);
    console.log("end");
    return 100 + count;
  }, [count]);

  // ----- end logic for understanding useMemo -------

  // useCallback(callback you want to memorize, [dependency array] )
  const goToCheckoutHandler = useCallback(() => {
    console.log(temp);
    navigate("/checkout");
  }, [temp]);

  return (
    <CartDropContainer>
      <CartItems>
        {hundredCount}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      <Button onClick={() => setTemp("B")}>Update</Button>
      <Button onClick={() => setCount(count + 1)}>Count</Button>
    </CartDropContainer>
  );
};

export default CartDropdown;
