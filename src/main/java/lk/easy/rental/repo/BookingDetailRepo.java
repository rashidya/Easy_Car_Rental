package lk.easy.rental.repo;

import lk.easy.rental.entity.BookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingDetailRepo extends JpaRepository<BookingDetails,String> {
}
