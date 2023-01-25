package Scrumone_Else_Broke_It.WebShop.repository;

import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import Scrumone_Else_Broke_It.WebShop.entity.Product;


public interface ProductRepository extends JpaRepository<Product, Integer> {
    Product findById (int id);
}
