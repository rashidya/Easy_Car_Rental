package lk.easy.rental.repo;

import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.VehicleBookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

    List<Booking> findAllByPickupDateAndReturnDate(LocalDate pickUpDate, LocalDate returnDate);

    List<Booking> findAllByReturnDateIsAfterAndPickupDateIsBefore(LocalDate pickUpDate, LocalDate returnDate);

    // find Bookings for a day
    //List<Booking>  findAllByPickupDateOrReturnDate(LocalDate date);

    //No Of Bookings Per Day
    int countByPickupDate(LocalDate date);

    //No of Active Bookings

    int countByPickupDateAndPickupTimeOrReturnDateIsAfter(LocalDate date, LocalTime time,LocalDate d);
}
