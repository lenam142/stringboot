package com.webs.repository;

import com.webs.entity.Tau;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TauRepository extends JpaRepository <Tau,Long> {

    @Query("select t from Tau t where t.tuyenDuong.id = ?1")
    public List<Tau> findByTuyenDuong(Long id);

    @Query("select t from Tau t where t.tuyenDuong.deleted = 0")
    public List<Tau> findByTuyenDuongNotDel();
}
