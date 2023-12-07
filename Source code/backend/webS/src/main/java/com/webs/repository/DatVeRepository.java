package com.webs.repository;

import com.webs.entity.DatVe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

public interface DatVeRepository extends JpaRepository<DatVe, Long>{


    @Query("select d from DatVe d where d.ngayDi = ?2 and d.gheNgoi.toaTau.id =?1")
    public List<DatVe> findByNgayDi(Long toaTauId, Date ngayDi);

    @Query("select d from DatVe d where d.gheNgoi.toaTau.id =?1 and (d.ngayDi = ?2 or d.ngayVe = ?3)")
    public List<DatVe> findByDate(Long toaTauId, Date ngayDi, Date NgayVe);

    @Query("select d from DatVe d where d.user.id =?1")
    public List<DatVe> findByUser(Long userid);
}
