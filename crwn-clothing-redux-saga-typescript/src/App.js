import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";
import { checkUserSession } from "./store/user/user.action";
// when we come to the application for the first time, we are downlloading the entire bundle of our application which is inefficient
// by code splitting, we tell React and webpack to split up our bundle into the appropriate quantities
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Chackout = lazy(() => import("./components/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const SignIn = lazy(() =>
  import("./routes/authentication/authentication.component")
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Suspense fallback={Spinner}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<SignIn />} />
          <Route path="checkout" element={<Chackout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
