import React from "react";

const ListGroup = props => {
    const {
        items,
        textProperty,
        valueProperty,
        selectedItem,
        onSelectItem
      } = props;
 console.log("items got :", items);
 return (
   <>
     <ul className="list-group">
       {items.map(item => (
         <li
         key={item[valueProperty]}
           className={
             item.name === selectedItem.name
               ? "list-group-item active"
               : "list-group-item "
           }
           onClick={() => onSelectItem(item)}
         >
           {item[textProperty]}
         </li>
       ))}
     </ul>
   </>
 );
};
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
   };
   
export default ListGroup;