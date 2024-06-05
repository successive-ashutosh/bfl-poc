import { createSignal, onCleanup, createEffect } from "solid-js";

const Carousel = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = createSignal(0);

  createEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex() + 1) % images.length);
    }, 3000);

    onCleanup(() => {
      clearInterval(intervalId);
    });
  });

  return (
    <img src={images[currentImageIndex()]} alt="carousel" style={{ width: "100%", height: "auto" }} />
  );
};

export default Carousel;
