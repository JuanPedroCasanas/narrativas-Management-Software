package com.produ.narrativas.repository;

import com.produ.narrativas.model.Parent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentRepository extends CrudRepository <Parent, Integer>, PagingAndSortingRepository<Parent, Integer> {

    public Parent findByDni(String dni);
}
