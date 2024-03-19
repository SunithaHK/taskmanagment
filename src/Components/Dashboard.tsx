import { Card, CardMedia } from "@mui/material";

function Dashboard(){
const imageStyle = {
  outline: '2px solid blue', // Example outline style
  marginLeft: '2px', // Example margin-left style
};

return (
  <>
    <h1>Dashboard</h1>
    <img src='images/Stock Photos (81).webp' style={imageStyle}></img>

    {/* <Card>
      <CardMedia
        component='img'
        height='100%'
        image='images/images.jpg'
        alt='Image Alt Text'
      />
    </Card> */}
  </>
);
}
export default Dashboard; 