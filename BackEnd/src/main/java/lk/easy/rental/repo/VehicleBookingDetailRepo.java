package lk.easy.rental.repo;

import lk.easy.rental.entity.VehicleBookingDetails;
import lk.easy.rental.entity.VehicleBookingDetails_PK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleBookingDetailRepo extends JpaRepository<VehicleBookingDetails, VehicleBookingDetails_PK> {
    boolean existsByVehicleIdAndBookingId(String vehicleId,String bookingId);
}
