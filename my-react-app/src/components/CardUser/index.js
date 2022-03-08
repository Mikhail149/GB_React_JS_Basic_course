import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const CardUser = ({firstName, lastName, avatar, email, id}) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          image= {avatar}
          alt={`Avatar ${lastName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}