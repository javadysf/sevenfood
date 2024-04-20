import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Companies from "../modules/Companies"
import Definition from "../modules/Definition"
import Guide from "../modules/Guide"
import Instruction from "../modules/Instruction"
import Restrictions from "../modules/Restrictions"
import Styles from "./homepage.module.css"

const homepage = () => {
  return (
   <div className={Styles.container}>
   <Banner/>
   <Attributes/>
   <Definition/>
   <Companies/>
   <Instruction/>
   <Guide/>
   <Restrictions/>
   </div>
  )
}

export default homepage