-- liquibase formatted sql
-- changeset gatis:1
CREATE TABLE quiz
(
    id UUID DEFAULT random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);
