
const Test0 = (props) => {
  console.log(props)
  return (
    <div>
      <h1>test</h1>
      <p hello="Hello">"just testing"</p>
    </div>
  )
}
const HigerOrderCompenent = (WrappedCompenent) => {
  return (props) => (
    <>
      {props.info ? (<WrappedCompenent {...props} />) :
        (<p>please login</p>)}
    </>
  )
}

const Test = HigerOrderCompenent(Test0)

export default Test;