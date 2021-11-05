/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.model.presence;
import com.example.demo.repositories.presenceRepository;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dramane.diarra
 */
@Service
public class presenceServiceImp implements presenceServices{

    @Autowired
 private presenceRepository presenceRepository;
    @Override
    public presence ajouter_presence(presence presence) {
        return presenceRepository.save(presence);
    }
    @Override
    public List<presence> presenceByDay() {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public Optional<presence> findByDate(Date date) {
        // TODO Auto-generated method stub
        return presenceRepository.findByDate(date);
    }
    @Override
    public List<presence> findByStartDateBeforeAndEndDateAfter(Date startDate, Date endDate) {

        return presenceRepository.findByDateBeforeAndDateAfter(startDate, endDate);
    }
    
}
