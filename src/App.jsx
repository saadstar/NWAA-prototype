import { useState } from 'react';
import './App.css';
import { Category } from './components/category/Category';
import { Filter } from './components/filter/Filter';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Footer } from './components/footer/Footer';


function App() {  
  const [filter, setFilter] = useState(false);
  
  return (
    <>
      {filter ? (
        <div className="showFilter">
          <Filter setFilter={ setFilter} />
     </div>
      ): (
          <div> 
     <Header setFilter={setFilter}/>
      <Category />
      <div className="container contentContainer">
        <div className="flexOne"><Filter  /></div>
        <div className="flexTwo"><Hero setFilter={setFilter} /></div>
            </div>
            <Footer/>
    </div>)
}
      </>
  )
}

export default App
