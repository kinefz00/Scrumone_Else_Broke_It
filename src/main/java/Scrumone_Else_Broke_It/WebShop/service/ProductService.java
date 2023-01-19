package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.controller.ProductController;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.entity.ProductUpdate;
import Scrumone_Else_Broke_It.WebShop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;


@Service
public class ProductService {
    public static Logger logger = Logger.getLogger(String.valueOf(ProductController.class));

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void saveOrUpdate(Product product) {
        logger.info("Product saved");
        productRepository.save(product);
    }


    public Optional<Product> findById(int id){
        return Optional.ofNullable(productRepository.findById(id));
    }


    public List<Product> getAllProduct() {
        List<Product> list = new ArrayList<Product>();
        productRepository.findAll().forEach(product -> list.add(product));
        return list;
    }

    public Product getProductById(int id) {
        logger.info("Get \"Product\" with the id: " + id);
        return productRepository.findById(id);
    }

    public void deleteProduct(int id) {
        logger.info("Delete \"Product\" with id: " + id);
        productRepository.deleteById(id);
    }

/*    public void edit(int id, Product product) {
        product.setId(id);
        productRepository.save(product);
        logger.info("Edit \"Product\" with id: " + id);
    }*/

    public void update(int id, ProductUpdate update){
        findById(id).ifPresent(x -> {
            update.getCategory().ifPresent(c -> {
                x.setCategory(c);
            });
            update.getCurrency().ifPresent(c -> {
                x.setCurrency(c);
            });
            update.getName().ifPresent(n -> {
                x.setName(n);
            });
            update.getPrice().ifPresent(p -> {
                x.setPrice(p);
            });
            update.getDescription().ifPresent(d -> {
                x.setDescription(d);
            });
            logger.info("Edit \"Product\" with id: " + id);
            productRepository.save(x);
        });
    }


    //
    public List<Product> findAllWithCategory(String category) {
        //return productRepository.findAll()
        //        .stream()
        //        .filter(x -> x.getCategory().equals(category))
        //        .collect(Collectors.toList());

        ArrayList<Product> result = new ArrayList<>();
        for(Product p : productRepository.findAll()){
            if(p.getCategory().equals(category)){
                result.add(p);
            }
        }
        return result;
    }



}

