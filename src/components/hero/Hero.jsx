import { card } from "../utils/data";
import "./hero.css";

export const Hero = ({setFilter}) => {
  return (
      <div className=" hero">         
          <div className="heroHeader">
              <span>Showing 1-15 of 214 results</span>
              <img src="/filter.png"
                  alt="filterlogo"
                  className="filterLogo"
                  onClick={() => setFilter(true)} />
          </div>
          <div className="cardList">
              {card.map((item) => (
                  <div className="card" key={item.id}>                      
                      <div className="cardImage">
                          <img src={item.image} alt={item.name} style={{backgroundColor:item.id === 1 | item.id===4 && "#E8EDF2"}} className="mainImg" />                          
                         {item.id === 1 | item.id===4 ? <button className="cardButton">
                              <span>Add to Cart</span>
                              <img src="/cartWhite.png" alt="cartlogo" />
                          </button>:null
                          }
                         {item?.off && <button className="off">{ item?.off}</button>}
                      </div>
                      <div className="cardContent">
                              <img src={item.stars} alt="stars" />
                              <span className="rate">4.5</span>
                              <span className="percentage">{'(2910)'}</span>                          
                      </div>
                      <div className="cardTitle">
                          MD STAY FIT Unisex Duffle Bag<br/> Microfiber MD-1250
                      </div>
                      <div className="description">
                          Grab attention and drive sales with eye-catching outdoor signage. Choose from a 
                      </div>
                      <div className="cardPrice">
                          <p>$260</p>
                          <span className="oldPrice">{item?.old}</span>
                      </div>
                  </div>
              ))}
          </div>
          <div className="heroPagenation"><img src="/Pagination (V1).png" alt="pagenation" /></div>
      </div>
  )
}
