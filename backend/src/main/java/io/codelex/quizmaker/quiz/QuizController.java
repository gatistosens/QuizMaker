package io.codelex.quizmaker.quiz;

import io.codelex.quizmaker.domain.Quiz;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public Optional<Quiz> getQuizById(@PathVariable UUID id) {
        return quizService.getQuizById(id);
    }

    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizService.createQuiz(quiz);
    }

    @PutMapping("/{id}")
    public Optional<Quiz> updateQuiz(@PathVariable UUID id, @RequestBody Quiz quiz) {
        return Optional.of(quizService.updateQuiz(id, quiz));
    }

    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable UUID id) {
        quizService.deleteQuiz(id);
    }
}
