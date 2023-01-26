package Scrumone_Else_Broke_It.WebShop.controller;


import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import Scrumone_Else_Broke_It.WebShop.entity.Wishlist;
import Scrumone_Else_Broke_It.WebShop.service.UserDetailsService;
import Scrumone_Else_Broke_It.WebShop.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/wishlist")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;

    @Autowired
    private UserDetailsService userDetailsService;


    @PostMapping("/add")
    public ResponseEntity<Wishlist> addWishlist(@RequestBody Product product, @RequestParam("username") String username){
        UserEntity user = userDetailsService.getUserByUsername(username);
        Wishlist wishlist = new Wishlist (user, product);
        wishlistService.createWishlist(wishlist);
        return new ResponseEntity<Wishlist>(new Wishlist(true, "add to wishlist"), HttpStatus.OK);
    }

    @GetMapping("/id")
    public List<Wishlist> getWishlist(@PathVariable int id ){
        return null;
    }
}
