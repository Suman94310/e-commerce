import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// importing css
import "./card.css"

function card({id,name,price,rating,image}) {
    return (
        <Card id={id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={image}
                    title={name}
                />
                <CardContent className="card-text">
                    <Typography variant="body2" component="p">
                        {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <b>$ {price}</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="card-buttonContainer">
                <Button size="small" color="primary" className="card-button">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default card
