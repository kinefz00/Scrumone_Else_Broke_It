package Scrumone_Else_Broke_It.WebShop.entity;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter


@Table(name = "wishlist")

public class Wishlist{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @ManyToOne(targetEntity = UserEntity.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne()
    @JoinColumn(name = "product_id")
    private Product product;

    public Wishlist(boolean b, String add_to_wishlist) {

    }

    public Wishlist(UserEntity user, Product product) {
        this.user = user;
        this.product = product;
    }
}
