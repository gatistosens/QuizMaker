-- liquibase formatted sql
-- changeset gatis:3
CREATE TABLE answer
(
    id          UUID DEFAULT random_uuid() PRIMARY KEY,
    answer_text VARCHAR(255) NOT NULL,
    is_correct  BOOLEAN      NOT NULL,
    question_id UUID,
    CONSTRAINT fk_question FOREIGN KEY (question_id) REFERENCES question (id)
);
