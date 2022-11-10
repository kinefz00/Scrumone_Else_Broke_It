package Scrumone_Else_Broke_It.WebShop.controller;

import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import Scrumone_Else_Broke_It.WebShop.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserDetailsService userDetailsService;

    @GetMapping("/user")
    private List<UserEntity> getAllUser() {
        return userDetailsService.getAllUser();
    }

    @GetMapping("/user/{username}")
    private UserEntity getUserByUsername(@PathVariable String username) {
        return userDetailsService.getUserByUsername(username);
    }

    @PostMapping("/user")
    public UserEntity saveUser(@RequestBody UserEntity userEntity) {
        userDetailsService.saveOrUpdate(userEntity);
        return userEntity;
    }

    @DeleteMapping("/user/{username}")
    public void deleteUser(@PathVariable String username) {
        userDetailsService.deleteUser(username);
    }

    @PutMapping("/user/{username}")
    public void editUser(@PathVariable String username, @RequestBody UserEntity userEntity) {
        userDetailsService.edit(username, userEntity);
    }


    /*@PatchMapping("user/{username}")
    public void patchUser(@PathVariable String username, @RequestBody UserEntity userEntity) {
        userDetailsService.edit(username, userEntity);
    }*/
}
