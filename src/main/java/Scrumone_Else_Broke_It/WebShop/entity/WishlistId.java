package Scrumone_Else_Broke_It.WebShop.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class WishlistId implements Serializable {
    private int UserEntityId;
    private int productId;
}
