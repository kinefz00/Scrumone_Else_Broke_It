package Scrumone_Else_Broke_It.WebShop.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Entity

public class Wishlist implements Serializable {

    @EmbeddedId
    private WishlistId id = new WishlistId();

    @ManyToOne(cascade = CascadeType.MERGE)
    @MapsId("userEntityId")
    @JsonIgnore
    private UserEntity user;

    @ManyToOne(cascade = CascadeType.MERGE)
    @MapsId("productId")
    private Product product;

}
