import Container from "../../Componets/ui/Container";
import UserTable from "../../Componets/ui/Usertable";
import { useMyContext } from "../../Context/MyContextProvider";

const Home = () => {
  const { sharedState, setSharedState, data, isLoading } = useMyContext();
  if (isLoading) {
    return <p>Loading data ...</p>;
  }
  console.log("api data==>", data);
  return (
    <>
      <Container>
        <h1>Total data : {data?.total}</h1>
        <h1>Shared State: {sharedState}</h1>
        <button onClick={() => setSharedState("Updated from Home!")}>
          Update State
        </button>
        <UserTable users={data.data} />
      </Container>
    </>
  );
};

export default Home;
