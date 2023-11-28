package com.produ.narrativas.service;

import com.produ.narrativas.model.Child;
import com.produ.narrativas.model.Parent;
import com.produ.narrativas.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParentService {
    private final ParentRepository parentRepository;

    @Autowired
    public ParentService(ParentRepository parentRepository) {
         this.parentRepository = parentRepository;
    }

    public Parent getParent(String dni) {
        return parentRepository.findByDni(dni);
    }

    public Parent deleteParent(Parent p) {
        parentRepository.delete(p);
        return p;
    }

    public Child addChildToParent(Parent p, Child c) {
        p.addChildren(c);
        parentRepository.save(p);
        return c;
    }


    public Iterable<Parent> getParents() {
        return parentRepository.findAll();
    }
}
