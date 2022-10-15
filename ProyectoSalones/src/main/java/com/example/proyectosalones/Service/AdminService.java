package com.example.proyectosalones.Service;


import com.example.proyectosalones.Model.Admin;
import com.example.proyectosalones.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll() {
        return (List<Admin>) adminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id) {
        return adminRepository.getAdmin(id);
    }
    public Admin save (Admin admin){
        if(admin.getIdAdmin() == null){
            return adminRepository.save(admin);
        }else {
            Optional<Admin>adminEncontrado = adminRepository.getAdmin(admin.getIdAdmin());
            if(!adminEncontrado.isPresent()){
                return adminRepository.save(admin);
            }else {
                return admin;
            }
        }
    }

    public Admin update(Admin admin){
        if(admin.getIdAdmin() != null){
            Optional<Admin> adminEncontrado = adminRepository.getAdmin(admin.getIdAdmin());
            if(adminEncontrado.isPresent()){
                for (Field f : admin.getClass().getDeclaredFields()) {
                    f.setAccessible(true);
                    Object value;
                    try {
                        value = f.get(admin);
                        if (value != null) {
                            System.out.println("entro");
                            f.set(adminEncontrado.get(), value);
                        }
                    } catch (IllegalArgumentException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    } catch (IllegalAccessException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                return adminRepository.save(adminEncontrado.get());
            }
        }
        return admin;
    }

    public boolean deleteAdmin(int adminId){
        Boolean resultado = getAdmin(adminId).map(adminPorEliminar ->{
            adminRepository.delete(adminPorEliminar);
            return true;
        }).orElse(false);
        return resultado;
    }

}
