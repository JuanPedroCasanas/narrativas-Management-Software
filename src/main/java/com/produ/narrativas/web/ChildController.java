package com.produ.narrativas.web;

import com.produ.narrativas.service.ChildService;
import com.produ.narrativas.model.Child;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
public class ChildController {

    private final ChildService childService;

    @Autowired
    public ChildController(ChildService childService) {
        this.childService = childService;
    }
    @GetMapping("/get/{dni}")
    public Child getByDni(@PathVariable String dni) {
        return childService.getChild(dni);
    }

    @GetMapping("/get")
    public Iterable<Child> getChildren() {
        return childService.getChildren();
    }



    @PostMapping("/addChild")
    public Child addChild(@RequestBody Child requestBody) {

                childService.addChild(requestBody);
                System.out.println(requestBody.getBirthDate());
                return requestBody;
        }


    @DeleteMapping("/deleteChild/{dni}")
    public Child deleteChild(@PathVariable String dni) {
        Child childToDelete = childService.getChild(dni);
        System.out.println(childToDelete);
        childService.deleteChild(childToDelete);
        return childToDelete;
    }
}
