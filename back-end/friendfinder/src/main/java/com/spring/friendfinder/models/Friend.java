package com.spring.friendfinder.models;

import javax.persistence.*;

@Entity(name = "friends")
public class Friend extends BaseEntity {

    @Column(name ="Friend-id")
    private long idFriend;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
