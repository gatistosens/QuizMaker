import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackgroundWrapper from './BackgroundWrapper';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <BackgroundWrapper>
            <Box>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Quiz Maker
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Create and manage quizzes easily
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/register')}
                    sx={{ mt: 2 }}
                >
                    Get Started
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => navigate('/login')}
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </Box>
        </BackgroundWrapper>
    );
};

export default LandingPage;
