package Scrumone_Else_Broke_It.WebShop.entity;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
@Getter
@Setter
@Table(name = "wishlist")

public class Wishlist implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore
    private Product productId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private UserEntity username;


    public Wishlist(Product productId, UserEntity username) {
        this.productId = productId;
        this.username = username;
    }
    public Wishlist(){

    }
}
