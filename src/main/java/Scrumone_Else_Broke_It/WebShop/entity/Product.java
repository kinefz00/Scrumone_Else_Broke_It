package Scrumone_Else_Broke_It.WebShop.entity;

import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table
@Getter
@Setter
public class Product implements Serializable {


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


}
