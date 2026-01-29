scoreboard players add #housespawner timed 1
execute if score #housespawner timed matches 1 in fsang:pocket_dimension run forceload add 9 -15 -10 3
execute if score #housespawner timed matches 10 in fsang:pocket_dimension positioned -7 72 -13 run place template snappack:houseofmysteries ~ ~ ~
execute if score #housespawner timed matches 20 in fsang:pocket_dimension run forceload remove 9 -15 -10 3
execute if score #housespawner timed matches 20 run scoreboard players set #housespawner spawncomplete 1
