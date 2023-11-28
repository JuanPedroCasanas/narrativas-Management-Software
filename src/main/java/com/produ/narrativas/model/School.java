package com.produ.narrativas.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String contact;
    private String address;

    @OneToMany
    private List<Teacher> teachers; //TODO determine if this is useful


}
