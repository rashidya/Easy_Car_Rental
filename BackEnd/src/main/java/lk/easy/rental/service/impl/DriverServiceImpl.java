package lk.easy.rental.service.impl;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.dto.DriverScheduleDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.entity.*;
import lk.easy.rental.enums.Availability;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.BookingRepo;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.DriverRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BookingRepo bookingRepo;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!driverRepo.existsById(dto.getId())) {
            if(!userRepo.existsByUserName(dto.getUser().getUserName())){
                driverRepo.save(mapper.map(dto, Driver.class));
            }else{
                throw new DuplicateEntryException("User already exists with this Username");
            }
        }else {
            throw new DuplicateEntryException("Driver already exists with this Id");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (driverRepo.existsById(id)) {

            return mapper.map(driverRepo.findById(id), DriverDTO.class);
        }else {
            throw new NotFoundException(id+" - Driver Not Found");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        if (!driverRepo.findAll().isEmpty()) {
            return mapper.map(driverRepo.findAll(), new TypeToken<List<DriverDTO>>() {
            }.getType());
        }else{
            throw new NotFoundException("There is no Drivers");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getId())) {
            driverRepo.save(mapper.map(dto,Driver.class));
        }else {
            throw new NotFoundException("There is no Driver  with ID- " +dto.getId());
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(id)) {
            driverRepo.deleteById(id);
        }else {
            throw new NotFoundException(id+" - Driver Not Found");
        }
    }

   /* @Override
    public DriverDTO getAvailableDriver() {
        Driver availableDriver = driverRepo.findFirstByDriverAvailability(Availability.AVAILABLE);

        return mapper.map(availableDriver,DriverDTO.class);
    }*/

    @Override
    public DriverDTO searchDriverByUserName(String userName) {
        return mapper.map(driverRepo.findByUser(userRepo.findByUserName(userName)),DriverDTO.class);
    }


    @Override
    public DriverDTO loadAvailableDriver(LocalDate pickupDate, LocalDate dropOffDate) {
        LocalDate pickUpDate = pickupDate.minusDays(1);
        LocalDate returnDate = dropOffDate.plusDays(1);
        List<Booking> notAvailableBookingList = bookingRepo.findAllByReturnDateIsAfterAndPickupDateIsBefore(pickUpDate, returnDate);
        List<Driver> notAvailableDrivers = new ArrayList<>();


        for (Booking booking : notAvailableBookingList) {
            for (DriverSchedule bookedDriver : booking.getDriverScheduleList()) {
                notAvailableDrivers.add(bookedDriver.getDriver());
            }
        }


        L1:
        for (Driver temp : driverRepo.findAll()) {
            L2:
            for (Driver notAvailableDriver : notAvailableDrivers) {
                if (temp.getId().equals(notAvailableDriver.getId())) {
                    continue L1;
                } else {
                    continue L2;
                }
            }

          return   mapper.map(temp, DriverDTO.class);

        }
        throw new RuntimeException("No Driver Available");
    }

    @Override
    public List<DriverScheduleDTO> getDriverScheduleForDriver(String id) {
       return null;

    }
}
