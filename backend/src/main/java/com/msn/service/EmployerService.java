package com.msn.service;

import com.msn.models.Employer;
import com.msn.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EmployerService {

    @Autowired
    private EmployerRepository employerRepository;

    public Employer saveEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    public Employer getEmployerById(int id) {
        return employerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Employer not found"));
    }

    public void deleteEmployer(int id) {
        employerRepository.deleteById(id);
    }
}
