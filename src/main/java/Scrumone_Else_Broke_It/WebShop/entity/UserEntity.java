package Scrumone_Else_Broke_It.WebShop.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "APP_USER")
@Getter
@Setter
public class UserEntity {
    //Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    int id;
    @Column(nullable = false, unique = true)
    private String username;
    @Column
    private String email;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String password;
    @Column
    private String role;

}
