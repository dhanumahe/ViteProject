package com.example.hallbookingsystem.repository;

import com.example.hallbookingsystem.model.Hall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallRepository extends JpaRepository<Hall, Long> {
    // Additional query methods (if needed) can be defined here
}
