package com.example.proyectosalones.Repository.CrudRepository;

import com.example.proyectosalones.Model.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {

//    @Query("select c.client, COUNT(c.client) from Reservation AS c group by c.client order by COUNT(c.client) desc")
//    public List<Object[]> countTotalReservatiosByClient();
//
//    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne,Date dateTwo);
//
//    public List<Reservation> findAllByStatus(String status);

}
