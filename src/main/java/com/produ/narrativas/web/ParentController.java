package com.produ.narrativas.web;

import com.produ.narrativas.model.Parent;
import com.produ.narrativas.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParentController {
    private final ParentService parentService;

    @Autowired
    public ParentController(ParentService parentService) {
        this.parentService = parentService;
    }

    @GetMapping("/getParents")
    public Iterable<Parent> getParents() {
        return parentService.getParents();
    }

    @GetMapping("/getParent/{dni}")
    public Parent getParent(@PathVariable String dni) {
        return parentService.getParent(dni);
    }
}
