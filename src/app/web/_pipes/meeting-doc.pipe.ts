import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'meetingDoc'})
export class MeetingDocPipe implements PipeTransform{
    //自定义管道，在资源文件名前加上相对路径
    transform(doc:string):string{
        return "assets/doc/"+doc;
    }
}