import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const classes = {
    inputRoot: {
      fontSize: 100,
    },
    labelRoot: {
      fontSize: 100,
      color: "red",
      "&$labelFocused": {
        color: "purple",
      },
    }
  };

const PaymentForm = () => {

  const navigate = useNavigate();
  const handleClick2 = () => {
      
    alert('SUccessful')

    navigate('/')
  }
  return (
   
    <React.Fragment >
       
            <div style={{marginBottom:'12px', marginLeft:'15px', height:'350px', paddingTop:'10%' , backgroundColor:'ButtonHighlight' , borderRadius:'5px' , width:'650px'}}>
            <Typography variant="h6" gutterBottom sx={{textAlign:'center' , fontSize:'2rem'}}>
            TO BOOK THIS ACTIVITY PAY : ${45}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container spacing={4} sx={{
                width: '60%',
                justifyContent: 'center', // Horizontally center the content
                alignItems: 'center',
                }}>
                <Grid item xs={12} md={6}> 
                <TextField
                    required
                    id="cardName"
                    label="Name on card"
                    fullWidth
                    autoComplete="cc-name"
                    variant="standard"
                    InputLabelProps={{classes:{root:classes.labelRoot}}}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="expDate"
                    label="Expiry date"
                    fullWidth
                    autoComplete="cc-exp"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                    variant="standard"
                />
                </Grid>
                
                <Grid item xs={12} md={6} sx= {{
                    display:'flex',
                    justifyContent: 'center',
                    
                }}>
            
                    <Button variant="contained" color="primary" onClick={handleClick2}> PAY</Button>
                </Grid>

                </Grid>
            
            </div>
            </div>

    </React.Fragment>
  );
}

export default PaymentForm;