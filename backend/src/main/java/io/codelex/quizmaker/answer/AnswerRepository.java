package io.codelex.quizmaker.answer;

import io.codelex.quizmaker.domain.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AnswerRepository extends JpaRepository<Answer, UUID> {
}
