package com.produ.narrativas.model;

import jakarta.persistence.*;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
@Entity
public class Office {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String officeName;
    @OneToMany
    private List<Schedule> schedules;

    public boolean isOccupied(LocalTime startTime, LocalTime endTime, DayOfWeek dayOfWeek) {
        for(Schedule schedule : schedules) {
            if( schedule.getStartTime().isBefore(endTime) && schedule.getEndTime().isAfter(startTime) && dayOfWeek.equals(schedule.getDayOfWeek())) {
                return true;
            }
        }
        return false;
    }

    public boolean occupyOffice(Professional professional,  LocalTime startTime, LocalTime endTime, DayOfWeek dayOfWeek) {
        if(!isOccupied(startTime, endTime, dayOfWeek)) {
            Schedule newSchedule = new Schedule(professional, this /* this office*/, dayOfWeek, startTime, endTime);
            schedules.add(newSchedule); //TODO THIS IS DATABASE RELATED, CALL SCHEDULEMANAGER
            return true;
        } else {
            return false;
        }
    }

}
