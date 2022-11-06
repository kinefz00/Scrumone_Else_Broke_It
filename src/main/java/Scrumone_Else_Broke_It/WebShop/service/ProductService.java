package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public void saveOrUpdate(Product product) {
        productRepository.save(product);
    }


    public List<Product> getAllProduct() {
        List<Product> list = new ArrayList<Product>();
        productRepository.findAll().forEach(product -> list.add(product));
        return list;
    }

    public Product getProductById(int id) {
        return productRepository.findById(id).get();
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public void edit(int id, Product product) {
        product.setId(id);
        productRepository.save(product);
    }
}
