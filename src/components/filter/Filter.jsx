import { colorOptions, materialOptions } from "../utils/data";
import "./filter.css";

export const Filter = ({setFilter}) => {
    
  return (
      <div className="filter">
          <div className="filterOption">
              <h4>Filter Option</h4>
              <span>Clear All</span>
              <img src="/Frame 1000004557.png" alt="close" className="closePng" onClick={()=>setFilter(false)} />
          </div>
          <div className="filterWrapper">
              <div className="optionHeader">
                  <h4>Material</h4>
                  <img src="/Stroke 1.png" alt="up" />
              </div>
              <div className="materialBody">
                  {materialOptions.map((item) => (
                      <div className="material" key={item.id}>
                          <img src={item.status ?"/right.png":"false.png"} alt={item.name} />
                          <span>{item.name}</span>
                      </div>
                  ))}
              </div>
          </div>
          <div className="filterWrapper">
              <div className="optionHeader">
                  <h4>Colors</h4>
                  <img src="/Stroke 1.png" alt="up" />
              </div>
              <div className="colorBody">
                  {colorOptions.map((item) => (
                          <span style={{backgroundColor:item.color,outline:item.id===3 && "3px dashed #020202"}} key={item.id}></span>
                     
                  ))}
              </div>
          </div>
          <div className="filterWrapper">
              <div className="optionHeader">
                  <h4>Size</h4>
                  <img src="/Frame 1000004342.png" alt="down" />
              </div>
          </div>
          <div className="filterWrapper">
              <div className="optionHeader">
                  <h4>Price</h4>
                  <img src="/Stroke 1.png" alt="up" />
              </div>
              <div className="filterPrice">
                  <div className="priceSelect">
                      <div className="from">
                          <span>From</span>
                          <input type="text" value={"$224"}/>
                      </div>
                      <div className="to">
                          <span>To</span>
                          <input type="text" value={"$600"} />
                      </div>
                  </div>
                  <button className="priceApply">Apply</button>
              </div>
          </div>
                    <div className="filterResButton">
                        <button className="clearRes">Clear All</button>
                        <button className="apllyRes">Apply</button>
                    </div>
    </div>
  )
}
