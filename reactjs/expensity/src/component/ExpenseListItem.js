
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({ description, createAt, amount, id }) => {
  return (
    <>
      <Link to={`edit/${id}`} >
        <h3>{description}</h3>
      </Link>
      <p>{amount}$ - {moment(createAt).format('LL')}</p>
    </>
  )
}
export default ExpenseListItem;