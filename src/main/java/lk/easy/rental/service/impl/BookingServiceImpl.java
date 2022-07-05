package lk.easy.rental.service.impl;

import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.BookingRepo;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private BookingRepo bookingRepo;
    @Override
    public void placeBooking(BookingDTO dto) {
        if (!bookingRepo.existsById(dto.getBooking_Id())) {
            bookingRepo.save(mapper.map(dto, Booking.class));

        }else {
            throw new DuplicateEntryException("Booking already exists with this Id");
        }

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
        if (bookingRepo.existsById(dto.getBooking_Id())) {
            bookingRepo.save(mapper.map(dto,Booking.class));
        }else {
            throw new NotFoundException("There is no Booking with ID- " +dto.getBooking_Id());
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
}
