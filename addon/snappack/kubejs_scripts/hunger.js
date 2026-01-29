StartupEvents.registry('palladium:condition_serializer', (event) => {
  event.create('snappack:has_hunger')
    .displayName('Has Hunger')
    .documentationDescription('Checks if the player has a certain amount of hunger')
    .addProperty('min_hunger', 'integer', 1, 'Minimum hunger level to pass')
    .addProperty('max_hunger', 'integer', 20, 'Maximum hunger level to pass')
    .test((entity, props) => {

      if (entity.isPlayer()) {


        const hunger = entity.foodData.foodLevel;

        return hunger >= props.min_hunger && hunger <= props.max_hunger;
      }
    });
});