/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.repositories;

import com.example.demo.model.presence;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author dramane.diarra
 */
public interface presenceRepository extends JpaRepository<presence, Long>{
    Optional<presence>findByDate(@Param("date")Date date);
    List<presence> findByDateBeforeAndDateAfter(@Param("startDate")Date startDate,@Param("enDate") Date endDate);
}
