import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import BackgroundWrapper from './BackgroundWrapper';

const CreateQuiz: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleCreateQuiz = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/quizzes', { title, description });
            setMessage('Quiz created successfully');
        } catch (error: any) {
            setMessage('Error creating quiz');
        }
    };

    return (
        <BackgroundWrapper>
            <Box
                sx={{
                    width: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Create Quiz
                </Typography>
                <form onSubmit={handleCreateQuiz}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        required
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={description}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Create
                    </Button>
                </form>
                {message && <Alert severity="info" sx={{ mt: 2 }}>{message}</Alert>}
            </Box>
        </BackgroundWrapper>
    );
};

export default CreateQuiz;
