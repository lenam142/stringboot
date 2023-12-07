package com.webs.repository;

import com.webs.entity.TuyenDuong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TuyenDuongRepository extends JpaRepository<TuyenDuong,Long> {

    @Query("select t from TuyenDuong t where t.deleted = 0")
    public List<TuyenDuong> findAllNotDel();

    @Query("select t from TuyenDuong t where t.deleted = 0 and t.diemDi like ?1")
    public List<TuyenDuong> findByDiemDi(String diemdi);

    @Query("select t from TuyenDuong t where t.deleted = 0 and t.diemDen like ?1")
    public List<TuyenDuong> findByDiemDen(String diemden);
}
