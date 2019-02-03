import {Member} from './member';

export const MEMBERS: Member[] = [
    //负责人-0，博士-1，硕士-2，本科生-3，合作者-4，毕业生（图）-5，毕业生-6
    { name:'邹国兵', degree:0, note:'博士，副教授，博士生副导师，硕士生导师', photoUrl:'assets/images/770x860/ZouGB.jpg', intro:''},
    //博士生
    { name:'黄明清', degree:1, grade:2012, photoUrl:'assets/images/770x860/HuangMQ.jpg', intro:'1984-11，本科和硕士分别就读于河北工程大学和中国科学技术大学，曾于苏州捷泰科信息技术有限公司任职两年软件工程师。目前研究方向为社会计算和复杂网络。'},
    { name:'牛森', degree:1, grade:2013, photoUrl:'assets/images/770x860/NiuS.jpg', intro:'13级博士研究生，当前的主要研究方向包括服务组合、不确定性QoS优化、自动规划、人工智能等。'},
    { name:'Farhan Ullah', degree:1, grade:2016, photoUrl:'assets/images/770x860/Farhan.jpg', intro:'1990-2，Obtained his M.S. from Sarhad University of Science and Information Technology, Peshawar. Interested in service computing and data mining.'},
    //硕士生
    { name:'李旺', degree:2, grade:2015, photoUrl:'assets/images/770x860/LiW.jpg', intro:'1993-11，本科就读于上海大学计算机专业。目前研究Mashup推荐相关内容。'},
    { name:'庞盛业', degree:2, grade:2016, photoUrl:'assets/images/770x860/PangSY.jpg', intro:'1993-10，本科就读于同济大学。对人工智能，机器学习感兴趣，爱好各种体育运动。目前研究方向为Web服务分类。'},
    { name:'向阳', degree:2, grade:2016, photoUrl:'assets/images/770x860/XiangY.jpg', intro:'1994-6，本科就读于上海大学计算机专业。对分布式计算和Web开发感兴趣。目前研究方向是服务聚类。'},
    { name:'张霞', degree:2, grade:2016, photoUrl:'assets/images/770x860/ZhangX.jpg', intro:'1994-5，本科就读于河海大学物联网专业。喜欢扬琴，萨克斯和素描。目前研究方向是多组学生物信息数据的差异化分析。'},
    { name:'蒋明', degree:2, grade:2017, photoUrl:'assets/images/770x860/JiangM.jpg', intro:'1994-3， 本科就读于上海大学，擅长Web开发，现研究方向为服务推荐。平时爱好摄影，喜欢乒乓球，爱听纯音乐，推荐 river flows in you！'},
    { name:'吴浩', degree:2, grade:2017, photoUrl:'assets/images/770x860/WuH.jpg', intro:'1995-8，本科就读于上海大学计算机专业。对设计美学、Web前端、游泳感兴趣。目前研究方向为API服务聚类。'},
    { name:'陈锦', degree:2, grade:2018, photoUrl:'assets/images/770x860/ChenJ.jpg', intro:'1995-11，本科就读于福建师范大学网络工程专业。喜欢篮球、跑步。目前正在研究文本挖掘。'},
    { name:'秦臻', degree:2, grade:2018, photoUrl:'assets/images/770x860/QinZ.jpg', intro:'1996，本科就读于上海大学。对一切计算机行业内的技术感兴趣。熟悉网站建设和Android应用开发。目前研究方向为服务聚类。'},
    //本科生
    { name:'陈想东', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“基于协同过滤的服务推荐系统实现”'},
    { name:'秦臻', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“基于深度学习模型的Web服务聚类系统实现”'},
    { name:'韦健', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“面向大规模生物数据的差异分析系统实现”'},
    { name:'赵万钰', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“基于统计模型的Web服务聚类系统实现”'},
    //合作者
    { name:'Yixin Chen', degree:4, note:'Wash. U', photoUrl:'assets/images/770x860/ChenYX.jpg', intro:'Professor, Department of Computer Science and Engineering, Washington University in St. Louis.',introUrl:'http://www.cse.wustl.edu/~ychen/'},
    { name:'张博锋', degree:4, note:'上海大学', photoUrl:'assets/images/770x860/ZhangBF.jpg', intro:'1999年12月起在上海大学任副教授，研究员，期间先后担任教研室主任、科研处处长助理，计算机学院院长助理，Sybase电子信息学院院长，网格技术重点研究室主任。',introUrl:'http://cms.shu.edu.cn/Default.aspx?tabid=16910'},
    { name:'甘杨兰', degree:4, note:'东华大学', photoUrl:'assets/images/770x860/GanYL.jpg', intro:'1984-1，博士，副教授，博士生副导师，硕士生导师。2012年9月起，进入东华大学计算机科学与技术学院。',introUrl:'http://cst.dhu.edu.cn/62/c6/c3131a25286/page.htm'},
    //毕业生(图)
    { name:'赵梅', degree:7, grade:2013, photoUrl:'assets/images/770x860/02.jpg', intro:'暂无'},
    { name:'周治明', degree:5, grade:2014, photoUrl:'assets/images/770x860/ZhouZM.jpg', intro:'1992年，研究方向为web服务推荐，2017年硕士毕业于上海大学，现就职于上海华为。'},
    //毕业生
    { name:'赵梅', degree:6, grade:2013, intro:'硕士生（本科山东大学），独立指导'},
    { name:'郑建兴', degree:6, grade:2015, intro:'博士生（山西大学工作），与张博锋老师合作指导'},
    { name:'张驰', degree:6, grade:2016, intro:'工程硕士生（本科上海大学)，独立指导'},
    { name:'蒋明', degree:6, grade:2017, intro:'本科生（上海大学读研），独立指导'},
    { name:'吴浩', degree:6, grade:2017, intro:'本科生（上海大学读研），独立指导'},
    { name:'吴婷', degree:6, grade:2017, intro:'本科生（浙江大学读研），独立指导'},
    { name:'程珏明', degree:6, grade:2017, intro:'本科生（香港大学读研），独立指导'},
    { name:'周瑶', degree:6, grade:2017, intro:'本科生（中国建设银行工作），独立指导'},
    { name:'程君实', degree:6, grade:2016, intro:'本科生（交通银行工作），独立指导'},
    { name:'缪存涵', degree:6, grade:2016, intro:'本科生，独立指导'},
    { name:'张晨迪', degree:6, grade:2016, intro:'本科生（澳大利亚读研），独立指导'},
    { name:'张洋', degree:6, grade:2015, intro:'本科生，独立指导'},
    { name:'张成玉', degree:6, grade:2015, intro:'本科生，独立指导'},
    { name:'郁鑫', degree:6, grade:2015, intro:'本科生，独立指导'},
    { name:'李旺', degree:6, grade:2014, intro:'本科生（上海大学读研），独立指导'},
    { name:'杨伟成', degree:6, grade:2014, intro:'本科生，独立指导'},
    { name:'陈逸韵', degree:6, grade:2014, intro:'本科生（华东师范大学出版社工作），独立指导'},
    { name:'李亚强', degree:6, grade:2013, intro:'本科生，独立指导'},
    { name:'王辛', degree:6, grade:2013, intro:'本科生（上海大学读研），独立指导'},
    { name:'彭先玲', degree:6, grade:2013, intro:'本科生（上海大学读研），独立指导'},
    { name:'徐金', degree:6, grade:2013, intro:'本科生，独立指导'},
    
];