package Scrumone_Else_Broke_It.WebShop.entity;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
@Getter
@Setter
@Data
public class Impressum {
    @Id
    @Column
    private int id;
    @Column
    private String impressumText;
}
