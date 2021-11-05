/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.model.presence;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author dramane.diarra
 */
public interface presenceServices {  
    presence ajouter_presence(presence presence);
    List<presence>presenceByDay();
    Optional<presence> findByDate(Date date);
    List<presence> findByStartDateBeforeAndEndDateAfter(Date startDate,Date endDate);
}
