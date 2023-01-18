package Scrumone_Else_Broke_It.WebShop.repository;

import Scrumone_Else_Broke_It.WebShop.entity.DeliveryAddress;
import org.springframework.data.repository.CrudRepository;
import org.yaml.snakeyaml.events.Event;

public interface DeliveryAddressRepository extends CrudRepository<DeliveryAddress, Integer> {

}
