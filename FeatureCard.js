import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  root: {
    width: '300px', // Increased width
    padding: '20px', // Added padding
    borderRadius: '15px', // Rounded corners
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Shadow effect
    transition: 'transform 0.3s, box-shadow 0.3s', // Transition for hovering effect
    '&:hover': {
      transform: 'scale(1.05)', // Slightly enlarges the card on hover
      boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
    },
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Gradient blue background
    color: 'black', // Text color for better contrast
  },
  title: {
    fontSize: 18, // Larger font size
    fontWeight: 'bold', // Bold font
    fontFamily: 'Arial, sans-serif', // Stylish font family
  },
  description: {
    fontSize: 16, // Larger font size for description
    fontFamily: 'Arial, sans-serif',
    marginTop: '10px',
  },
});

function FeatureCard(props) {
  const classes = useStyles();  
  const { title, description, icon, onClick } = props; // Destructure onClick prop
  
  return (
    <ButtonBase onClick={onClick} style={{ borderRadius: '15px', display: 'block' }}> {/* Makes the entire card clickable */}
      <Card className={classes.root}>
        <CardContent>
          {icon}
          <Typography variant="h6" component="h2" className={classes.title}>
            &nbsp;&nbsp;{title}
          </Typography>
          <Typography variant="body2" component="p" className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default FeatureCard;
