execute at @s run particle minecraft:snowflake ~ ~1 ~ 0.3 0.3 0.3 0.05 20 force
execute at @s run effect give @e[distance=..5,type=!item,type=!arrow] minecraft:slowness 3 10 false
playsound snappack:pingu.ball master @a[distance=..10] ~ ~ ~ 1 1
