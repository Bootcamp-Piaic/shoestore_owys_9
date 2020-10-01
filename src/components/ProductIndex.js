import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import MyContext from '../Context/MyContext';
export const ProductIndex = () => {
   
    const shoes  = useContext(MyContext);

    return (
        <div>
             <ul>
                {Object.entries(shoes).map(([product_NAME, { name, image }]) => (
                    <li key={product_NAME}>
                        <Link to={product_NAME}>
                        <h2>{name}</h2>
                        <img src={image} alt={name}></img>
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
