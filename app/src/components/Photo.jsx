import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function Photo({ photo, deletePhoto }) {

    const { Id, Title, Description, Content } = photo;
    console.log(photo);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={Content}
                title={Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Title} - Description: {Description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deletePhoto(Id)}><DeleteIcon fontSize="large" />Delete</Button>
                {/* <Link className="edit--link" to={`/editPhoto/${Photo.Id}`}>
                    <Button size="small"><EditIcon fontSize="large" color="inherit" />Edit</Button>
                </Link> */}
            </CardActions>
            <CardActions>
                {/* <Link className="edit--link" to={`/photos/${Photo.Id}`}>
                    <Button size="small">More info</Button>
                </Link> */}
            </CardActions>
        </Card>
    )
}

export default Photo
