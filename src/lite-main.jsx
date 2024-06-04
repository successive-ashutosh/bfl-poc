import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function App() {
  const [cart, setCart] = createSignal([]);
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];

  const addToCart = (product) => {
    setCart([...cart(), product]);
  };

  const removeFromCart = (product) => {
    setCart(cart().filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <header>
        <h1>Retail Website - Lite</h1>
      </header>
      <main>
        <section>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Shopping Cart</h2>
          <ul>
            {cart().map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

render(() => <App />, document.getElementById("app"));
