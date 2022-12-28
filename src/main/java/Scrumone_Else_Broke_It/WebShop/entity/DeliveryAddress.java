package Scrumone_Else_Broke_It.WebShop.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.User;

import javax.persistence.*;

@Getter
@Entity
@Setter
@Table

public class DeliveryAddress {

    @ManyToOne
    private UserEntity user;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String city;
    @Column
    private int houseNumber;
    @Column
    private String street;
    @Column
    private int zipCode;


    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public void assignUser(UserEntity user) {
        this.user = user;
    }

}
