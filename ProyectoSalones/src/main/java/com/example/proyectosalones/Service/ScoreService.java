package com.example.proyectosalones.Service;


import com.example.proyectosalones.Model.Score;
import com.example.proyectosalones.Repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll(){
        return scoreRepository.getAll();
    }
    public Optional<Score> getScore(int id){
        return scoreRepository.getScore(id);
    }

    public Score Save(Score score){
        if (score.getIdScore()==null){
            return scoreRepository.save(score);
        }else{
            Optional<Score> Scaux=scoreRepository.getScore(score.getIdScore());
            if (!Scaux.isPresent()){
                return scoreRepository.save(score);
            }else{
                return score;
            }
        }
    }
}
