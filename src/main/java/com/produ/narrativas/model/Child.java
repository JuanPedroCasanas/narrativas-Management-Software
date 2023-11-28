package com.produ.narrativas.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Child extends Person{
    @Nullable
    @ManyToOne
    private School school;
    private LocalDate birthDate;

    @ManyToOne
    @Nullable
    private Parent parent1;

    @ManyToOne
    @Nullable
    private Parent parent2;

    @OneToMany
    private List<Report> reports;

    @ManyToMany
    @JoinTable(
            name="CHILD_ASSOCIATED_PARENTS"
    )
    private List<Parent> parents;
    @ManyToMany
    private List<Professional> professionals;
    @ManyToMany
    private List<Teacher> teachers;

    //TODO Obra social en niño o padre?

    public Child(String firstName, String lastName, String dni, LocalDate birthDate, Parent parent1, Parent parent2) { //TODO finish this method
        super(firstName, lastName, dni);
        this.birthDate = birthDate;
        this.parent1 = parent1;
        this.parent2 = parent2;
        this.reports = new ArrayList<>();
        this.professionals = new ArrayList<>();
        this.teachers = new ArrayList<>();
    }

    public void addParent(Parent p) {
        parents.add(p);
    }

    public void deleteParent(Parent p) {
        parents.remove(p);
    }

    public void addReport(Report r) {
        reports.add(r);
    } //TODO remember to do the whole renaming logic here

    public void deleteReport(Report r) {
        reports.remove(r);
    }

    public Child() {}

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public Parent getParent1() {
        return parent1;
    }

    public Parent getParent2() {
        return parent2;
    }
}
