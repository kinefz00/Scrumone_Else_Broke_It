package Scrumone_Else_Broke_It.WebShop.controller;


import Scrumone_Else_Broke_It.WebShop.entity.Impressum;
import Scrumone_Else_Broke_It.WebShop.service.ImpressumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class ImpressumController {

    @Autowired
    ImpressumService impressumService;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/impressum/{id}")
    private Impressum getImpressumId(@PathVariable("id") int id) {
        return impressumService.getImpressumById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/impressum")
    public Impressum saveImpressum(@RequestBody Impressum impressum){
        impressumService.saveOrUpdateImpressum(impressum);
        return impressum;
    }


}
