package com.msn.controller;

import com.msn.dto.JobListingDTO;
import com.msn.models.JobListing;
import com.msn.service.JobListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job-listings")
public class JobListingController {

    @Autowired
    private JobListingService jobListingService;

    @PostMapping
    public ResponseEntity<JobListing> createJobListing(@RequestBody JobListing jobListing) {
        JobListing savedJobListing = jobListingService.saveJobListing(jobListing);
        return new ResponseEntity<>(savedJobListing, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<JobListingDTO>> getAllJobListings() {
        List<JobListingDTO> jobListings = jobListingService.getAllJobListings();
        return new ResponseEntity<>(jobListings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobListingDTO> getJobListingById(@PathVariable("id") int jobId) {
        JobListingDTO jobListing = jobListingService.getJobListingById(jobId);
        return new ResponseEntity<>(jobListing, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobListing(@PathVariable("id") int jobId) {
        jobListingService.deleteJobListing(jobId);
        return ResponseEntity.noContent().build();
    }
}
