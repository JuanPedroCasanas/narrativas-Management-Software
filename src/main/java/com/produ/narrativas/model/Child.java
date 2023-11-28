package com.produ.narrativas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;


import java.time.LocalDate;
import java.util.List;

@Entity
public class Child extends Person{
    @ManyToOne
    private School school;
    private LocalDate birthDate;

    private String parent1;
    private String parent2;

    @OneToMany
    private List<Report> reports;

    @ManyToMany
    private List<Parent> parents;
    @ManyToMany
    private List<Professional> professionals;
    @ManyToMany
    private List<Teacher> teachers;

    //TODO Obra social en niño o padre?

    public Child(String firstName, String lastName, String dni, LocalDate birthDate, String parent1, String parent2) { //TODO finish this method
        super(firstName, lastName, dni);
        this.birthDate = birthDate;
        this.parent1 = parent1;
        this.parent2 = parent2;

    }

    public void addParent(Parent p) {
        parents.add(p);
    }

    public Child() {}

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public String getParent1() {
        return parent1;
    }
}
