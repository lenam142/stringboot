package com.webs.repository;

import com.webs.entity.ToaTau;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ToaTauRepository extends JpaRepository<ToaTau,Long> {

    @Query("select t from ToaTau t where t.tau.id = ?1")
    public List<ToaTau> getByTauId(Long idTau);
}
