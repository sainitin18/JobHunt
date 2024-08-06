package com.msn.service;

import com.msn.dto.JobListingDTO;
import com.msn.models.JobListing;
import com.msn.repository.JobListingRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Data
@Service
public class JobListingService {

    @Autowired
    private JobListingRepository jobListingRepository;

    public List<JobListingDTO> getAllJobListings() {
        List<JobListing> jobListings = jobListingRepository.findAll();
        return jobListings.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public JobListingDTO getJobListingById(int jobId) {
        JobListing jobListing = jobListingRepository.findById(jobId).orElseThrow(() -> new NoSuchElementException("Job not found"));
        return convertToDTO(jobListing);
    }

    public JobListing saveJobListing(JobListing jobListing) {
        return jobListingRepository.save(jobListing);
    }

    public void deleteJobListing(int jobId) {
        jobListingRepository.deleteById(jobId);
    }

    private JobListingDTO convertToDTO(JobListing jobListing) {
        JobListingDTO dto = new JobListingDTO();
        dto.setJob_id(jobListing.getJob_id());
        dto.setTitle(jobListing.getTitle());
        dto.setDescription(jobListing.getDescription());
        dto.setLocation(jobListing.getLocation());
        dto.setSalary(jobListing.getSalary());
        dto.setCompanyName(jobListing.getEmployer().getName());
        return dto;
    }
}
