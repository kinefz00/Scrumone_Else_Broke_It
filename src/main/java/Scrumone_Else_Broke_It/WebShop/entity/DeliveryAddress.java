package Scrumone_Else_Broke_It.WebShop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JoinColumn(name = "username", referencedColumnName = "username")
    @JsonIgnore
    private UserEntity user;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String city;
    @Column
    private int houseNumber;
    @Column
    private String street;
    @Column
    private int zipCode;

    public void assignUser(UserEntity user) {
        this.user = user;
    }
}
