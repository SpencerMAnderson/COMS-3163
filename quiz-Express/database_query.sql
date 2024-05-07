--I was not able to fully implement this code into my program, but this is the query I have for Quiz database

CREATE DATABASE Quiz;
USE Quiz;

CREATE TABLE Quizzes (
    quiz_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quiz_name VARCHAR(50)
);

CREATE TABLE Questions (
    question_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quiz_id INT,
    text VARCHAR(500),
    CONSTRAINT FK_Quiz FOREIGN KEY (quiz_id) REFERENCES Quizzes (quiz_id)
);

CREATE TABLE Answers (
    answer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(500),
    correct BOOLEAN,
    question_id INT,
    CONSTRAINT FK_Question FOREIGN KEY (question_id) REFERENCES Questions (question_id)
);

INSERT INTO Quizzes (quiz_id, quiz_name)
VALUES
    (1, 'Quiz_pt1'),
    (2, 'Quiz_pt2');

INSERT INTO Questions (quiz_id, text)
VALUES
    (1, 'What year is it currently?'),
    (1, 'Did the Kansas City Chiefs win the Super Bowl 2024?'),
    (1, 'Is COMS-3163 held in Norman Hall?'),
    (1, 'What state is ATU located in?'),
    (1, 'What color is the sky?'),
    (2, 'Is my name Spencer Anderson?'),
    (2, 'Is the course name for COMS-3163: "Web Programming"?'),
    (2, 'If I have 13 apples and eat 4 of them, how many apples do I have left?'),
    (2, 'This project is using which framework?'),
    (2, 'Is the following statement true or false?: When doing web programming, everything works the first time!');

INSERT INTO Answers (text, correct, question_id)
VALUES
    ('2022', 0, 1),
    ('2021', 0, 1),
    ('2024', 1, 1),
    ('1990', 0, 1),
    ('True', 1, 2),
    ('False', 0, 2),
    ('True', 0, 3),
    ('False', 1, 3),
    ('Arkansas', 1, 4),
    ('Colorado', 0, 4),
    ('Nebraska', 0, 4),
    ('Alabama', 0, 4),
    ('Red', 0, 5),
    ('Yellow', 0, 5),
    ('Blue', 1, 5),
    ('Green', 0, 5),
    ('True', 1, 6),
    ('False', 0, 6),
    ('True', 1, 7),
    ('False', 0, 7),
    ('11', 0, 8),
    ('17', 0, 8),
    ('5', 0, 8),
    ('9', 1, 8),
    ('REACT', 1, 9),
    ('Angular', 0, 9),
    ('None', 0, 9),
    ('True', 0, 10),
    ('False', 1, 10);

SELECT * FROM Questions WHERE quiz_ID = 1;
