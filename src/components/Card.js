import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
export default function Cards({item}) {
  const navigate = useNavigate()
  const handleNavigation = () =>{
    navigate(`/product-info/${item.id}`)
  }
  return (
    <>
   
        
            <div className='grid '>
            <Card>
            <img src={item.imgUrl} className='w-[10rem] h-[15rem] ' />
            
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography className='line-through' variant="body2" color="text.secondary">
               {item.oprice}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {item.price}
              </Typography>
            
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" onClick={handleNavigation}>Click to Buy </Button>
            </CardActions>
          </Card>
            </div>
   
</>
  );
  }