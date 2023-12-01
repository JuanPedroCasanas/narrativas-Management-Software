package com.produ.narrativas.web;

import com.produ.narrativas.model.Parent;
import com.produ.narrativas.service.ChildService;
import com.produ.narrativas.model.Child;
import com.produ.narrativas.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.Map;


@RestController
public class ChildController {

    private final ParentService parentService;
    private final ChildService childService;

    @Autowired
    public ChildController(ChildService childService, ParentService parentService) {
        this.childService = childService;
        this.parentService = parentService;
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
    public Child addChild(@RequestBody Map<String, String> childData) {
        String firstName = childData.get("firstName");
        String lastName = childData.get("lastName");
        String dni = childData.get("dni");
        LocalDate birthDate = LocalDate.parse(childData.get("birthDate").split("T")[0]);
        String parent1Dni = childData.get("parent1Dni");
        String parent2Dni = childData.get("parent2Dni");

        Parent parent1 = parentService.getParent(parent1Dni);
        Parent parent2 = parentService.getParent(parent2Dni);

        Child newChild = new Child(firstName, lastName, dni, birthDate, parent1, parent2);

        childService.addChild(newChild);
        return newChild;
    }


    @DeleteMapping("/deleteChild/{dni}")
    public Child deleteChild(@PathVariable String dni) {
        Child childToDelete = childService.getChild(dni);
        System.out.println(childToDelete);
        childService.deleteChild(childToDelete);
        return childToDelete;
    }
}
