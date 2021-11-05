/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.controller;

import com.example.demo.model.presence;
import com.example.demo.service.presenceServices;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dramane.diarra
 */
@RestController
public class presenceController {
    
    @Autowired
	private presenceServices presenceService;

	@PostMapping(value = "/ajout_presence")
	public presence save(@RequestBody presence presence) {
		return presenceService.ajouter_presence(presence);
	}

	@GetMapping(value = "/Day/date={date}")
	public Optional<presence> findByDate(@PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		return presenceService.findByDate(date);
	}

	@GetMapping(value = "/listByIntervale/dateDebut={debut}&dateFin={fin}")
	public List<presence> findByStartDateBeforeAndEndDateAfter(
			@PathVariable("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
			@PathVariable("enDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
		return presenceService.findByStartDateBeforeAndEndDateAfter(startDate, endDate);
	}
}
