import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Box, Button, Typography, List, ListItem, ListItemText, CircularProgress, Alert, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import BackgroundWrapper from './BackgroundWrapper';

const QuizList: React.FC = () => {
    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/quizzes', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setQuizzes(response.data);
                setLoading(false);
            } catch (error: any) {
                setError('Failed to fetch quizzes');
                setLoading(false);
            }
        };
        fetchQuizzes();
    }, []);

    const handleCreateQuiz = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/quizzes', { title, description }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage('Quiz created successfully');
            setTitle('');
            setDescription('');
            setQuizzes([...quizzes, response.data]); // Add new quiz to the list
        } catch (error: any) {
            setMessage('Error creating quiz');
        }
    };

    return (
        <BackgroundWrapper>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '80%',
                    margin: 'auto',
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        padding: 2,
                    }}
                >
                    <Typography variant="h4" component="h2" gutterBottom>
                        My Quizzes
                    </Typography>
                    {loading ? (
                        <CircularProgress />
                    ) : error ? (
                        <Alert severity="error">{error}</Alert>
                    ) : (
                        <List>
                            {quizzes.map(quiz => (
                                <ListItem key={quiz.id}>
                                    <ListItemText primary={quiz.title} secondary={quiz.description} />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
                <Box
                    sx={{
                        width: '50%',
                        padding: 2,
                    }}
                >
                    <Typography variant="h4" component="h2" gutterBottom>
                        Create New Quiz
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
            </Box>
        </BackgroundWrapper>
    );
};

export default QuizList;
