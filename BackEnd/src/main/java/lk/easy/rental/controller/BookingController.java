package lk.easy.rental.controller;

import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.service.BookingService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("booking")
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping()
    public ResponseUtil placeBooking(@RequestBody BookingDTO dto){
        bookingService.placeBooking(dto);
        return new ResponseUtil(200,"Booking placed Successfully",null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchBooking(@PathVariable String id){
        return new ResponseUtil(200,"OK", bookingService.searchBooking(id));
    }

    @GetMapping("generateBookingId")
    public ResponseUtil generateBookingId( ){
        return new ResponseUtil(200,"OK", bookingService.generateBookingId());
    }


    @GetMapping()
    public ResponseUtil getAllBookings(){
        return new ResponseUtil(200,"OK", bookingService.getAllBookings());
    }

    @PutMapping
    public ResponseUtil updateBooking(@RequestBody BookingDTO dto){

        bookingService.updateBooking(dto);
        return new ResponseUtil(200,"Booking Updated Successfully",null );
    }


    @DeleteMapping(params = {"id"})
    public ResponseUtil cancelBooking(@RequestParam String id){
        bookingService.cancelBooking(id);
        return new ResponseUtil(200,"Booking canceled Successfully",null );
    }
}
