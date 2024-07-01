package io.codelex.quizmaker;

import io.codelex.quizmaker.configuration.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class QuizMakerApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuizMakerApplication.class, args);
    }

}
