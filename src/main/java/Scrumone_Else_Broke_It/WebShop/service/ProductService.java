package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.controller.ProductController;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class ProductService {
    public static Logger logger = Logger.getLogger(String.valueOf(ProductController.class));
    @Autowired
    private ProductRepository productRepository;

    public void saveOrUpdate(Product product) {
        logger.info("Product saved");
        productRepository.save(product);
    }


    public List<Product> getAllProduct() {
        List<Product> list = new ArrayList<Product>();
        productRepository.findAll().forEach(product -> list.add(product));
        return list;
    }

    public Product getProductById(int id) {
        logger.info("Get \"Product\" with the id: " + id);
        return productRepository.findById(id).get();
    }

    public void deleteProduct(int id) {
        logger.info("Delete \"Product\" with id: " + id);
        productRepository.deleteById(id);
    }

    public void edit(int id, Product product) {
        product.setId(id);
        productRepository.save(product);
        logger.info("Edit \"Product\" with id: " + id);
    }
}
