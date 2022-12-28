package Scrumone_Else_Broke_It.WebShop.controller;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.entity.TechnicalDetails;
import Scrumone_Else_Broke_It.WebShop.repository.DeliveryAddressRepository;
import Scrumone_Else_Broke_It.WebShop.service.DeliveryAddressService;
import Scrumone_Else_Broke_It.WebShop.service.ProductService;
import Scrumone_Else_Broke_It.WebShop.service.TechnicalDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DeliveryAddressController {

    @Autowired
    DeliveryAddressService deliveryAddressService;
    @Autowired
    DeliveryAddressRepository deliveryAddressRepository;


}
