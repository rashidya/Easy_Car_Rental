package lk.easy.rental.repo;

import lk.easy.rental.entity.Driver;
import lk.easy.rental.enums.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Driver findFirstByDriverAvailability(Availability availability);
}
