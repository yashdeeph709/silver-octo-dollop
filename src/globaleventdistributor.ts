export class GlobalEventDistributor{
    stores: Array<any> = [];

    constructor(){
        this.stores = [];
    }
    registerStore(store: any) {
        this.stores.push(store)
    }

    dispatch(event) {
        this.stores.forEach(element => {
            element.dispatch(event); 
        });
    }
}