import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackgroundWrapper from './BackgroundWrapper';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setMessage('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long, contain one uppercase letter and one digit');
            setMessage('');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/register', { username, password });
            setMessage('Registration successful');
            setError('');
            navigate('/login');
        } catch (error: any) {
            console.error("Error during registration:", error);
            if (error.response) {
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
                setError(error.response.data || 'An error occurred. Please try again.');
            } else {
                setError('An error occurred. Please try again.');
            }
            setMessage('');
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
                    Register
                </Typography>
                <form onSubmit={handleRegister}>
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
                {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            </Box>
        </BackgroundWrapper>
    );
};

export default Register;
