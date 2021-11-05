package com.example.demo.service;

import com.example.demo.model.Formateur;

import java.util.List;

public interface FormateurService {
    public Formateur ajouter_f(Formateur f);
    public Formateur modifier_f(Long id, Formateur f);
    public List<Formateur> liste_f();
    public Formateur afficher_f_by_id(Long id);
    void supprimer_f(Long id);
}
