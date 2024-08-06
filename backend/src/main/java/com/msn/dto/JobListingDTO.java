package com.msn.dto;

import java.math.BigDecimal;
import lombok.Data;

@Data
public class JobListingDTO {
    private int job_id;
    private String title;
    private String description;
    private String location;
    private BigDecimal salary;
    private String companyName;
}
