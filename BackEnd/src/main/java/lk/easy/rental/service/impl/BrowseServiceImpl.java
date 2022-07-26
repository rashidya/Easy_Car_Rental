package lk.easy.rental.service.impl;

import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Vehicle;
import lk.easy.rental.entity.VehicleBookingDetails;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lk.easy.rental.repo.BookingRepo;
import lk.easy.rental.repo.VehicleRepo;
import lk.easy.rental.service.BrowseService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.xml.sax.ext.Locator2;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BrowseServiceImpl implements BrowseService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    VehicleRepo vehicleRepo;


    @Autowired
    BookingRepo bookingRepo;

    @Override
    public List<VehicleDTO> getVehicleByNoOfPassengers(int noOfPassengers) {

        return mapper.map(vehicleRepo.findAllByNoOfPassengers(noOfPassengers), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getVehicleByTransmissionType(TransmissionType transmissionType) {
        return mapper.map(vehicleRepo.findAllByTransmissionType(transmissionType), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getVehicleByBrand(String brand) {
        return mapper.map(vehicleRepo.findAllByBrand(brand), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getVehicleByType(VehicleType type) {
        return mapper.map(vehicleRepo.findAllByVehicleType(type), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getVehicleByPrice(PriceRate price) {
        return mapper.map(vehicleRepo.findAllByPriceRate(price), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getVehicleByFuelType(FuelType fuelType) {
        return mapper.map(vehicleRepo.findAllByFuelType(fuelType), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> loadAvailableVehicles(LocalDate pickupDate, LocalDate dropOffDate) {
        LocalDate pickUpDate = pickupDate.minusDays(1);
        LocalDate returnDate = dropOffDate.plusDays(1);
        List<Booking> notAvailableBookingList = bookingRepo.findAllByReturnDateIsAfterAndPickupDateIsBefore(pickUpDate, returnDate);
        List<Vehicle> notAvailableVehicles = new ArrayList<>();
        List<VehicleDTO> availableVehicles = new ArrayList<>();

        for (Booking booking : notAvailableBookingList) {
            for (VehicleBookingDetails bookedVehicle : booking.getBookedVehicleList()) {
                notAvailableVehicles.add(bookedVehicle.getVehicle());
            }
        }


            L1:for (Vehicle temp : vehicleRepo.findAll()) {
                L2: for (Vehicle notAvailableVehicle : notAvailableVehicles) {
                    if (temp.getVehicleId().equals(notAvailableVehicle.getVehicleId())){
                        continue L1;
                    }else {
                        continue L2;
                    }
                }

                availableVehicles.add(mapper.map(temp,VehicleDTO.class));
            }

            System.out.println("Available"+ availableVehicles.toString());
            System.out.println("Not Available"+ notAvailableVehicles.toString());
            System.out.println("Not Available Book"+ notAvailableBookingList.toString());

            return availableVehicles;


        }
    }
