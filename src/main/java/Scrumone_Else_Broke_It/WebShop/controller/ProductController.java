package Scrumone_Else_Broke_It.WebShop.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import Scrumone_Else_Broke_It.WebShop.service.ProductService;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    ProductService productService;


    @GetMapping("/product")
    private List<Product> getAllProduct() {
        return productService.getAllProduct();
    }


    @GetMapping("/product/{id}")
    private Product getProductId(@PathVariable("id") int id) {
        return productService.getProductById(id);
    }


    @PostMapping("/product")
    public Product saveProduct(@RequestBody Product product) {
        productService.saveOrUpdate(product);
        return product;
    }


    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }


    @PutMapping("/product/{id}")
    public void editProduct(@PathVariable int id, @RequestBody Product product) {
        productService.edit(id, product);
    }


    /*@PatchMapping("product/{id}")
    public void patchProduct(@PathVariable int id) {
        try{
            Product product = productService.getProductById(id).get();
            product.
        }
        productService.getProductById(id);
        productService.edit(id, product);

    }*/
   /* @PatchMapping("product/{id}")
    public ResponseEntity<Product> partialUpdate(@RequestBody Product partialUpdate,@PathVariable("id") int id){
        productService.saveOrUpdate(partialUpdate);
        return productService.saveOrUpdate(partialUpdate);
    }*/
}
