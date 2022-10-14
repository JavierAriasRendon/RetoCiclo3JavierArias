package com.example.proyectosalones.Controller;

import com.example.proyectosalones.Model.Partyroom;
import com.example.proyectosalones.Service.PartyroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/Partyroom")
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})

public class PartyroomController {

    @Autowired
    private PartyroomService partyroomService;

    @GetMapping("/all")
    public List<Partyroom> getRoom(){
        return partyroomService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Partyroom> getRoom(@PathVariable("id") int roomId) {
        return partyroomService.getRoom(roomId);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Partyroom save(@RequestBody Partyroom room) {
        return partyroomService.save(room);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Partyroom update(@RequestBody Partyroom room) {
        return partyroomService.update(room);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int roomId) {
        return partyroomService.deleteRoom(roomId);
    }

}

