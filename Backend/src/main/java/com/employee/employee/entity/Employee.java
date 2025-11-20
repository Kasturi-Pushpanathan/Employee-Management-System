package com.employee.employee.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity//tells jpa as new entity
@Data// for getters setters
public class Employee {

    @Id//tells as id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//to auto generate IDs
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String department;
}
