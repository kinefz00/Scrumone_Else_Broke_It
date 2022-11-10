package Scrumone_Else_Broke_It.WebShop.controller;


import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/public/v1")
public class AuthentificationController {
    @GetMapping(path = "/basicauth")
    public ResponseEntity<UserEntity> login(Principal principle){
        String name = principle.getName();
        System.out.println(name);
        return new ResponseEntity<UserEntity>(
                new UserEntity(),
                HttpStatus.OK
        );

    }


}
