package Scrumone_Else_Broke_It.WebShop.entity;

import javax.persistence.*;

@Entity
@Table

public class Product {

    @Id
    @Column
    private int id;
    @Column
    private String name;
    @Column
    private String currency;
    @Column
    private float price;

    @Column
    private String category;
    @Column
    private String description;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCurrency() {
        return currency;
    }

    public float getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
