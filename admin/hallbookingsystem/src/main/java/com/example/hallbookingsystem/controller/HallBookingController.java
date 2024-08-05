// HallBookingController.java
package com.example.hallbookingsystem.controller;

import com.example.hallbookingsystem.model.HallBooking;
import com.example.hallbookingsystem.service.HallBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
public class HallBookingController {
    @Autowired
    private HallBookingService service;

    @GetMapping
    public List<HallBooking> getAllBookings() {
        return service.getAllBookings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HallBooking> getBookingById(@PathVariable Long id) {
        Optional<HallBooking> booking = service.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public HallBooking createBooking(@RequestBody HallBooking booking) {
        return service.saveBooking(booking);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HallBooking> updateBooking(@PathVariable Long id, @RequestBody HallBooking bookingDetails) {
        Optional<HallBooking> existingBooking = service.getBookingById(id);
        if (existingBooking.isPresent()) {
            HallBooking booking = existingBooking.get();
            booking.setHallName(bookingDetails.getHallName());
            booking.setBookedBy(bookingDetails.getBookedBy());
            booking.setStartTime(bookingDetails.getStartTime());
            booking.setEndTime(bookingDetails.getEndTime());
            booking.setStatus(bookingDetails.getStatus());
            return ResponseEntity.ok(service.saveBooking(booking));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        if (service.getBookingById(id).isPresent()) {
            service.deleteBooking(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
