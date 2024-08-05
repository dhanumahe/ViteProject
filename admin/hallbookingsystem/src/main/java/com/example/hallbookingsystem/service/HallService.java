package com.example.hallbookingsystem.service;

import com.example.hallbookingsystem.model.Hall;
import com.example.hallbookingsystem.repository.HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HallService {

    @Autowired
    private HallRepository hallRepository;

    public List<Hall> findAllHalls() {
        return hallRepository.findAll();
    }

    public Optional<Hall> findHallById(Long id) {
        return hallRepository.findById(id);
    }

    public Hall saveHall(Hall hall) {
        return hallRepository.save(hall);
    }

    public void deleteHall(Long id) {
        hallRepository.deleteById(id);
    }

    public Hall updateHall(Long id, Hall hallDetails) {
        Hall hall = hallRepository.findById(id).orElseThrow(() -> new RuntimeException("Hall not found"));
        hall.setHallName(hallDetails.getHallName());
        hall.setHallType(hallDetails.getHallType());
        hall.setAc(hallDetails.isAc());
        hall.setCapacity(hallDetails.getCapacity());
        hall.setPrice(hallDetails.getPrice());
        return hallRepository.save(hall);
    }
}
