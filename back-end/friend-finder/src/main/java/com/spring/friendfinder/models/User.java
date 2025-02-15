package com.spring.friendfinder.models;

import com.spring.friendfinder.models.enums.Gender;
import lombok.*;
import org.springframework.scheduling.annotation.EnableAsync;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name= "user")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private long id;
    @Column(name ="first_name")
    private String firstName;
    @Column(name ="last_name")
    private String lastName;
    @Column(name ="age")
    private String age;
    @Column(name ="phone")
    private String phone;
    @Temporal(TemporalType.DATE)
    @Column(name ="date")
    private Date date;
    @Enumerated(EnumType.STRING)
    private Gender gender ;

    @OneToMany(mappedBy = "user")
    private List<Post> posts;

    @OneToMany(mappedBy = "user")
    private List<Friend> friends;
}
