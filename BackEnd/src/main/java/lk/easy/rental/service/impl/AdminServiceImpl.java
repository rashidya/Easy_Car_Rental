package lk.easy.rental.service.impl;

import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DashBoardSummeryDTO;
import lk.easy.rental.entity.*;
import lk.easy.rental.enums.Availability;
import lk.easy.rental.enums.BookingStatus;
import lk.easy.rental.enums.RequestType;
import lk.easy.rental.enums.Role;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.*;
import lk.easy.rental.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private DriverRepo driverRepo;


    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private UserRequestRepo userRequestRepo;


    @Override
    public void saveAdmin(AdminDTO dto) {
        if (!adminRepo.existsById(dto.getAdminId())) {
            if (!userRepo.existsByUserName(dto.getUser().getUserName())) {
                adminRepo.save(mapper.map(dto, Admin.class));
            } else {
                throw new DuplicateEntryException("User already exists with this Username");
            }
        } else {
            throw new DuplicateEntryException("Admin already exists with this Id");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (adminRepo.existsById(id)) {

            return mapper.map(adminRepo.findById(id), AdminDTO.class);
        } else {
            throw new NotFoundException(id + " - Admin Not Found");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmins() {
        if (!adminRepo.findAll().isEmpty()) {
            return mapper.map(adminRepo.findAll(), new TypeToken<List<AdminDTO>>() {
            }.getType());
        } else {
            throw new NotFoundException("There is no Admins");
        }
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        Admin adminToBeUpdated = adminRepo.findById(dto.getAdminId()).get();

        if (adminRepo.existsById(dto.getAdminId())) {
            if (userRepo.existsById(dto.getUser().getUserId())) {
                if (adminToBeUpdated.getUser().getUserId() == dto.getUser().getUserId()) {
                    adminRepo.save(mapper.map(dto, Admin.class));
                } else {
                    throw new DuplicateEntryException("User Id does not match");
                }

            } else {
                throw new DuplicateEntryException("There is no user  with ID- " + dto.getUser().getUserId());
            }

        } else {
            throw new NotFoundException("There is no admin  with ID- " + dto.getAdminId());
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(id)) {
            adminRepo.deleteById(id);
        } else {
            throw new NotFoundException(id + " - Admin Not Found");
        }
    }

    @Override
    public DashBoardSummeryDTO loadDashBoardSummery() {
        int totalRegisteredUsers = userRepo.countByRole(Role.REGISTERED_USER);
        int bookingsForDay = bookingRepo.countByPickupDate(LocalDate.now());
        int noOfAvailableCars =vehicleRepo.countByVehicleAvailability(Availability.AVAILABLE);
        int noOfReservedCars=0;
        int noOfActiveBookings=bookingRepo.countByPickupTime(LocalTime.now());
        int noOfAvailableDrivers=0/*driverRepo.countByDriverAvailability(Availability.AVAILABLE)*/;
        int noOfOccupiedDrivers=0/*driverRepo.countByDriverAvailability(Availability.NOT_AVAILABLE)*/;
        int noOfCarsNeedMaintenance=0;
        int noOfCarsNeedToBeRepaired=0;

        return new DashBoardSummeryDTO(totalRegisteredUsers, bookingsForDay, noOfAvailableCars, noOfReservedCars,noOfActiveBookings,noOfAvailableDrivers,noOfOccupiedDrivers,noOfCarsNeedMaintenance,noOfCarsNeedToBeRepaired);
    }

    @Override
    public void acceptCustomer(CustomerDTO dto) {

        UserRequest userRequest = userRequestRepo.findById(dto.getId()).get();
        User user = mapper.map(userRequest.getUser(), User.class);
        Customer customer = mapper.map(dto, Customer.class);
        customer.setUser(user);

        customerRepo.save(customer);
        userRequestRepo.deleteById(dto.getId());

    }

    @Override
    public void denyCustomer(String denyCustomer) {
        userRequestRepo.deleteById(denyCustomer);

    }

    @Override
    public List<CustomerDTO> loadUserRequests() {
        return mapper.map(userRequestRepo.findAll(),new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }


    @Override
    public void acceptBookingRequest(String id) {

        Booking bookingRequest = bookingRepo.findById(id).get();
        bookingRequest.setStatus(BookingStatus.ACCEPTED);
        bookingRepo.save(bookingRequest);


    }

    @Override
    public void denyBookingRequest(String id,String reason) {
        Booking bookingRequest = bookingRepo.findById(id).get();
        bookingRequest.setStatus(BookingStatus.DENIED);
        bookingRequest.setDeniedReason(reason);
        bookingRepo.save(bookingRequest);

    }


    @Override
    public void notifyMaintenance() {
        List<Vehicle> allVehicles = vehicleRepo.findAll();

        for (Vehicle vehicle : allVehicles) {

            int lastServiceMileage = vehicle.getLastServiceMileage();
            int mileage = vehicle.getMileage();

            if (mileage >= (lastServiceMileage+5000)){
                vehicle.setNeedMaintenance(RequestType.YES);
            }else {
                vehicle.setNeedMaintenance(RequestType.NO);
            }
            vehicleRepo.save(vehicle);
        }
    }

}
