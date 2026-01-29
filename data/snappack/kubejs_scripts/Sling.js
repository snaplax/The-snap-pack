ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    const performTeleport = (context, isDimensionSpecified) => {
        const player = context.source.player;
        const x = Arguments.DOUBLE.getResult(context, 'x');
        const y = Arguments.DOUBLE.getResult(context, 'y');
        const z = Arguments.DOUBLE.getResult(context, 'z');
        const playerName = player.username;
        let commandString;
        let dimensionLevel;
        if (isDimensionSpecified) {
            dimensionLevel = Arguments.DIMENSION.getResult(context, 'dimension');
            const dimensionId = dimensionLevel.dimensionKey.location().toString();
            commandString = `execute as ${playerName} in ${dimensionId} run teleport @s ${x} ${y} ${z}`;
        } else {
            commandString = `execute as ${playerName} run teleport @s ${x} ${y} ${z}`;
        }
        context.source.server.runCommandSilent(commandString);
        const dimensionName = isDimensionSpecified ? dimensionLevel.dimensionKey.location().toString() : "current dimension";
        player.tell(`Successfully teleported to coordinates: ${x}, ${y}, ${z} in ${dimensionName}`);
        return 1;
    };
    const positionArguments = Commands.argument('x', Arguments.DOUBLE.create(event))
        .then(Commands.argument('y', Arguments.DOUBLE.create(event))
            .then(Commands.argument('z', Arguments.DOUBLE.create(event))
                .executes(context => performTeleport(context, false))
                .then(Commands.argument('dimension', Arguments.DIMENSION.create(event))
                    .executes(context => performTeleport(context, true))
                )
            )
        );
    event.register(
        Commands.literal('tpx')
            .then(positionArguments)
    );
});