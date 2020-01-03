
import { expect } from "chai";
import { Biofuels } from "../../../src/cards/prelude/Biofuels";
import { Color } from "../../../src/Color";
import { Player } from "../../../src/Player";
import { Resources } from '../../../src/Resources';

describe("Biofuels", function () {
    it("Should play", function () {
        const card = new Biofuels();
        const player = new Player("test", Color.BLUE, false);
        const action = card.play(player);
        expect(action).to.eq(undefined);
        expect(player.getProduction(Resources.ENERGY)).to.eq(1);
        expect(player.getProduction(Resources.PLANTS)).to.eq(1);
        expect(player.plants).to.eq(2);
    });
});