import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent {
    spawnProtection = new FormControl(16, [
        Validators.min(0),
        Validators.max(100),
        Validators.required,
    ]);
    maxTickTime = new FormControl(60000, [
        Validators.min(1000),
        Validators.max(60000),
        Validators.required,
    ]);
    queryPort = new FormControl(25565, [
        Validators.min(1),
        Validators.max(65535),
        Validators.required,
    ]);
    generatorSettings = '';
    syncChunkWrites = 'true';
    forceGameMode = 'false';
    allowNether = 'true';
    enforceWhitelist = 'false';
    gamemode = 'survival';
    broadcastConsoleToOps = 'true';
    enableQuery = 'false';
    playerIdleTimeout = new FormControl(0, [
        Validators.min(0),
        Validators.max(1440),
        Validators.required,
    ]);
    difficulty = 'easy';
    spawnMonsters = 'true';
    broadcastRconToOps = 'true';
    opPermissionLevel = '4';
    pvp = 'true';
    entityBroadcastRangePercentage = new FormControl(100, [
        Validators.min(0),
        Validators.max(500),
        Validators.required,
    ]);
    snooperEnabled = 'true';
    levelType = 'default';
    hardcore = 'false';
    enableStatus = 'true';
    enableCommandBlock = 'false';
    maxPlayer = new FormControl(20, [
        Validators.min(0),
        Validators.max(100),
        Validators.required,
    ]);
    networkCompressionThreshold = new FormControl(256, [
        Validators.min(0),
        Validators.max(65535),
        Validators.required,
    ]);
    // https://www.regextester.com/104339
    resourcePackSha1 = new FormControl('', [Validators.pattern('(\\\\?([^\\/]*[\\/])*)([^\\/]+)$')]);
    maxWorldSize = new FormControl(29999984,[Validators.min(0),
        Validators.max(29999984),
        Validators.required,
    ]);
    functionPermissionLevel = new FormControl(2,
        [Validators.min(1),
        Validators.max(4),
        Validators.required,
    ]);
    rconPort = new FormControl(25575,[
        Validators.min(1),
        Validators.max(65534),
        Validators.required,
    ]);
    serverPort
    = new FormControl(25565,[
        Validators.min(1),
        Validators.max(65535),
        Validators.required,
    ]);
    debug ='false';
    // https://mkyong.com/regular-expressions/how-to-validate-ip-address-with-regular-expression/
    serverIp = new FormControl('', [Validators.pattern('^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\\.(?!$)|$)){4}$')]);
    spawnNpcs ='true';
    allowFlight ='false';
    levelName = new FormControl('world', [Validators.pattern('^[a-zA-Z][A-Za-z0-9_-]+$')]);
    viewDistance = new FormControl(10,[
        Validators.min(3),
        Validators.max(32),
        Validators.required,
    ]);
    // https://www.regextester.com/104339
    resourcePack = new FormControl('', [Validators.pattern('(\\\\?([^\\/]*[\\/])*)([^\\/]+)$')]);
    spawnAnimals = 'true';
    whiteList ='false';
    rconPassword = new FormControl('', [ Validators.pattern('^[a-z0-9A-Z]+$'),
    Validators.required,]);
    generateStructures='true';
    maxBuildHeight = new FormControl(256,
        [Validators.min(0),
        Validators.max(256),
        Validators.required,
    ]);
    onlineMode ='true';
    levelSeed = new FormControl('', [Validators.pattern('^(?! )[a-z0-9A-Z _-]+(?<! )$')]);
    useNativeTransport ='true';
    preventProxyConnections ='false';
    enableJmxMonitoring ='false';
    enableRcon ='false';
    motd = new FormControl('A Minecraft Server', [Validators.pattern('^.*$'),Validators.maxLength(59)]);
    code = ``;

    onInputChange() {
        this.code = '';
        this.code += 'spawn-protection=' + this.spawnProtection.value + '\n';
        this.code += 'max-tick-time=' + this.maxTickTime.value + '\n';
        this.code += 'query.port=' + this.queryPort.value + '\n';
        this.code += 'generator-settings=' + this.generatorSettings + '\n';
        this.code += 'sync-chunk-writes=' + this.syncChunkWrites + '\n';
        this.code += 'force-gamemode=' + this.forceGameMode + '\n';
        this.code += 'allow-nether=' + this.allowNether + '\n';
        this.code += 'enforce-whitelist=' + this.enforceWhitelist + '\n';
        this.code += 'gamemode=' + this.gamemode + '\n';
        this.code += 'broadcast-console-to-ops=' + this.broadcastConsoleToOps + '\n';
        this.code += 'enable-query=' + this.enableQuery + '\n';
        this.code += 'player-idle-timeout=' + this.playerIdleTimeout.value + '\n';
        this.code += 'difficulty=' + this.difficulty + '\n';
        this.code += 'spawn-monsters=' + this.spawnMonsters + '\n';
        this.code += 'broadcast-rcon-to-ops=' + this.broadcastRconToOps + '\n';
        this.code += 'op-permission-level=' + this.opPermissionLevel + '\n';
        this.code += 'pvp=' + this.pvp + '\n';
        this.code += 'entity-broadcast-range-percentage=' + this.entityBroadcastRangePercentage.value + '\n';
        this.code += 'snooper-enabled=' + this.snooperEnabled + '\n';
        this.code += 'level-type=' + this.levelType + '\n';
        this.code += 'hardcore=' + this.hardcore + '\n';
        this.code += 'enable-status=' + this.enableStatus + '\n';
        this.code += 'enable-command-block=' + this.enableCommandBlock + '\n';
        this.code += 'max-players=' + this.maxPlayer.value + '\n';
        this.code += 'network-compression-threshold=' + this.networkCompressionThreshold.value + '\n';
        this.code += 'resource-pack-sha1=' + this.resourcePackSha1.value + '\n';
        this.code += 'max-world-size=' + this.maxWorldSize.value + '\n';
        this.code += 'function-permission-level=' + this.functionPermissionLevel.value + '\n';
        this.code += 'rcon.port=' + this.rconPort.value + '\n';
        this.code += 'server-port=' + this.serverPort.value + '\n';
        this.code += 'debug=' + this.debug + '\n';
        this.code += 'server-ip=' + this.serverIp.value + '\n';
        this.code += 'spawn-npcs=' + this.spawnNpcs + '\n';
        this.code += 'allow-flight=' + this.allowFlight + '\n';
        this.code += 'level-name=' + this.levelName.value + '\n';
        this.code += 'view-distance=' + this.viewDistance.value + '\n';
        this.code += 'resource-pack=' + this.resourcePack.value + '\n';
        this.code += 'spawn-animals=' + this.spawnAnimals + '\n';
        this.code += 'white-list=' + this.whiteList + '\n';
        this.code += 'rcon.password=' + this.rconPassword.value + '\n';
        this.code += 'generate-structures=' + this.generateStructures + '\n';
        this.code += 'max-build-height=' + this.maxBuildHeight.value + '\n';
    };
}
