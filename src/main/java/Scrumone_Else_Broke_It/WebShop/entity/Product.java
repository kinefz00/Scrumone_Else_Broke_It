package Scrumone_Else_Broke_It.WebShop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table (name = "product")
@Getter
@Setter

public class Product {
    //Attributes
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String name;
    @Column
    private String currency;
    @Column
    private double price;

    @Column
    private String category;
    @Column
    private String description;


}
