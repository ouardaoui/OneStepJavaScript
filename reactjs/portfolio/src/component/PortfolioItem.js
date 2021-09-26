
const PortfolioItem = (props) => {

    return ( 
        <div>
            <p>This page if for the item with id of :{props.match.params.id}</p>
        </div>
     );
}
 
export default PortfolioItem;