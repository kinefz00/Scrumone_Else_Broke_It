package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.entity.Impressum;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.repository.ImpressumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImpressumService {

    @Autowired
    private ImpressumRepository impressumRepository;

    public List<Impressum> getAllImpressum(){
        List<Impressum> list = new ArrayList<Impressum>();
        impressumRepository.findAll().forEach(impressum -> list.add(impressum));
        return list;
    }


    public void saveImpressum(Impressum impressum){
        impressumRepository.save(impressum);
    }

    public Impressum getImpressumById(int id){return impressumRepository.findById(id).get();
    }

    public void edit(int id, Impressum impressum){
        impressum.setId(id);
        impressumRepository.save(impressum);
    }

}
