import { Link } from "react-router-dom";
import Container from "../../ui/Container";

const Navber = () => {
  return (
    <>
      <Container>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Tusk One</Link>
          </li>
          <li>
            <Link to="/tusk-two">Tusk Two</Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Navber;
