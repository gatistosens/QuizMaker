package io.codelex.quizmaker.quiz;

import io.codelex.quizmaker.domain.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, UUID> {
}
