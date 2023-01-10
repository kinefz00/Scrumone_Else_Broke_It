package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.controller.TechnicalDetailsController;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.entity.TechnicalDetails;
import Scrumone_Else_Broke_It.WebShop.repository.ProductRepository;
import Scrumone_Else_Broke_It.WebShop.repository.TechnicalDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

@Service
public class TechnicalDetailsService {
    public static Logger logger = Logger.getLogger(String.valueOf(TechnicalDetailsController.class));
    @Autowired
    public TechnicalDetailsRepository technicalDetailsRepository;

    @Autowired
    public ProductRepository productRepository;
    


    public void saveTechnicalDetails(TechnicalDetails technicalDetails) {
        logger.info("Angelegt");
        technicalDetailsRepository.save(technicalDetails);
    }


    public List<TechnicalDetails> getTechnicalDetailsList() {
        List<TechnicalDetails> list = new ArrayList<>();
        Iterator<TechnicalDetails> it = technicalDetailsRepository.findAll().iterator();
        while (it.hasNext()) {
            list.add(it.next());
        }
        return list;
    }

    public TechnicalDetails getTechnicalDetailsById(int id) {
        logger.info("Get \"TechnicalDetails\" with the id: " + id);
        return technicalDetailsRepository.findById(id).get();
    }

    public void deleteTechnicalDetails(int id) {
        logger.info("Delete \"TechnicalDetails\" with id: " + id);
        technicalDetailsRepository.deleteById(id);
    }

    public void edit(int id, TechnicalDetails technicalDetails) {
        technicalDetails.setId(id);
        technicalDetailsRepository.save(technicalDetails);
        logger.info("Edit \"TechnicalDetails\" with id: " + id);
    }

    public TechnicalDetails assignTechnicalDetailsToProduct(
            @PathVariable int technicalDetailsId,
            @PathVariable int productId
    ) {
        TechnicalDetails technicalDetails = technicalDetailsRepository.findById(technicalDetailsId).get();
        Product product = productRepository.findById(productId).get();
        technicalDetails.assignProduct(product);
        return technicalDetailsRepository.save(technicalDetails);

    }
}
