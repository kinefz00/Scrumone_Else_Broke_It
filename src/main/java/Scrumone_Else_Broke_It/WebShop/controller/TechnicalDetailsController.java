package Scrumone_Else_Broke_It.WebShop.controller;


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


    @GetMapping("/technicalDetails")
    private List<TechnicalDetails> getAllTechnicalDetails() {
        return technicalDetailsService.getTechnicalDetailsList();
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

     @PutMapping("/{technicalDetailsId}/product/{productId}")
    public void assignTechnicalDetailsToProduct(
            @PathVariable int technicalDetailsId,
            @PathVariable int productId
    ) {
        this.technicalDetailsService.assignTechnicalDetailsToProduct(technicalDetailsId, productId);
    }
}
