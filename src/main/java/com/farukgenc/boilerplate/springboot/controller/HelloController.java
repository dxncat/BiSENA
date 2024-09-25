package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.User;
import com.farukgenc.boilerplate.springboot.model.UserRole;
import com.farukgenc.boilerplate.springboot.security.dto.AuthenticatedUserDto;
import com.farukgenc.boilerplate.springboot.security.jwt.JwtTokenService;
import com.farukgenc.boilerplate.springboot.security.mapper.UserMapper;
import com.farukgenc.boilerplate.springboot.security.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;

/**
 * Created on Ağustos, 2020
 *
 * @author Faruk
 */
@RestController
public class HelloController {

	@Autowired
	private UserService userService;

	public HelloController(UserService userService, JwtTokenService jwtTokenService) {
	}

	@GetMapping("/hello")
	@CrossOrigin(origins = "*")
	@Operation(tags = "Hello Service", description = "When you send token information in the header it just says Hello")
	public ResponseEntity<String> sayHello(HttpSession httpSession) {
        return ResponseEntity.ok("funciona");
    }

	@GetMapping("/userinfo")
	@CrossOrigin(origins = "*")
	public ResponseEntity<User> getUserInfo(Principal principal) {
		Map<String, String> response = new HashMap<>();
		response.put("username", principal.getName());
		userService.findByUsername(principal.getName()).getUserRole();
		return ResponseEntity.ok(userService.findByUsername(principal.getName()));
	}
}








