package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.controller.ImpressumController;
import Scrumone_Else_Broke_It.WebShop.entity.Impressum;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.repository.ImpressumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class ImpressumService {

    @Autowired
    private ImpressumRepository impressumRepository;
    public static Logger logger = Logger.getLogger(String.valueOf(ImpressumController.class));

    public List<Impressum> getAllImpressum() {
        List<Impressum> list = new ArrayList<Impressum>();
        impressumRepository.findAll().forEach(impressum -> list.add(impressum));
        return list;
    }


    public void saveImpressum(Impressum impressum) {
        logger.info("Save \"Impressum\"");
        impressumRepository.save(impressum);
    }

    public Impressum getImpressumById(int id) {
        logger.info("Get \"Impressum\" with id 1");
        return impressumRepository.findById(id).get();
    }

    public void edit(int id, Impressum impressum) {
        logger.info("Impressum was edited");
        impressum.setId(id);
        impressumRepository.save(impressum);
    }

}
