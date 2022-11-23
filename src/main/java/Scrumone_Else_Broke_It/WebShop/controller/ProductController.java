package Scrumone_Else_Broke_It.WebShop.controller;

import java.util.List;

import Scrumone_Else_Broke_It.WebShop.entity.ProductUpdate;
import Scrumone_Else_Broke_It.WebShop.service.ProductService;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private final ProductService productService;
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


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


/*    @PutMapping("/product/{id}")
    public void editProduct(@PathVariable int id, @RequestBody Product product) {
        productService.edit(id, product);
    }*/

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/product/{id}")
    public ResponseEntity<Integer> update(@PathVariable int id, @RequestBody ProductUpdate update) {
        productService.update(id, update);
        return new ResponseEntity<>(Integer.valueOf(id), HttpStatus.OK);
    }


}
