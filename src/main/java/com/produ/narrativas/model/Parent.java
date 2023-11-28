package com.produ.narrativas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Parent extends Person {
    private String contact;
    @ManyToMany
    @JoinTable(
            name="CHILD_ASSOCIATED_PARENTS"
    )
    private List<Child> children;


    //TODO are these useful?
    //Observations
    //Interviews


    public Parent(String firstName, String lastName, String dni, String contact) {
        super(firstName, lastName, dni);
        this.contact = contact;
        this.children = new ArrayList<>();
    }

    public Parent() {

    }


    public String getContact() {
        return contact;
    }

    public List<Child> getChildren() {
        return children;
    }

    public void addChildren(Child c) {
        children.add(c);
    }

    public void deleteChildren(Child c) {
        children.remove(c);
    }
}
