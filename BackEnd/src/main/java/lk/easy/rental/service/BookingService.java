package lk.easy.rental.service;

import lk.easy.rental.dto.BookingDTO;

import java.util.List;

public interface BookingService {
    void placeBooking(BookingDTO dto);

    BookingDTO searchBooking(String id);

    void updateBooking(BookingDTO dto);

    void cancelBooking(String id);

    List<BookingDTO> getAllBookings();
}
