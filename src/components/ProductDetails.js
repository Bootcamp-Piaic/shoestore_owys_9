import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import MyContext from '../Context/MyContext'

export const ProductDetails = () => {
 
    const  shoes  = useContext(MyContext);

    const { productID } = useParams();

    const { name, image } = shoes[productID]

    return (
        <div>
            <h1>Product Name {name}</h1>
            <img src={image} alt={name}></img>
        </div>
    )
}
