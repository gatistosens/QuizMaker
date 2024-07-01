package io.codelex.quizmaker.domain;

import jakarta.persistence.*;

import java.util.Objects;
import java.util.UUID;

@Entity
public class Question {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private UUID id;
        private String questionText;

        @ManyToOne(fetch = FetchType.EAGER)
        private Quiz quiz;

        public Question() {}

        public Question(UUID id, String questionText, Quiz quiz) {
                this.id = id;
                this.questionText = questionText;
                this.quiz = quiz;
        }

        public UUID getId() {
                return id;
        }

        public void setId(UUID id) {
                this.id = id;
        }

        public String getQuestionText() {
                return questionText;
        }

        public void setQuestionText(String questionText) {
                this.questionText = questionText;
        }

        public Quiz getQuiz() {
                return quiz;
        }

        public void setQuiz(Quiz quiz) {
                this.quiz = quiz;
        }

        @Override
        public boolean equals(Object o) {
                if (this == o) return true;
                if (!(o instanceof Question question)) return false;
            return Objects.equals(getId(), question.getId()) && Objects.equals(getQuestionText(), question.getQuestionText()) && Objects.equals(getQuiz(), question.getQuiz());
        }

        @Override
        public int hashCode() {
                return Objects.hash(getId(), getQuestionText(), getQuiz());
        }

        @Override
        public String toString() {
                return "Question{" +
                        "id=" + id +
                        ", questionText='" + questionText + '\'' +
                        ", quiz=" + quiz +
                        '}';
        }
}
