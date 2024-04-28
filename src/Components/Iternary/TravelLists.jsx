import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './TravelLists.css'
import Button from '@mui/material/Button';
import {  brown } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'
import { useSelector } from "react-redux";

const ItineraryList = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/getPlaces', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Failed to get data');
                }

                const data = await response.json();
                setPlaces(data.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    const handleClick1 = () => {
        if (isAuthenticated) {
            navigate('/Activities');
        } else {
            navigate('/SignIn');
        }
    };

    const handleClick = () => {
        if (isAuthenticated) {
            navigate('/AddressForm');
        } else {
            navigate('/SignIn');
        }
    };

    return (
        <div className="itinerary-list-container">
            {error && <div>Error: {error}</div>}
            {places.map((item, index) => (
                <Card key={index} className="itinerary-card">
                    <Card key={item.name}>
                        <Button onClick={handleClick1}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={item.imageUrl}
                                alt="Paella dish"
                            />
                        </Button>
                        <CardHeader
                            title={item.name}
                        />
                        <CardContent>
                            <div className="passenger">
                                <div className="capacity" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography variant="body2" style={{ fontSize: '14px', fontWeight: 530, color: 'whitesmoke', padding: '5px' }}>
                                        CAPACITY: {item.capacity}
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '14px', fontWeight: 530, color: 'whitesmoke', padding: '5px' }}>
                                        PRICE: ${item.price}
                                    </Typography>
                                </div>

                                <div className="BookNow">
                                    <div className="temp" style={{ color: 'black', backgroundColor: brown }}>AVAILABLE : 5</div>
                                    <Button variant="contained" style={{ fontSize: '14px' }} onClick={handleClick}>Book Now</Button>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </Card>
            ))}
            <Footer />
        </div>
    );
};

export default ItineraryList;
