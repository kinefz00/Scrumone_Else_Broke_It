package Scrumone_Else_Broke_It.WebShop.repository;
import org.springframework.data.repository.CrudRepository;
import Scrumone_Else_Broke_It.WebShop.entity.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
}
