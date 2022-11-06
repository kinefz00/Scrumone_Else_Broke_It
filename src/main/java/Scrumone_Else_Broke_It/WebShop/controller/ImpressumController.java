package Scrumone_Else_Broke_It.WebShop.controller;

import Scrumone_Else_Broke_It.WebShop.entity.Impressum;
import Scrumone_Else_Broke_It.WebShop.service.ImpressumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ImpressumController {

    @Autowired
    ImpressumService impressumService;


    @GetMapping("/impressum")
    private List<Impressum> getAllImpressum() {
        return impressumService.getAllImpressum();
    }


    @GetMapping("/impressum/{id}")
    private Impressum getImpressumId(@PathVariable("id") int id) {
        return impressumService.getImpressumById(id);
    }


    @PostMapping("/impressum")
    public Impressum saveImpressum(@RequestBody Impressum impressum) {
        impressumService.saveImpressum(impressum);
        return impressum;
    }


    @PutMapping("/impressum/{id}")
    public void editImpressum(@PathVariable int id, @RequestBody Impressum impressum) {
        impressumService.edit(id, impressum);
    }

}
