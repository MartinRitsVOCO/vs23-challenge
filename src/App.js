import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

//Reducer istub context's. Pole mõtet App.js'i reostada.

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
};

export default App;
