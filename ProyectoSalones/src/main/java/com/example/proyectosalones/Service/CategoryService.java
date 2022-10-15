package com.example.proyectosalones.Service;


import com.example.proyectosalones.Model.Category;
import com.example.proyectosalones.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll(){
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id){
        return categoryRepository.getCategory(id);
    }

    public Category save(Category category){
        if(category.getId() == null){
            return categoryRepository.save(category);
        }else{
            Optional<Category>category1 = categoryRepository.getCategory(category.getId());
            if(!category1.isPresent()){
                return categoryRepository.save(category);
            }else{
                return category;
            }
        }
    }

    public Category update(Category category){
        if(category.getId() != null){
            Optional<Category> g = categoryRepository.getCategory(category.getId());
            if(g.isPresent()){
                for (Field f : category.getClass().getDeclaredFields()) {
                    f.setAccessible(true);
                    Object value;
                    try {
                        value = f.get(category);
                        if (value != null) {
                            System.out.println("entro");
                            f.set(g.get(), value);
                        }
                    } catch (IllegalArgumentException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    } catch (IllegalAccessException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                return categoryRepository.save(g.get());
            }
        }
        return category;
    }

    public boolean deleteCategory(int id){
        boolean dato = getCategory(id).map(category -> {
            categoryRepository.delete(category);
            return true;
        }).orElse(false);
        return dato;
    }

}

