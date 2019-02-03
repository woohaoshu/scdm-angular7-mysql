import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'meetingDocImg'})
export class MeetingDocImgPipe implements PipeTransform{
    //自定义管道，在资源文件名前加上相对路径，去掉文件名
    transform(doc:string):string{
        let doctype = doc.split(".");
        return "assets/images/icons/"+doctype[1]+".png";
    }
}