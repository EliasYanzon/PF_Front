import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addRestoForm } from "../../redux/actions/formActions";
import { agregarHotel } from "../../redux/actions/carritoActions";


export default function Actividades(props) {
  const { id, name, location, img, price, description, comments} =
    props.restaurants;
  const toForm = useSelector((state) => state.form.toForm);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    if (toForm) {
      dispatch(addRestoForm(props.restaurants));
      alert("se agrego con exito");
    } else {
      dispatch(agregarHotel(props.restaurants))
      alert("Se agrego el restaurant al carrito.")
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id} href={`/restaurant/byId/${id}`}>
        <CardMedia component="img" alt="restaurant" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>{price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid display="flex" justify-content="space-between" align-items="center">
        <CardActions>
          <Button variant="outlined" onClick={handleClick}>
            {toForm? "Agregar al paquete" : "Agregar al carrito"}
          </Button>
        </CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Grid>
    </Card>
  );
}