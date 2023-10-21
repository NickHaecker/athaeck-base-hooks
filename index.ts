import {EventEmitter} from "events"

export class BaseHooks extends EventEmitter{

    public DispatchHook(hook:string,body:any){
        this.emit(hook,body)
    }
    public SubscribeHookListener(hook:string,listener:(data:any)=>void){
        this.on(hook,listener);
    }
}