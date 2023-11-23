package com.spring.friendfinder.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "friends")
public class Friend extends BaseEntity {

    @Column(name ="Friend-id")
    private long idFriend;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
