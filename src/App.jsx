import TopNav from "./components/topNav";
import LeftNav from "./components/leftNav";
import Container from "./components/container";

function App() {
  return (

      <div className='w-full h-full text-center bg-black'>
        {/* navbar */}
        <TopNav></TopNav>
        {/* left nav */}
        <LeftNav></LeftNav>
        <Container></Container>
      </div>
  
  );
}

export default App
