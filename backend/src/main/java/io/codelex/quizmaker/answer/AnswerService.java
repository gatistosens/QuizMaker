package io.codelex.quizmaker.answer;

import io.codelex.quizmaker.domain.Answer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    public Optional<Answer> getAnswerById(UUID id) {
        return answerRepository.findById(id);
    }

    public Answer saveAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(UUID id, Answer answer) {
        return answerRepository.findById(id)
                .map(existingAnswer -> {
                    existingAnswer.setAnswerText(answer.getAnswerText());
                    existingAnswer.setIsCorrect(answer.getIsCorrect());
                    existingAnswer.setQuestion(answer.getQuestion());
                    return answerRepository.save(existingAnswer);
                })
                .orElseThrow(() -> new RuntimeException("Answer not found"));
    }


    public void deleteAnswer(UUID id) {
        answerRepository.deleteById(id);
    }
}
