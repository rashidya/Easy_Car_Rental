package lk.easy.rental.controller;

import lk.easy.rental.dto.PaymentDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.service.PaymentService;
import lk.easy.rental.service.VehicleService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("payment")
@CrossOrigin
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping()
    public ResponseUtil addPayment(@RequestBody PaymentDTO dto){

        paymentService.addPayment(dto);
        return new ResponseUtil(200,"Payment added Successfully",null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchPayment(@PathVariable String id){
        return new ResponseUtil(200,"OK", paymentService.searchPayment(id));
    }


    @GetMapping()
    public ResponseUtil getAllPayments(){
        return new ResponseUtil(200,"OK", paymentService.getAllPayments());
    }

    @PutMapping
    public ResponseUtil updatePayment(@RequestBody PaymentDTO dto){

        paymentService.updatePayment(dto);
        return new ResponseUtil(200,"Payment Updated Successfully",null );
    }


    @DeleteMapping(params = {"id"})
    public ResponseUtil deletePayment(@RequestParam String id){
        paymentService.deletePayment(id);
        return new ResponseUtil(200,"Payment Deleted Successfully",null );
    }
}
