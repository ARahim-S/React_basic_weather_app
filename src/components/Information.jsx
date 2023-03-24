import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import antalya from "../assets/antalya.jpg";

export default function Information({ result }) {
  return result && Object.keys(result).length > 0 ? (
    <Card sx={{ maxWidth: "75%" }}>
      <CardMedia
        component="img"
        height="140"
        image={antalya}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Location: {result.name}, {result.sys.country}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Temperature: {result.main.temp}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Humidity: {result.main.humidity}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Sunrise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Sunset: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
        </Typography>{" "}
        <Typography gutterBottom variant="body2" component="div">
          Humidity: {result.weather[0].main}
        </Typography>{" "}
      </CardContent>
    </Card>
  ) : (
    <p>Please insert a city name</p>
  );
}
