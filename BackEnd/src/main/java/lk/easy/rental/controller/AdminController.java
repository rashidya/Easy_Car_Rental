package lk.easy.rental.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.service.AdminService;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping()
    public ResponseUtil saveAdmin(@RequestBody AdminDTO dto){

        adminService.saveAdmin(dto);
        return new ResponseUtil(200,"Admin added Successfully",null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchAdmin(@PathVariable String id){
        return new ResponseUtil(200,"OK", adminService.searchAdmin(id));
    }


    @GetMapping()
    public ResponseUtil getAllAdmins(){
        return new ResponseUtil(200,"OK", adminService.getAllAdmins());
    }

    @PutMapping
    public ResponseUtil updateAdmins(@RequestBody AdminDTO dto){

        adminService.updateAdmin(dto);
        return new ResponseUtil(200,"Admin Updated Successfully",null );
    }


    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteAdmin(@RequestParam String id){
        adminService.deleteAdmin(id);
        return new ResponseUtil(200,"Admin Deleted Successfully",null );
    }

    @GetMapping("dashBoardSummery")
    public ResponseUtil loadDashBoardSummery(){
        return new ResponseUtil(200,"OK", adminService.loadDashBoardSummery());
    }

    @PostMapping("acceptCustomer")
    public ResponseUtil acceptCustomer(@RequestBody CustomerDTO dto){

        adminService.acceptCustomer(dto);
        return new ResponseUtil(200,"OK",null);
    }

    @DeleteMapping( params = {"denyCustomerId"})
    public ResponseUtil denyCustomer(@RequestParam String denyCustomerId){

        adminService.denyCustomer(denyCustomerId);
        return new ResponseUtil(200,"OK",null);
    }


    @GetMapping("loadUserRequests")
    public ResponseUtil loadUserRequests(){
        return new ResponseUtil(200,"OK", adminService.loadUserRequests());
    }



    @PutMapping(params = {"id"})
    public ResponseUtil acceptBookingRequest(@RequestParam String id){

        adminService.acceptBookingRequest(id);
        return new ResponseUtil(200,"Booking added Successfully",null);
    }

    @PutMapping( params = {"id","reason"})
    public ResponseUtil denyBookingRequest(@RequestParam String id,@RequestParam String reason){

        adminService.denyBookingRequest(id,reason);
        return new ResponseUtil(200,"Booking denied",null);
    }

    @GetMapping("calculatePayment")
    public ResponseUtil calculatePayment(){
        return new ResponseUtil(200,"OK", adminService.loadUserRequests());
    }



    @PutMapping("notifyMaintenance")
    public ResponseUtil notifyMaintenance(){
        adminService.notifyMaintenance();
        return new ResponseUtil(200,"OK", null);
    }




}
