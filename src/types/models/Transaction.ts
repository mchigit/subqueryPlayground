// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class Transaction implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public value: bigint;

    public to: string;

    public from: string;

    public contractAddress: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Transaction entity without an ID");
        await store.set('Transaction', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Transaction entity without an ID");
        await store.remove('Transaction', id.toString());
    }

    static async get(id:string): Promise<Transaction | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Transaction entity without an ID");
        const record = await store.get('Transaction', id.toString());
        if (record){
            return Transaction.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<Transaction, FunctionPropertyNames<Transaction>>> & Entity): Transaction {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Transaction(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
