import { categoriesData } from "../utils/data";
import "./category.css";


export const Category = () => {
  return (
      <div className="container category">
          <div className="route">
              <h6>Home / All Categories / </h6> <span>Bags</span>
          </div>
          <div className="categoryList">
              {categoriesData.map((item) => (
                  <div className="categoryCard" key={item.id}>
                      <div className="imageContainer">
                          <img src={item.image} alt={item.name} className="categoryImg" />
                      </div>
                          <h5>{ item.name}</h5>
                  </div>
              ))}
          </div>
          <div className="categoryPagenation">
              <button className="buttonPage"><img src="/mingcute_up-line.png" alt=">" /></button>
              <button className="buttonPage secButton"><img src="/mingcute_up-line (1).png" alt=">" /></button>              
          </div>
    </div>
  )
}
