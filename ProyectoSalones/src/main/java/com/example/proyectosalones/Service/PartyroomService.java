package com.example.proyectosalones.Service;


import com.example.proyectosalones.Model.Partyroom;
import com.example.proyectosalones.Repository.PartyroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

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
                for (Field f : room.getClass().getDeclaredFields()) {
                    f.setAccessible(true);
                    Object value;
                    try {
                        value = f.get(room);
                        if (value != null) {
                            System.out.println("entro");
                            f.set(e.get(), value);
                        }
                    } catch (IllegalArgumentException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    } catch (IllegalAccessException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                return partyroomRepository.save(e.get());
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
