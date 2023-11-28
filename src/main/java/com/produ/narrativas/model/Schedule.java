package com.produ.narrativas.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import java.time.DayOfWeek;
import java.time.LocalTime;
@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private Professional professional;
    @ManyToOne
    private Office office;
    private DayOfWeek dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;

    public Schedule(Professional professional, Office office, DayOfWeek dayOfWeek, LocalTime startTime, LocalTime endTime) {
        this.professional = professional;
        this.office = office;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Schedule(){
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public Professional getProfessional() {
        return professional;
    }

    public Office getOffice() {
        return office;
    }

    public DayOfWeek getDayOfWeek() {
        return dayOfWeek;
    }
}
