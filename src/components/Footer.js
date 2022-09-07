// Footer
import react from "react";
import "../App.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark mt-auto footer">
        <footer class="text-center text-white">
          <div class="container pt-4">
            <section class="mb-4">
              <a
                class="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div class="text-center text-light p-3">
            © 2022 Copyright:
            <a class="text-light" href="#">
              {" "}
              crypto.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
