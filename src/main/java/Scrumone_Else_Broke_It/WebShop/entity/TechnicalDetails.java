package Scrumone_Else_Broke_It.WebShop.entity;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table
@Getter
@Setter
public class TechnicalDetails {
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

}
