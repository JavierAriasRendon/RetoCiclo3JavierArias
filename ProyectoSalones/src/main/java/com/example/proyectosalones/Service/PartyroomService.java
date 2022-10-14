package com.example.proyectosalones.Service;


import com.example.proyectosalones.Model.Partyroom;
import com.example.proyectosalones.Repository.PartyroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PartyroomService {

    @Autowired
    private PartyroomRepository partyroomRepository;

    public List<Partyroom> getAll(){
        return partyroomRepository.getAll();
    }

    public Optional<Partyroom> getRoom(int roomId) {
        return partyroomRepository.getRoom(roomId);
    }

    public Partyroom save(Partyroom room){
        if(room.getId()==null){
            return partyroomRepository.save(room);
        }else{
            Optional<Partyroom> e= partyroomRepository.getRoom(room.getId());
            if(!e.isPresent()){
                return partyroomRepository.save(room);
            }else{
                return room;
            }
        }
    }

    public Partyroom update(Partyroom room) {
        if (room.getId() != null) {
            Optional<Partyroom> e = partyroomRepository.getRoom(room.getId());
            if (e.isPresent()) {
                if (room.getName() != null) {
                    e.get().setName(room.getName());
                }
                if (room.getName() != null) {
                    e.get().setName(room.getName());
                }
                if (room.getCapacity() != null) {
                    e.get().setCapacity(room.getCapacity());
                }
                if (room.getDescription() != null) {
                    e.get().setDescription(room.getDescription());
                }
                if (room.getCategory() != null) {
                    e.get().setCategory(room.getCategory());
                }
                partyroomRepository.save(e.get());
                return e.get();
            } else {
                return room;
            }
        } else {
            return room;
        }
    }

        public boolean deleteRoom(int roomId) {
            Boolean aBoolean = getRoom(roomId).map(room -> {
                partyroomRepository.delete(room);
                return true;
            }).orElse(false);
            return aBoolean;
        }

    }
