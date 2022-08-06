package lk.easy.rental.service.impl;

import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.VehicleBookingDetailDTO;
import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.enums.RequestType;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.*;
import lk.easy.rental.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private VehicleBookingDetailRepo vehicleBookingDetailRepo;
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private DriverRepo driverRepo;
    @Autowired
    private VehicleRepo vehicleRepo;

    @Override
    public void placeBooking(BookingDTO dto) {
        if (!bookingRepo.existsById(dto.getBookingId())) {
            if(customerRepo.existsById(dto.getCustomer().getId())){
                if (!dto.getBookedVehicleList().isEmpty()){
                    System.out.println(dto.getNeedDriver());
                        if (dto.getNeedDriver() == RequestType.YES){
                            //Driver is needed

                            if (!dto.getDriverScheduleList().isEmpty()) {
                                System.out.println("Here");
                                bookingRepo.save(mapper.map(dto, Booking.class));
                            }
                        }else {
                            //No driver Is needed

                            bookingRepo.save(mapper.map(dto, Booking.class));
                        }

                }else {
                    throw new RuntimeException("No vehicles added for the booking..!");
                }

            }else {
                throw new NotFoundException("Customer Not Found..!");
            }

        }else {
            throw new DuplicateEntryException("Booking already exists with this Id");
        }

        //update the vehicle

            /*for (OrderDetails  : dto.getBookedVehicleList()) {
                Item item = itemRepo.findById(orderDetail.getItemCode()).get();
                item.setQtyOnHand(item.getQtyOnHand() - orderDetail.getQty());
                itemRepo.save(item);
            }*/

    }

    @Override
    public BookingDTO searchBooking(String id) {
        if (bookingRepo.existsById(id)) {

            return mapper.map(bookingRepo.findById(id), BookingDTO.class);
        }else {
            throw new NotFoundException(id+" - Booking Not Found");
        }
    }

    @Override
    public void updateBooking(BookingDTO dto) {
        if (bookingRepo.existsById(dto.getBookingId())) {
            bookingRepo.save(mapper.map(dto,Booking.class));
        }else {
            throw new NotFoundException("There is no Booking with ID- " +dto.getBookingId());
        }
    }

    @Override
    public void cancelBooking(String id) {
        if (bookingRepo.existsById(id)) {
            bookingRepo.deleteById(id);
        }else {
            throw new NotFoundException(id+" - Booking Not Found");
        }
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        if (!bookingRepo.findAll().isEmpty()) {
            return mapper.map(bookingRepo.findAll(), new TypeToken<List<BookingDTO>>() {
            }.getType());
        }else{
            throw new NotFoundException("There is no Bookings");
        }
    }

    @Override
    public String generateBookingId() {
        String bookingId = bookingRepo.findFirstByOrderByBookingIdDesc().getBookingId();
        int index = Integer.parseInt(bookingId.split("-")[1])+1;

        return (index>=100)?"B-"+index:(index>=10)?"B-0"+index:"B-00"+index;
    }


    //Filter





}
