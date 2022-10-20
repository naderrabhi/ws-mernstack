import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../JS/actions/actionProducts/actionProducts'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productsReducer.oneProduct)

    useEffect(() => {
        dispatch(getOneProduct(id))  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <Card className='product--card' sx={{ maxWidth:  345}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" onClick={()=> {dispatch(deleteProduct(product._id))}}>Delete</Button>
        <Button size="small">Edit</Button>
        <Link to={`${product._id}`}><Button size="small">View detail</Button></Link>
      </CardActions> */}
    </Card>
  )
}

export default ProductDetails