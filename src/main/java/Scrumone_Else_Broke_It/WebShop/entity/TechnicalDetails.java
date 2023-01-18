package Scrumone_Else_Broke_It.WebShop.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.io.Serializable;


@NoArgsConstructor
@Entity
@Table(name = "TechnicalDetails")
@Getter
@Setter
public class TechnicalDetails implements Serializable {

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    @JsonIgnore
    private Product product;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String detailTitle;

    @Column
    private String detailText;

    public void assignProduct(Product product) {
        this.product = product;
    }
}
