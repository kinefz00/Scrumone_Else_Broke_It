package Scrumone_Else_Broke_It.WebShop.controller;

import Scrumone_Else_Broke_It.WebShop.entity.Impressum;
import Scrumone_Else_Broke_It.WebShop.entity.Product;
import Scrumone_Else_Broke_It.WebShop.service.ImpressumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ImpressumController {

    @Autowired
    ImpressumService impressumService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/impressum")
    private List<Impressum> getAllImpressum(){
        return impressumService.getAllImpressum();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/impressum/{id}")
    private Impressum getImpressumId(@PathVariable("id") int id) {
        return impressumService.getImpressumById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/impressum")
    public Impressum saveImpressum(@RequestBody Impressum impressum) {
        impressumService.saveImpressum(impressum);
        return impressum;
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/impressum/{id}")
    public void editImpressum(@PathVariable int id, @RequestBody Impressum impressum) {
        impressumService.edit(id, impressum);
    }

}
