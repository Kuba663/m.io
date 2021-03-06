var Clan = require("../entities/Clan");

class ClanManager {
    clanExists(name) {
        for (var i = 0; i < this.clans.length; ++i) {
            if (this.clans[i].name === name)
                return true;
        }
        return false;
    }
    add(clanName) {
        this.clans.push(new Clan(clanName));
    }
    remove(clanName) {
        for (var i = 0; i < this.clans.length; ++i) {
            if (this.clans[i].name == clanName) {
                this.clans.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    getByName(name) {
        for (var i = 0; i < this.clans.length; ++i) {
            if (this.clans[i].name === name)
                return this.clans[i];
        }
        return null;
    }
    get newestClan() {
        return this.clans[this.clans.length - 1];
    }
    constructor(gameServer) {
        this.gameServer = gameServer;
        this.clans = [];
    }
}
module.exports = ClanManager;