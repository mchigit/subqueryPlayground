import { MoonbeamEvent } from '@subql/contract-processors/dist/moonbeam';
import {StarterEntity} from "../types";
import {Balance} from "@polkadot/types/interfaces";


// export async function handleBlock(block: SubstrateBlock): Promise<void> {
//     //Create a new starterEntity with ID using block hash
//     let record = new StarterEntity(block.block.header.hash.toString());
//     //Record block number
//     record.field1 = block.block.header.number.toNumber();
//     await record.save();
// }

export async function handleMoonbeamEvent(event: MoonbeamEvent): Promise<void> {
    logger.info("got event")
    logger.info(event)
}

// export async function handleCall(extrinsic: SubstrateExtrinsic): Promise<void> {
//     const record = await StarterEntity.get(extrinsic.block.block.header.hash.toString());
//     //Date type timestamp
//     record.field4 = extrinsic.block.timestamp;
//     //Boolean tyep
//     record.field5 = true;
//     await record.save();
// }


