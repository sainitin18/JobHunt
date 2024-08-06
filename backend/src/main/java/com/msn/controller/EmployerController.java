package com.msn.controller;

import com.msn.models.Employer;
import com.msn.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employers")
public class EmployerController {

    @Autowired
    private EmployerService employerService;

    @PostMapping
    public ResponseEntity<Employer> createEmployer(@RequestBody Employer employer) {
        // Check user roles from SecurityContext .......
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = authentication.getAuthorities().stream().findFirst().orElse(null).getAuthority();

        if (!role.equals("ADMIN") && !role.equals("RECRUITER")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        Employer savedEmployer = employerService.saveEmployer(employer);
        return new ResponseEntity<>(savedEmployer, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Employer>> getAllEmployers() {
        List<Employer> employers = employerService.getAllEmployers();
        return new ResponseEntity<>(employers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employer> getEmployerById(@PathVariable("id") int id) {
        Employer employer = employerService.getEmployerById(id);
        return new ResponseEntity<>(employer, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployer(@PathVariable("id") int id) {
        employerService.deleteEmployer(id);
        return ResponseEntity.noContent().build();
    }
}
