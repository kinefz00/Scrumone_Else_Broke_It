package Scrumone_Else_Broke_It.WebShop.entity;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table
public class Impressum {
    //Attributes
    @Id
    @Column
    private int id; //trying to always set id = 1
    @Column
    private String impressumText;
}
