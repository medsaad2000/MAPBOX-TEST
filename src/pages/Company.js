import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';


export default function Company(props) {
  const [company, setCompany] = React.useState(null);
  const { id } = useParams() 
  React.useEffect(() => {
    axios.get(`http://localhost:1337/api/companies/${id}?populate=openingTimes,pictures`).then((response) => {
      setCompany(response.data.data);
      console.log(response.data.data);
    });
  }, [id]);

  if (!company) return null;

  return (

<div class="card">
  
<Helmet>
        <title>Livecity | API</title>
      </Helmet>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {company.pictures !== null ? 'http://localhost:1337' +company.attributes.pictures.data[0].attributes.formats.small.url : "..."}
          alt={company.pictures !== null ? 'http://localhost:1337' +company.attributes.pictures.data[0].attributes.alternativeText : "..."}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {company.attributes.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {company.attributes.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          Website
        </Button>
      </CardActions>
    </Card>

    </div>
/*
    < div >
      <Helmet>
        <title>Livecity | API</title>
      </Helmet>
      
      <table id="companies">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Website</th>
          <th>Open at</th>
        </tr>


            <tr>
              <td>{company.attributes.name}</td>
              <td>{company.attributes.email}</td>
              <td>{company.attributes.website}</td>
              <td>{company.attributes.openingTimes[0].openingHour}</td>
            </tr>
         
        

      </table>
    </div>
   
    //}
    */
  );
}