// HallBookingRepository.java
package com.example.hallbookingsystem.repository;

import com.example.hallbookingsystem.model.HallBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallBookingRepository extends JpaRepository<HallBooking, Long> {
    // Custom query methods can be defined here
}
