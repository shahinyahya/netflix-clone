import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/Rowpost";
import {
  originals,
  comedy,
  action,
  romance,
  documentary,
  horror,
} from "./urls";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Orignals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
    </>
  );
}

export default App;
