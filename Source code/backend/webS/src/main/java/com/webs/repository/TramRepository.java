package com.webs.repository;

import com.webs.entity.Tram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TramRepository extends JpaRepository<Tram,Long> {
//    @Query("select * from Tram")
//    public List<Tram> findAll();
}
