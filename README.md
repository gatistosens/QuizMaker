# QuizMaker

QuizMaker is a tool for creating quizzes and tests. It allows users to create quizzes, share them with others via a link, and receive their scores. Please note that this project is still under development. Features and functionalities are subject to change.

## Features

- **User Registration and Authentication:** Users can register and log in to the application.
- **Create Quizzes:** Authenticated users can create new quizzes by providing a title, questions, and answers. Users can choose to make quizzes anonymous or not.
- **View Quizzes:** Users can view the list of quizzes they have created.
- **Take Quizzes:** Users can take quizzes created by others through a shared link.
- **Score Tracking:** Quiz creators can track the scores of users who have taken their quizzes.

## Technology Stack

### Frontend
- React
- TypeScript
- Material-UI

### Backend
- Spring Boot
- Spring Security
- JPA/Hibernate
- H2 Database (for development purposes)
- Liquibase (for database versioning)
- JWT (JSON Web Tokens) for authentication and authorization

## Running the Project

### Prerequisites

- Node.js
- Java Development Kit (JDK)
- Gradle

### Frontend

Navigate to the `frontend` directory and run:

```sh
npm install
npm start
```

### Backend

Navigate to the `backend` directory and run:

```sh
./gradlew bootRun
```

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Log in a user

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `GET /api/quizzes/{id}` - Get a specific quiz by ID
- `POST /api/quizzes` - Create a new quiz
- `PUT /api/quizzes/{id}` - Update a specific quiz by ID
- `DELETE /api/quizzes/{id}` - Delete a specific quiz by ID

### Questions
- `GET /api/questions` - Get all questions
- `GET /api/questions/{id}` - Get a specific question by ID
- `POST /api/questions` - Create a new question
- `PUT /api/questions/{id}` - Update a specific question by ID
- `DELETE /api/questions/{id}` - Delete a specific question by ID

### Answers
- `GET /api/answers` - Get all answers
- `GET /api/answers/{id}` - Get a specific answer by ID
- `POST /api/answers` - Create a new answer
- `PUT /api/answers/{id}` - Update a specific answer by ID
- `DELETE /api/answers/{id}` - Delete a specific answer by ID

