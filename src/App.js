import Navbar from "./components/Navbar.js"
import Section from "./components/section.js"
import Card from "./components/card.js"
import data from "./data.js"
// eslint-disable-next-line no-unused-vars
import Imagelinks from "./components/imagelinks.js"



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
   <Imagelinks/>
   <Section />
   <section className="cardlist">{cards}</section>
   </>
  );
}

export default App;
