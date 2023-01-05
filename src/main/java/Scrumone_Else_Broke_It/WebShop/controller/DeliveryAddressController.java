package Scrumone_Else_Broke_It.WebShop.controller;
import Scrumone_Else_Broke_It.WebShop.entity.DeliveryAddress;
import Scrumone_Else_Broke_It.WebShop.repository.DeliveryAddressRepository;
import Scrumone_Else_Broke_It.WebShop.service.DeliveryAddressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DeliveryAddressController {

    @Autowired
    DeliveryAddressService deliveryAddressService;

    @GetMapping("/deliveryAddress")
    private List<DeliveryAddress> getAllDeliveryAddress() {
        return deliveryAddressService.getDeliveryAddressList();
    }

    @GetMapping("/deliveryAddress/{id}")
    private DeliveryAddress getDeliveryAddressId(@PathVariable("id") int id) {
        return deliveryAddressService.getDeliveryAddressById(id);
    }


    @PostMapping("/deliveryAddress")
    public void saveDeliveryAddress(@RequestBody DeliveryAddress deliveryAddress) {
        deliveryAddressService.saveDeliveryAddress(deliveryAddress);

    }


    @DeleteMapping("/deliveryAddress/{id}")
    public void deleteDeliveryAddress(@PathVariable int id) {
        deliveryAddressService.deleteDeliveryAddress(id);
    }


    @PutMapping("/deliveryAddress/{id}")
    public void editDeliveryAddress(@PathVariable int id, @RequestBody DeliveryAddress deliveryAddress) {
        deliveryAddressService.edit(id, deliveryAddress);
    }
    @PutMapping("/{deliveryAddressId}/user/{username}")
    public void assignDeliveryAddressToUser(
            @PathVariable int deliveryAddressId,
            @PathVariable String username
    ) {
        this.deliveryAddressService.assignDeliveryAddressToUser(deliveryAddressId, username);
    }
}
