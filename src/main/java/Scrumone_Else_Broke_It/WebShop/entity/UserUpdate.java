package Scrumone_Else_Broke_It.WebShop.entity;


import java.util.Optional;

public class UserUpdate {
    //Attributes


    private Optional<String> email;

    private Optional<String> firstName;

    private Optional<String> lastName;

    private Optional<String> password;

    private Optional<String> role;

    public UserUpdate(String email, String firstName, String lastName, String password, String role) {
        this.email = Optional.of(email);
        this.firstName = Optional.of(firstName);
        this.lastName = Optional.of(lastName);
        this.password = Optional.of(password);
        this.role = Optional.of(role);
    }

    public UserUpdate() {
        this.email = Optional.empty();
        this.firstName = Optional.empty();
        this.lastName = Optional.empty();
        this.password = Optional.empty();
        this.role = Optional.empty();
    }


    public Optional<String> getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = Optional.of(email);
    }

    public Optional<String> getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = Optional.of(firstName);
    }


    public Optional<String> getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = Optional.of(lastName);
    }

    public Optional<String> getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = Optional.of(password);
    }

    public Optional<String> getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = Optional.of(role);
    }

}