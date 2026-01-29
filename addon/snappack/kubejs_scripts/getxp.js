StartupEvents.registry('palladium:condition_serializer', (event) => {
  event.create('palladium:get_xp')
    .addProperty("level_min", "float", 9, "xp level max")
    .addProperty("level_max", "float", 99, "xp level max")
    .test((entity, props) => {
      let level_min = props.get("level_min");
      let level_max = props.get("level_max");
      let xp_level = entity.getXpLevel();
      if (xp_level >= level_min && xp_level <= level_max) {
        return true
      }
      else {
        return false
      }
    })
});