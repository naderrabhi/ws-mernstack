import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../JS/actions/actionProducts/actionProducts';

const ProductsCard = ({product}) => {
    const dispatch = useDispatch()
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
      <CardActions>
        <Button size="small" onClick={()=> {dispatch(deleteProduct(product._id))}}>Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  )
}

export default ProductsCard