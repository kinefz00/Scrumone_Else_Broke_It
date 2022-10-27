package Scrumone_Else_Broke_It.WebShop.controller;

import java.util.List;

import Scrumone_Else_Broke_It.WebShop.Service.ProductService;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/product")
    private List<Product> getAllProduct(){
        return productService.getAllProduct();
    }
    @GetMapping("/product/{id}")
    private Product getProductId(@PathVariable("id") int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/product/{name}")
    private Product getProductName(@PathVariable("name") String name){
        return productService.getProductByName(name);
    }
    
}
