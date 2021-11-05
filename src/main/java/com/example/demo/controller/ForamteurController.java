package com.example.demo.controller;


import com.example.demo.model.Formateur;
import com.example.demo.service.FormateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/apis")
public class ForamteurController {

    @Autowired
    public FormateurService formatService;

    @PostMapping(value="/formateur")
    public Formateur ajouter_for(@RequestBody Formateur f) {
        return formatService.ajouter_f(f);
    }

    @PutMapping(value=("/formateur/{id}"))
    public Formateur update(@PathVariable("id") Long id, @RequestBody Formateur f ) {

        return formatService.modifier_f(id, f);
    }

    @GetMapping(value="/formateur")
    public List<Formateur> listeF(){
        return formatService.liste_f();
    }

    @GetMapping(value="/formateur/{id}")
    public Formateur formateuryId(@PathVariable("id") Long id) {
        return formatService.afficher_f_by_id(id);
    }

    @DeleteMapping(value="/formateur/{id}")
    public void delete(@PathVariable("id") Long id) {
        formatService.supprimer_f(id);

    }
}
