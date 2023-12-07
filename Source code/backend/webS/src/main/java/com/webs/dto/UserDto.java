package com.webs.dto;

import com.webs.entity.Authority;
import com.webs.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Set;

@Getter
@Setter
public class UserDto {
    private String email;

    private String fullname;

    private String phone;

}

