package Scrumone_Else_Broke_It.WebShop.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;


@NoArgsConstructor
@Entity
@Table(name = "TechnicalDetails")
@Getter
@Setter
public class TechnicalDetails implements Serializable {


    @ManyToOne
    private Product product;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column
    private int id;
    @Column
    private String detailTitle;
    @Column
    private String detailText;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public void assignProduct(Product product) {
        this.product = product;
    }

}
