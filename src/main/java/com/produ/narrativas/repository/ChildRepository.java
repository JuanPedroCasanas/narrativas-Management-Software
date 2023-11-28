package com.produ.narrativas.repository;


import com.produ.narrativas.model.Child;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChildRepository extends PagingAndSortingRepository<Child, Integer>, CrudRepository<Child, Integer> {
    public Child findByDni(String dni);
}
