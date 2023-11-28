package com.produ.narrativas.service;

import com.produ.narrativas.model.Child;
import com.produ.narrativas.model.Parent;
import com.produ.narrativas.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Component
public class ChildService {
    private final ChildRepository childRepository;

    @Autowired
    public ChildService(ChildRepository childRepository) {
        this.childRepository = childRepository;
    }

    public boolean addChild(Child child) {
        if(childRepository.findByDni(child.getDni()) == null) { //TODO ASSURE THAT FIND BY DNI WORKS
            childRepository.save(child);
            return true;
        } else {
            return false;
        }
    }

    public Child getChild(String dni) {
        return childRepository.findByDni(dni);
    }

    public Iterable<Child> getChildren() {
        return childRepository.findAll();
    }

    public Page<Child> getChildrenAsPages(Pageable pageable) {return childRepository.findAll(pageable);}

    public void deleteChild(Child childToDelete) {
        childRepository.delete(childToDelete);
    }

    public Parent addParentToChild(Child c, Parent p) {
        c.addParent(p);
        childRepository.save(c);
        return p;
    }
}
