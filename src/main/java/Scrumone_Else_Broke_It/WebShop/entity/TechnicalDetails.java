package Scrumone_Else_Broke_It.WebShop.entity;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table
@Getter
@Setter
public class TechnicalDetails {




    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name= "productId", referencedColumnName = "id")
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

    public void assignProduct(Product product){
        this.product = product;
    }

}
