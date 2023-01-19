package Scrumone_Else_Broke_It.WebShop.controller;


import Scrumone_Else_Broke_It.WebShop.entity.DeliveryAddress;
import Scrumone_Else_Broke_It.WebShop.entity.TechnicalDetails;
import Scrumone_Else_Broke_It.WebShop.service.TechnicalDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TechnicalDetailsController {
    @Autowired
    TechnicalDetailsService technicalDetailsService;


    @GetMapping("/product/{id}/technicalDetails")
    private List<TechnicalDetails> getAllTechnicalDetails(@PathVariable int id) {
        return technicalDetailsService.getTechnicalDetailsForProduct(id);
    }

    @PostMapping("/product/{id}/technicalDetails")
    public TechnicalDetails saveTechnicalDetailsForProducts(@PathVariable int id, @RequestBody TechnicalDetails technicalDetails) {
        return technicalDetailsService.saveTechnicalDetailsForProducts(id, technicalDetails);
    }

    @GetMapping("/technicalDetails/{id}")
    private TechnicalDetails getTechnicalDetailsId(@PathVariable("id") int id) {
        return technicalDetailsService.getTechnicalDetailsById(id);
    }


    @PostMapping("/technicalDetails")
    public void saveTechnicalDetails(@RequestBody TechnicalDetails technicalDetails) {
        technicalDetailsService.saveTechnicalDetails(technicalDetails);

    }


    @DeleteMapping("/technicalDetails/{id}")
    public void deleteTechnicalDetails(@PathVariable int id) {
        technicalDetailsService.deleteTechnicalDetails(id);
    }


    @PutMapping("/technicalDetails/{id}")
    public void editTechnicalDetails(@PathVariable int id, @RequestBody TechnicalDetails technicalDetails) {
        technicalDetailsService.edit(id, technicalDetails);
    }

     /*@PutMapping("/{technicalDetailsId}/product/{productId}")
    public void assignTechnicalDetailsToProduct(
            @PathVariable int technicalDetailsId,
            @PathVariable int productId
    ) {
        this.technicalDetailsService.assignTechnicalDetailsToProduct(technicalDetailsId, productId);
    }*/
}
