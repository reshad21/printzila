import Container from "../../Componets/ui/Container";
import Pagination from "../../Componets/ui/Pagination";
import Search from "../../Componets/ui/Search";
import UserTable from "../../Componets/ui/Usertable";

const Home = () => {
  return (
    <>
      <Container>
        <Search />
        <UserTable />
        <Pagination />
      </Container>
    </>
  );
};

export default Home;
