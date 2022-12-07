package Scrumone_Else_Broke_It.WebShop.entity;

import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table
@Getter
@Setter
public class Product {

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private Set<TechnicalDetails> technicalDetails= new HashSet<>();



    //Attributes
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String category;
    @Column
    private String currency;
    @Column
    private String description;
    @Column
    private String name;
    @Column
    private double price;

    public Set<TechnicalDetails> getTechnicalDetails() {
        return technicalDetails;
    }

    public void setTechnicalDetails(Set<TechnicalDetails> technicalDetails) {
        this.technicalDetails = technicalDetails;
    }
}
