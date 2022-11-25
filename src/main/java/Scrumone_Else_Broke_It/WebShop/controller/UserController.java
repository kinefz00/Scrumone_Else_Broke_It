package Scrumone_Else_Broke_It.WebShop.controller;

import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import Scrumone_Else_Broke_It.WebShop.entity.UserUpdate;
import Scrumone_Else_Broke_It.WebShop.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserDetailsService userDetailsService;

    @Autowired
    public UserController(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }


    @GetMapping("/user")
    private List<UserEntity> getAllUser() {
        return userDetailsService.getAllUser();
    }

    @GetMapping("/user/{id}")
    private UserEntity getUserById(@PathVariable int id) {
        return userDetailsService.getUserById(id);
    }

    @PostMapping("/user")
    public UserEntity saveUser(@RequestBody UserEntity userEntity) {
        userDetailsService.saveOrUpdate(userEntity);
        return userEntity;
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable int id) {
        userDetailsService.deleteUser(id);
    }


    
    @PutMapping("/user/{id}")
    public ResponseEntity<Integer> updateUser(@PathVariable int id, @RequestBody UserUpdate update) {
        userDetailsService.update(id, update);
        return new ResponseEntity<>(Integer.valueOf(id), HttpStatus.OK);
    }

}
