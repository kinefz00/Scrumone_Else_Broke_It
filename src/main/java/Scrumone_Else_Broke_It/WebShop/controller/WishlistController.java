package Scrumone_Else_Broke_It.WebShop.controller;

import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import Scrumone_Else_Broke_It.WebShop.entity.Wishlist;
import Scrumone_Else_Broke_It.WebShop.service.ProductService;
import Scrumone_Else_Broke_It.WebShop.service.UserDetailsService;
import Scrumone_Else_Broke_It.WebShop.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class WishlistController {
    public static Logger logger = Logger.getLogger(String.valueOf(UserController.class));
    @Autowired
    private WishlistService wishlistService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private ProductService productService;


    @GetMapping("/wishlist")
    public ResponseEntity<List<Product>> getWishList(@PathVariable String username) {
        username = String.valueOf(userDetailsService.getUserByUsername(username));
        List<Wishlist> body = wishlistService.readWishList(username);
        List<Product> products = new ArrayList<Product>();
        for (Wishlist wishList : body) {
            products.add(productService.getProductById(wishList.getId()));
        }

        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

    @PostMapping("/wishlist/{username}/{productId}")
    public ResponseEntity<Wishlist> addWishList(@PathVariable int id, @PathVariable String username) {
        UserEntity user = userDetailsService.getUserByUsername(username);
        Product product = productService.getProductById(id);
        logger.info("Username "+ username );
        logger.info("ProductId " + id);
        logger.info(" User: "+user);
        logger.info("Product" +product);
        Wishlist wishList = new Wishlist(product, user);
        wishlistService.createWishlist(wishList);
        return new ResponseEntity<Wishlist>(new Wishlist(product, user), HttpStatus.CREATED);


    }

}