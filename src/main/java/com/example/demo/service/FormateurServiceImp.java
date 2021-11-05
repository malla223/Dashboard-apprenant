package com.example.demo.service;

import com.example.demo.model.Apprenant;
import com.example.demo.model.Formateur;
import com.example.demo.repositories.apprenantRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormateurServiceImp implements FormateurService{
    @Autowired
    com.example.demo.repositories.formateurRepo formatRepo;
    @Override
    public Formateur ajouter_f(Formateur f) {
        return formatRepo.save(f); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Formateur modifier_f(Long id, Formateur f) {
        Formateur APP = formatRepo.findById(id).get();
        APP.setPrenom_f(f.getPrenom_f());
        APP.setEmail_f(f.getEmail_f());
        APP.setEmail_f(f.getEmail_f());
        APP.setGenre_f(f.getGenre_f());
        APP.setPassword_f(f.getPassword_f());
        APP.setTel_f(f.getTel_f());
        return formatRepo.save(APP);
    }

    @Override
    public List<Formateur> liste_f() {
        return formatRepo.findAll();
    }

    @Override
    public Formateur afficher_f_by_id(Long id) {
        return formatRepo.findById(id).get();
    }

    @Override
    public void supprimer_f(Long id) {
        formatRepo.deleteById(id); //To change body of generated methods, choose Tools | Templates.
    }

}
