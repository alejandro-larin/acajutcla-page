import { runClass } from "./modules/runClass.js";

const images = document.querySelectorAll("main .carousel .image-container");
const className = "col-12 col-lg-5 image border mb-lg-0 image";

images.forEach((imageContainer) => {
  runClass(className, imageContainer);
});
