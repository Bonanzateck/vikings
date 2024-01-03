import { SlotState } from "./libs/engine/slots/models/slot_state_model";
import { GameServer } from "./games/viking/viking_server";
import { PlatformSlotTester } from "./libs/platform/tester/platform_slot_tester";
import { VikingState } from "./games/viking/models/viking_state";

export class VikingTester extends PlatformSlotTester {

    constructor(){
        super();
        this.game = new GameServer();
        this.buybonus = false;
    }

    protected recordSlotRTP( state:SlotState) {
        super.recordSlotRTP(state);

        const vikingState :VikingState = state as VikingState;
        // if (vikingState.scatterCount >= 4) {
        //     console.log( vikingState.cheatNums);
        // }

    }
}

new VikingTester().startTesting( 1000000 );
