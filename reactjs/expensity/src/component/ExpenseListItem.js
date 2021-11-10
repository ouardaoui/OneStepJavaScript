const ExpenseListItem = ({ description, createAt, amount }) => {
  return (
    <>
      <h3>{description}</h3>
      <p>{amount} - {createAt}</p>
    </>
  )
}
export default ExpenseListItem;