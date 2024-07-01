package io.codelex.quizmaker.question;

import io.codelex.quizmaker.domain.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface QuestionRepository extends JpaRepository<Question, UUID> {
}
