import { Box, Card, Typography } from "@mui/material";
import ApiService from "../services/api-axios-service";
import { useEffect, useState } from "react";

interface userData{
    name:string;
    country:string
}


function Users(){
  const [user, setUser] = useState<userData[]>([]);
    const getUser =()=>{
        ApiService().get("/getUser").subscribe((res)=>{
        setUser(res.data);
        })
    }
     useEffect(()=>{getUser()},[])
      console.log(user,"user");
    return (
      <>
        <Box>
          {user.map((data, index) => (
            <>
              <Card key={index} sx={{margin:2,boxShadow:'gray',padding:2}}>
                <Typography>{data.country}</Typography>
                <Typography>{data.name}</Typography>
              </Card>
            </>
          ))}
        </Box>
      </>
    );
}
export default Users;