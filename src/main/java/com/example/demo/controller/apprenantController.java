/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.controller;

import com.example.demo.model.Apprenant;
import com.example.demo.service.apprenantServices;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author dramane.diarra
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class apprenantController {
    @Autowired
	public apprenantServices apprenantService;
    
	@PostMapping(value="/apprenant")
	public Apprenant ajouter_apprenant(@RequestBody Apprenant apprenant) {
		return apprenantService.ajouter_apprenant(apprenant);
	}

	@PutMapping(value=("/apprenant/{id}"))
	public Apprenant update(@PathVariable("id") Long id, @RequestBody Apprenant apprenant ) {
		
		return apprenantService.modifier_apprenant(id, apprenant);
	}

	@GetMapping(value="/apprenant")
	public List<Apprenant> listeApprenant(){
		return apprenantService.liste_apprenant();
	}

	@GetMapping(value="/apprenant/{id}")
	public Apprenant apprenantById(@PathVariable("id") Long id) {
		return apprenantService.afficher_apprenant_by_id(id);
	}

	@DeleteMapping(value="/apprenant/{id}")
	public void delete(@PathVariable("id") Long id) {
		apprenantService.supprimer_apprenant(id);
		
	}
	/*
        @GetMapping(value="/rechercherApprenant/login={login}&password={password}")
	public Optional<Apprenant> rechercher(@PathVariable("login") String login,@PathVariable("password") String password){
		return apprenantService.rechercher(login, password);
		
	}
        */
    
}
