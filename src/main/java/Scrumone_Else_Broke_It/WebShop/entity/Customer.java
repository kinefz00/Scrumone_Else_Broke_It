package Scrumone_Else_Broke_It.WebShop.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table
@Getter
@Setter
public class Customer {
    //Attributes
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column
    private String email;

    @Column
    private String password;
}
