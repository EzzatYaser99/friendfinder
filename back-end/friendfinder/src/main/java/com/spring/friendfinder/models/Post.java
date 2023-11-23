package com.spring.friendfinder.models;

import javax.persistence.*;

@Entity(name = "posts")
public class Post  extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private long id;
    @Column(name ="image_path")
    private String img;

    @Column(name ="text")
    private String text;
    @Column(name ="likes")
    private int like;
    @ManyToOne
    @JoinColumn(name ="user_id")
    private User user;

}
