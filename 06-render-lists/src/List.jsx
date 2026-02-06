import PropTypes from 'prop-types'

function List({items=[],category='Category'}){

    const itemsList = items.map(item=><li key={item.id}> {item.name} : &nbsp; {item.quantity} </li>)
    return (
        <>
        <h1 className="category">{category}</h1>
        <ol className="list"> {itemsList} </ol>
        </>
        
    );
}

List.propTypes = {
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,quantity:PropTypes.string}))
}

export default List