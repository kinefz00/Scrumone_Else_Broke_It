package Scrumone_Else_Broke_It.WebShop.controller;


import Scrumone_Else_Broke_It.WebShop.entity.Impressum;
import Scrumone_Else_Broke_It.WebShop.service.ImpressumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ImpressumController {

    @Autowired
    ImpressumService impressumService;

    @GetMapping("/impressum/{Id}")
    private Impressum getImpressumId(@PathVariable("id") int id) {
        return impressumService.getImpressumById(id);
    }

    @PostMapping("/impressum")
    public Impressum saveImpressum(@RequestBody Impressum impressum){
        impressumService.saveOrUpdateImpressum(impressum);
        return impressum;
    }


}
