-- liquibase formatted sql
-- changeset gatis:2
CREATE TABLE question
(
    id            UUID DEFAULT random_uuid() PRIMARY KEY,
    question_text VARCHAR(255) NOT NULL,
    quiz_id       UUID,
    CONSTRAINT fk_quiz FOREIGN KEY (quiz_id) REFERENCES quiz (id)
);
