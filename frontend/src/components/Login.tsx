import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackgroundWrapper from './BackgroundWrapper';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', { username, password });
            if (response.status === 200 && response.data) {
                localStorage.setItem('token', response.data);
                setMessage('Login successful');
                navigate('/quizzes');
            } else {
                setMessage('Login failed');
            }
        } catch (error: any) {
            setMessage('Login failed');
        }
    };

    return (
        <BackgroundWrapper>
            <Box
                sx={{
                    width: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
                {message && <Alert severity="info" sx={{ mt: 2 }}>{message}</Alert>}
            </Box>
        </BackgroundWrapper>
    );
};

export default Login;
