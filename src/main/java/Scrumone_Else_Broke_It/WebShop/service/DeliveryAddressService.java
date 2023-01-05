package Scrumone_Else_Broke_It.WebShop.service;


import Scrumone_Else_Broke_It.WebShop.controller.TechnicalDetailsController;
import Scrumone_Else_Broke_It.WebShop.entity.DeliveryAddress;
import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import Scrumone_Else_Broke_It.WebShop.repository.DeliveryAddressRepository;
import Scrumone_Else_Broke_It.WebShop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

@Service
public class DeliveryAddressService {

    public static Logger logger = Logger.getLogger(String.valueOf(TechnicalDetailsController.class));
    @Autowired
    public DeliveryAddressRepository deliveryAddressRepository;


    public void saveDeliveryAddress(DeliveryAddress deliveryAddress){
        logger.info("Angelegt");
        deliveryAddressRepository.save(deliveryAddress);
    }


    public List<DeliveryAddress> getDeliveryAddressList() {
        List<DeliveryAddress> list = new ArrayList<>();
        Iterator<DeliveryAddress> it = deliveryAddressRepository.findAll().iterator();
        while (it.hasNext()){
            list.add(it.next());
        }
        return list;
    }

    public DeliveryAddress getDeliveryAddressById(int id) {
        logger.info("Get \"TechnicalDetails\" with the id: " + id);
        return deliveryAddressRepository.findById(id).get();
    }

    public void deleteDeliveryAddress(int id) {
        logger.info("Delete \"TechnicalDetails\" with id: " + id);
        deliveryAddressRepository.deleteById(id);
    }

    public void edit(int id, DeliveryAddress deliveryAddress) {
        deliveryAddress.setId(id);
        deliveryAddressRepository.save(deliveryAddress);
        logger.info("Edit \"TechnicalDetails\" with id: " + id);
    }
    public DeliveryAddress assignDeliveryAddressToUser(
            @PathVariable int deliveryAddressId,
            @PathVariable String username
    ){
        DeliveryAddress deliveryAddress = deliveryAddressRepository.findById(deliveryAddressId).get();
        UserEntity user = userRepository.findById(username).get();
        deliveryAddress.assignUser(user);
        return deliveryAddressRepository.save(deliveryAddress);

    }
}
