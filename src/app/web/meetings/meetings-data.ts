import { Meeting } from './meeting';

export const MEETINGS: Meeting[] = [
    {
        meetingsId: 3,
        title: '李旺分享',
        date:'2018-01-29',
        content:'Mashup服务流程抽取。'
    },
    {
        meetingsId: 2,
        title:'蒋明分享',
        date:'2018-01-22',
        content:'探讨了改进的Web服务推荐方法。'
    },
    {
        meetingsId: 1,
        title:'向阳分享',
        date:'2018-01-15',
        content:'介绍了目前一些基于深度学习的文本特征提取方法。',
        photoUrl:'assets/images/meetings-pic/deep-text.png',
        doc:'深度学习文本模型.pptx'
    },
];