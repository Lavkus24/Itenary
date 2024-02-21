import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '../../list.json';
import './TravelLists.css'
import Button from '@mui/material/Button';
import {  brown } from "@mui/material/colors";
import {useNavigate } from "react-router-dom";

const ItineraryList = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/AddressForm');
    }
    const handleClick1 = () => {

        return('/Activities');
        
    }
    return (
        <div className="itinerary-list-container">
            {List.map((item , index) => (
            <Card key={index} className="itinerary-card">
                <Card key={item.name}>
                    <a href='/Activities' onClick={handleClick1}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt="Paella dish"
                    />
                    </a>
                    <CardHeader
                        title={item.name}
                    />
                    <CardContent>
                        <div className="passenger">  
                        <div className="capacity" style={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="body2" style={{ fontSize: '14px',fontWeight: 530, color: 'whitesmoke', padding: '5px' }}>
                                CAPACITY: {item.passenger_capacity}
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '14px',  fontWeight: 530 , color: 'whitesmoke', padding: '5px' }}>
                                PRICE: ${item.price}
                            </Typography>
                        </div>

                            <div className="BookNow">
                            <div className="temp" style={{color : 'black' ,backgroundColor: brown}}>AVAILABLE : 5</div>
                            <Button variant="contained" style={{ fontSize: '14px' }} onClick={handleClick}>Book Now</Button>
                            </div>
                        </div>
                                
                    </CardContent>
                    
                </Card>
            </Card>
            ))}
        </div>
    );
}

export default ItineraryList;
