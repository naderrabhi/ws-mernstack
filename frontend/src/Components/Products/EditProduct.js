import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, getOneProduct, postProduct } from '../../JS/actions/actionProducts/actionProducts';
import { useNavigate, useParams } from 'react-router-dom';

const theme = createTheme();

const EditProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productsReducer.oneProduct)
    const [updatedProduct, setUpdatedProduct] = useState(product)
    
    useEffect(() => {
      dispatch(getOneProduct(id))  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    useEffect(() => {
      setUpdatedProduct(product)  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(editProduct(id,updatedProduct,navigate));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            edit product
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  // label="title"
                  autoFocus
                  value={updatedProduct.title}
                  onChange={e=> {setUpdatedProduct({...updatedProduct, title : e.target.value})}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  // label="price"
                  name="price"
                  onChange={e=> {setUpdatedProduct({...updatedProduct, price : e.target.value})}}
                  value={updatedProduct.price}
                  type="number"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  // label="description"
                  onChange={e=> {setUpdatedProduct({...updatedProduct, description : e.target.value})}}
                  value={updatedProduct.description}
                  name="description"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SAVE
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EditProduct