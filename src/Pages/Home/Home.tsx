import Container from "../../Componets/ui/Container";
import Pagination from "../../Componets/ui/Pagination";
import Search from "../../Componets/ui/Search";
import UserTable from "../../Componets/ui/Usertable";
import { useMyContext } from "../../Context/MyContextProvider";

const Home = () => {
  const { data, isLoading } = useMyContext();
  if (isLoading) {
    return <p>Loading data ...</p>;
  }
  return (
    <>
      <Container>
        <h1>Total data : {data?.total}</h1>
        <Search />
        <UserTable />
        <Pagination />
      </Container>
    </>
  );
};

export default Home;
