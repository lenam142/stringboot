package com.webs.repository;

import com.webs.entity.GheNgoi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface GheNgoiRepository extends JpaRepository<GheNgoi,Long> {

    @Modifying
    @Transactional
    @Query("delete from GheNgoi n where n.toaTau.id = ?1")
    int deleteBytoatauId(Long toatauId);

    @Query("select g from GheNgoi g where g.toaTau.id = ?1")
    public List<GheNgoi> getGheNgoiByToaTau(Long id);
}
