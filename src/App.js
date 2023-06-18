import Navbar from "./components/Navbar.js"
import Section from "./components/section.js"
import Card from "./components/card.js"
import data from "./data.js"
import './App.css';

function App() {

  const cards = data.map(item => {
    return(
      <Card
       key = {item.id}
      {...item} />

    )
  })
  return (
   <>
   <Navbar />
   <Section />
   <section className="cardlist">{cards}</section>
   </>
  );
}

export default App;
