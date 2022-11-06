package Scrumone_Else_Broke_It.WebShop.controller;

import Scrumone_Else_Broke_It.WebShop.entity.Customer;
import Scrumone_Else_Broke_It.WebShop.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping("/customer")
    private List<Customer> getAllUser() {
        return customerService.getAllCustomer();
    }

    @GetMapping("/customer/{id}")
    private Customer getCustomerId(@PathVariable("id") int id) {
        return customerService.getCustomerById(id);
    }

    @PostMapping("/customer")
    public Customer saveCustomer(@RequestBody Customer customer) {
        customerService.saveOrUpdate(customer);
        return customer;
    }

    @DeleteMapping("/customer/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteCustomer(id);
    }

    @PutMapping("/customer/{id}")
    public void editCustomer(@PathVariable int id, @RequestBody Customer customer) {
        customerService.edit(id, customer);
    }


    @PatchMapping("customer/{id}")
    public void patchCustomer(@PathVariable int id, @RequestBody Customer customer) {
        customerService.edit(id, customer);
    }
}
