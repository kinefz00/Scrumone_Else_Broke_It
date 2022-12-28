package Scrumone_Else_Broke_It.WebShop.entity;

import lombok.Getter;
import lombok.Setter;

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
    private int houseNumber;
    @Column
    private String street;
    @Column
    private int zipCode;
    @Column
    private String city;

    public UserEntity getUser() {
        return user;
    }

}
