package com.example.demo.repositories;

import com.example.demo.model.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface formateurRepo extends JpaRepository <Formateur, Long> {
}
