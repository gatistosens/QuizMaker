package io.codelex.quizmaker.user;

import io.codelex.quizmaker.domain.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final TokenService tokenService;

    public UserController(UserService userService, TokenService tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        userService.loginUser(user);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return tokenService.generateToken(authentication);
    }
}
