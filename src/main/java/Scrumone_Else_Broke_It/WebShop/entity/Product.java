package Scrumone_Else_Broke_It.WebShop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
public class Product {

    //Attributes
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @OneToMany(mappedBy = "product", cascade = {CascadeType.ALL})
    private List<TechnicalDetails> technicalDetails;

}
