package com.example.proyectosalones.Repository.CrudRepository;

import com.example.proyectosalones.Model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

    public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {

    @Query("SELECT c.client, COUNT(c.client) from Reservation AS c group by c.client order by COUNT(c.client) DESC")
    public List<Object[]> countTotalReservationsByClient();

    public List<Reservation> findAllByStatus(String status);

    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);



}
