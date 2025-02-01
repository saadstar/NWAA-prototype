import "./category.css";
import Swipper from "../swipper/swipper";


export const Category = () => {
  return (
      <div className="container category">
          <div className="route">
              <h6>Home / All Categories / </h6> <span>Bags</span>
          </div>
                    <Swipper/>
    </div>
  )
}
