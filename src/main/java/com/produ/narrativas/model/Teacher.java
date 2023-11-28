package com.produ.narrativas.model;

import jakarta.persistence.*;

@Entity
public class Teacher {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    int id;

    private String firstName;
    private String lastName;
    @ManyToOne
    private School school;
    private String subject; //TODO determine if useful

}
