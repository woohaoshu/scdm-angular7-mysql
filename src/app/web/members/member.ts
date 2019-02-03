export class Member {
    name: string = null;       //姓名
    degree?: number = null;     //负责人-0，博士-1，硕士-2，本科生-3，合作者-4
    note?: string = null;       //来自于XX机构
    grade?: number = null;      //xx级
    photoUrl?: string = 'assets/images/770x860/02.jpg';   //照片相对路径
    intro?: string = '';      //简介
    introUrl?: string = '';     //简介url
}