import Card from "../modules/Card";
import Styles from "./menupage.module.css"

const menupage = ({data}) => {
  return (
    <div className={Styles.container}>
        <h2>Menu</h2>
        <div className={Styles.subContainer}>
        {data.map(food=> <Card key={food.id} {...food} />)}
        </div>
    </div>
  )
}

export default menupage