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
    @Column(unique = true)
    private String username;
    @Column(unique = true)
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
