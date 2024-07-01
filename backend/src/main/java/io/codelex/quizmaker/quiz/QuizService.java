package io.codelex.quizmaker.quiz;

import io.codelex.quizmaker.domain.Quiz;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuizById(UUID id) {
        return quizRepository.findById(id);
    }

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz updateQuiz(UUID id, Quiz quiz) {
        return quizRepository.findById(id)
                .map(existingQuiz -> {
                    existingQuiz.setTitle(quiz.getTitle());
                    existingQuiz.setDescription(quiz.getDescription());
                    return quizRepository.save(existingQuiz);
                })
                .orElseThrow(() -> new RuntimeException("Quiz not found"));
    }

    public void deleteQuiz(UUID id) {
        quizRepository.deleteById(id);
    }
}
