// function List(){
//     const Fruits = ['Apple','Coconut','Banana'];
//     Fruits.sort()
//     const listItems = Fruits.map(fruit=> <li> {fruit}</li>)
//     return (
//         <ol>{listItems}</ol>
//     );
// }
// export default List

import PropTypes from 'prop-types';

function List(props){
    
    const itemsList = props.items;
    const category = props.category;

    const listItems = itemsList.map(item=> <li key={item.id}> 
                                         {item.name} : &nbsp;
                                         <b>{item.calories}</b></li>)

    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
       
    );
}
List.propTypes = {
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            calories:PropTypes.number
    }))
}
List.defaultProps = {
    category:"Category",
    items:[]
}


export default List