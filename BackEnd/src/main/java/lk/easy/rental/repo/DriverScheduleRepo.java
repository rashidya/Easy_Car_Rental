package lk.easy.rental.repo;

import lk.easy.rental.entity.DriverSchedule;
import lk.easy.rental.entity.DriverSchedule_PK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverScheduleRepo extends JpaRepository<DriverSchedule, DriverSchedule_PK> {
}
