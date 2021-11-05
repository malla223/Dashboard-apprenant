package com.example.demo.model;


import javax.persistence.*;

@Entity
@Table(name = "Formateur")
public class Formateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_f;
    private String nom_f;
    private String prenom_f;
    private Long Tel_f;
    private String genre_f;
    private String email_f;
    private String password_f;

    public Formateur() {
    }

    public Formateur(String nom_f, String prenom_f, Long tel_f, String genre_f, String email_f, String password_f) {
        this.nom_f = nom_f;
        this.prenom_f = prenom_f;
        Tel_f = tel_f;
        this.genre_f = genre_f;
        this.email_f = email_f;
        this.password_f = password_f;
    }

    public Long getId_f() {
        return id_f;
    }

    public void setId_f(Long id_f) {
        this.id_f = id_f;
    }

    public String getNom_f() {
        return nom_f;
    }

    public void setNom_f(String nom_f) {
        this.nom_f = nom_f;
    }

    public String getPrenom_f() {
        return prenom_f;
    }

    public void setPrenom_f(String prenom_f) {
        this.prenom_f = prenom_f;
    }

    public Long getTel_f() {
        return Tel_f;
    }

    public void setTel_f(Long tel_f) {
        Tel_f = tel_f;
    }

    public String getGenre_f() {
        return genre_f;
    }

    public void setGenre_f(String genre_f) {
        this.genre_f = genre_f;
    }

    public String getEmail_f() {
        return email_f;
    }

    public void setEmail_f(String email_f) {
        this.email_f = email_f;
    }

    public String getPassword_f() {
        return password_f;
    }

    public void setPassword_f(String password_f) {
        this.password_f = password_f;
    }
}
