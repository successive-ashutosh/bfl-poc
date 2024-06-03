import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function App() {
  const [cart, setCart] = createSignal([]);
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
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
        <h1>Retail Website - Rich</h1>
      </header>
      <main>
        <section>
          <div className="carousel">
            <img loading="lazy" src="https://via.placeholder.com/600x300" alt="Carousel 1" />
            <img loading="lazy" src="https://via.placeholder.com/600x300" alt="Carousel 2" />
            <img loading="lazy" src="https://via.placeholder.com/600x300" alt="Carousel 3" />
          </div>
        </section>
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
          <div className="video-container">
            <h2>Promotional Video</h2>
            <video controls width="600">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              <track kind="captions" srcLang="en" src="captions.vtt" label="English" />
              Your browser does not support HTML video.
            </video>
          </div>
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
