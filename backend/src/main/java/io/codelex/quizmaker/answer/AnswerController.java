package io.codelex.quizmaker.answer;

import io.codelex.quizmaker.domain.Answer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    private final AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping
    public List<Answer> getAnswers() {
        return answerService.getAllAnswers();
    }

    @GetMapping("/{id}")
    public Optional<Answer> getAnswer(@PathVariable UUID id) {
        return answerService.getAnswerById(id);
    }

    @PostMapping
    public Answer createAnswer(@RequestBody Answer answer) {
        return answerService.saveAnswer(answer);
    }

    @PutMapping("/{id}")
    public Optional<Answer> updateAnswer(@PathVariable UUID id, @RequestBody Answer answer) {
        return Optional.of(answerService.updateAnswer(id, answer));
    }

    @DeleteMapping("/{id}/")
    public void deleteAnswer(@PathVariable UUID id) {
        answerService.deleteAnswer(id);
    }
}
