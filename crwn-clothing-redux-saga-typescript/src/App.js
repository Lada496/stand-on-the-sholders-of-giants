import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Chackout from "./components/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="checkout" element={<Chackout />} />
      </Route>
    </Routes>
  );
};

export default App;