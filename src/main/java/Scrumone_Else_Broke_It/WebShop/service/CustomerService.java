package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.entity.Customer;
import Scrumone_Else_Broke_It.WebShop.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public void saveOrUpdate(Customer customer) {
        customerRepository.save(customer);
    }


    public List<Customer> getAllCustomer() {
        List<Customer> list = new ArrayList<Customer>();
        customerRepository.findAll().forEach(customer -> list.add(customer));
        return list;
    }

    public Customer getCustomerById(int id) {
        return customerRepository.findById(id).get();
    }

    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }

    public void edit(int id, Customer customer) {
        customer.setId(id);
        customerRepository.save(customer);
    }
}
