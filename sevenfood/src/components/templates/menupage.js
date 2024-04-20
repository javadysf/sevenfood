import Styles from "./menupage.module.css"

const menupage = ({data}) => {
    console.log(data);
  return (
    <div className={Styles.container}>
        <h2>Menu</h2>
        <div className={Styles.subContainer}>
        {data.map(food=> <p key={food.id}>{food.name}</p>)}
        </div>
    </div>
  )
}

export default menupage