// HallBookingService.java
package com.example.hallbookingsystem.service;

import com.example.hallbookingsystem.model.HallBooking;
import com.example.hallbookingsystem.repository.HallBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HallBookingService {
    @Autowired
    private HallBookingRepository repository;

    public List<HallBooking> getAllBookings() {
        return repository.findAll();
    }

    public Optional<HallBooking> getBookingById(Long id) {
        return repository.findById(id);
    }

    public HallBooking saveBooking(HallBooking booking) {
        return repository.save(booking);
    }

    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }

    // Additional business logic...
}
