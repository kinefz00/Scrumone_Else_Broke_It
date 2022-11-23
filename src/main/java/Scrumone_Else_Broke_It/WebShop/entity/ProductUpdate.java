package Scrumone_Else_Broke_It.WebShop.entity;

import java.util.Optional;

public class ProductUpdate {
    private Optional<String> name;
    private Optional<String> currency;
    private Optional<Double> price;
    private Optional<String> description;
    private Optional<String> category;


    public ProductUpdate(String name, String currency, Double price, String description, String category) {
        this.name = Optional.of(name);
        this.currency = Optional.of(currency);
        this.price = Optional.of(price);
        this.description = Optional.of(description);
        this.category = Optional.of(category);
    }

    public ProductUpdate() {
        this.name = Optional.empty();
        this.currency = Optional.empty();
        this.price = Optional.empty();
        this.description = Optional.empty();
        this.category = Optional.empty();
    }

    public Optional<String> getName() {
        return name;
    }

    public void setName(String name) {
        this.name = Optional.of(name);
    }

    public Optional<String> getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = Optional.of(currency);
    }

    public Optional<Double> getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = Optional.of(price);
    }

    public Optional<String> getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = Optional.of(description);
    }

    public Optional<String> getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = Optional.of(category);
    }
}

