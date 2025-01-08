import { Link } from "react-router-dom";
import Container from "../../ui/Container";

const Navber = () => {
  return (
    <>
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link to="/"> PrintManzil</Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-white text-lg font-medium">
            <li className="hover:underline hover:scale-105 transition-transform">
              <Link to="/">Tusk One</Link>
            </li>
            <li className="hover:underline hover:scale-105 transition-transform">
              <Link to="/tusk-two">Tusk Two</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Navber;
