package io.codelex.quizmaker.domain;

import jakarta.persistence.*;

import java.util.Objects;
import java.util.UUID;

@Entity
public class Answer {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private UUID id;
        private String answerText;
        private Boolean isCorrect;

        @ManyToOne(fetch = FetchType.EAGER)
        private Question question;

        public Answer() {}

        public Answer(UUID id, String answerText, Boolean isCorrect, Question question) {
                this.id = id;
                this.answerText = answerText;
                this.isCorrect = isCorrect;
                this.question = question;
        }

        public UUID getId() {
                return id;
        }

        public void setId(UUID id) {
                this.id = id;
        }

        public String getAnswerText() {
                return answerText;
        }

        public void setAnswerText(String answerText) {
                this.answerText = answerText;
        }

        public Boolean getIsCorrect() {
                return isCorrect;
        }

        public void setIsCorrect(Boolean isCorrect) {
                this.isCorrect = isCorrect;
        }

        public Question getQuestion() {
                return question;
        }

        public void setQuestion(Question question) {
                this.question = question;
        }

        @Override
        public boolean equals(Object o) {
                if (this == o) return true;
                if (!(o instanceof Answer answer)) return false;
            return Objects.equals(getId(), answer.getId()) && Objects.equals(getAnswerText(), answer.getAnswerText()) && Objects.equals(getIsCorrect(), answer.getIsCorrect()) && Objects.equals(getQuestion(), answer.getQuestion());
        }

        @Override
        public int hashCode() {
                return Objects.hash(getId(), getAnswerText(), getIsCorrect(), getQuestion());
        }

        @Override
        public String toString() {
                return "Answer{" +
                        "id=" + id +
                        ", answerText='" + answerText + '\'' +
                        ", isCorrect=" + isCorrect +
                        ", question=" + question +
                        '}';
        }
}
