package com.example.hallbookingsystem.controller;

import com.example.hallbookingsystem.model.Hall;
import com.example.hallbookingsystem.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/halls")
public class HallController {

    @Autowired
    private HallService hallService;

    @GetMapping
    public List<Hall> getAllHalls() {
        return hallService.findAllHalls();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hall> getHallById(@PathVariable Long id) {
        Optional<Hall> hall = hallService.findHallById(id);
        if (hall.isPresent()) {
            return ResponseEntity.ok(hall.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Hall createHall(@RequestBody Hall hall) {
        return hallService.saveHall(hall);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Hall> updateHall(@PathVariable Long id, @RequestBody Hall hallDetails) {
        Optional<Hall> updatedHall = Optional.ofNullable(hallService.updateHall(id, hallDetails));
        if (updatedHall.isPresent()) {
            return ResponseEntity.ok(updatedHall.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHall(@PathVariable Long id) {
        hallService.deleteHall(id);
        return ResponseEntity.noContent().build();
    }
}
