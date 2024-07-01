package io.codelex.quizmaker.question;

import io.codelex.quizmaker.domain.Question;
import io.codelex.quizmaker.domain.Quiz;
import io.codelex.quizmaker.quiz.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public QuestionService(QuestionRepository questionRepository, QuizRepository quizRepository) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Optional<Question> getQuestionById(UUID id) {
        return questionRepository.findById(id);
    }

    public Question saveQuestion(Question question) {
        UUID quizId = question.getQuiz().getId();
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(() -> new RuntimeException("Quiz not found"));
        question.setQuiz(quiz);
        return questionRepository.save(question);
    }

    public Question updateQuestion(UUID id, Question question) {
        return questionRepository.findById(id)
                .map(existingQuestion -> {
                    existingQuestion.setQuestionText(question.getQuestionText());
                    existingQuestion.setQuiz(question.getQuiz());
                    return questionRepository.save(existingQuestion);
                })
                .orElseThrow(() -> new RuntimeException("Question not found"));
    }

    public void deleteQuestion(UUID id) {
        questionRepository.deleteById(id);
    }
}
