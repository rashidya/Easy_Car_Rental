package lk.easy.rental.controller;

import lk.easy.rental.util.ResponseUtil;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping()
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        System.out.println(dto.toString());
        customerService.saveCustomer(dto);
        return new ResponseUtil(200,"Customer added Successfully",null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchCustomer(@PathVariable String id){
        return new ResponseUtil(200,"OK", customerService.searchCustomer(id));
    }


    @GetMapping()
    public ResponseUtil getAllCustomer(){
        return new ResponseUtil(200,"OK", customerService.getAllCustomers());
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto){

        customerService.updateCustomer(dto);
        return new ResponseUtil(200,"Customer Updated Successfully",null );
    }


    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteCustomer(@RequestParam String id){
        customerService.deleteCustomer(id);
        return new ResponseUtil(200,"Customer Deleted Successfully",null );
    }
}
