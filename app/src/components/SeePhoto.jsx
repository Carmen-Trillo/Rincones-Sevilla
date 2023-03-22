import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductHandler from '../Handler/ProductHandler';
import { Link } from 'react-router-dom';
import StockCounter from '../components/StockCounter'
import './DetailView.css'
import '../../src/index.css'
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function DetailedView() {
  const {id} = useParams();
  const [photo, setPhoto] = useState([null])

  useEffect(() => {
    async function fetchPhoto() {
      const photoData = await PhotoHandler.loadPhoto(id);
      setPhoto(photoData);
    }
    fetchPhoto();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }
  
  const { title, description, content }= photo;
}