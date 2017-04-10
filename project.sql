/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 16:26:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `goodid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('1', '2');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goodsid` int(255) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `goodsprice` varchar(255) NOT NULL,
  `goodscostprice` varchar(255) DEFAULT NULL,
  `goodsimg` varchar(255) NOT NULL,
  `goodsdiscount` varchar(255) DEFAULT NULL,
  `goodsassess` varchar(255) DEFAULT NULL,
  `goodsroll` varchar(255) DEFAULT NULL,
  `goodsbig` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=20021 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('20001', '百年栗园 四川眉山 不知火丑桔 新鲜丑桔 原产地直供 4.5斤\r\n', '69.9\r\n', '79.9\r\n', 'http://localhost/project/src/img/list1.jpg\r\n', '8.8折\r\n', '13', '百年栗园旗舰店\r\n', 'http://localhost/project/src/img/list-1.jpg\r\n');
INSERT INTO `goods` VALUES ('20002', '泓易 墨西哥牛油果 6个 单果140-190克 包邮', '78', '146', 'http://localhost/project/src/img/list2.jpg', '5.4折', '538', '泓易水果旗舰店', 'http://localhost/project/src/img/list-2.jpg');
INSERT INTO `goods` VALUES ('20003', '泓易 越南红心火龙果 4个 单果约350-500克 江浙沪皖包邮', '55.8', '98', 'http://localhost/project/src/img/list3.jpg', '5.7折', '4', '泓易水果旗舰店', 'http://localhost/project/src/img/list-3.jpg');
INSERT INTO `goods` VALUES ('20004', '【本来生活】蒲江丑柑之长秋山不知火柑 大果 约5千克 单果重270克', '138', '198', 'http://localhost/project/src/img/list4.jpg', '7.0折', '0', '本来生活生鲜专营店', 'http://localhost/project/src/img/list-4.jpg');
INSERT INTO `goods` VALUES ('20005', '世果汇 墨西哥牛油果鳄梨6个 单果约190克以上', '79.9', '119', 'http://localhost/project/src/img/list5.jpg', '6.8折', '630', '世果汇水果旗舰店', 'http://localhost/project/src/img/list-5.jpg');
INSERT INTO `goods` VALUES ('20006', '现摘现发 大连美早大樱桃2斤 单果约24-28毫米 单果重8-10克 顺丰包邮', '139', '259', 'http://localhost/project/src/img/list6.jpg', '5.4折', '30', '考拉商家', 'http://localhost/project/src/img/list-6.jpg');
INSERT INTO `goods` VALUES ('20007', '世果汇 墨西哥牛油果鳄梨6个 单果约130-160克 新鲜水果', '69.9', '119', 'http://localhost/project/src/img/list7.jpg', ' 5.9折', '14', '世果汇水果旗舰店', 'http://localhost/project/src/img/list-7.jpg');
INSERT INTO `goods` VALUES ('20008', '世果汇 【送蜂蜜一包】泰国进口百香果30个 新鲜水果 单果约70-90克', '49.9', '99', 'http://localhost/project/src/img/list8.jpg', '5.1折', '899', '世果汇水果旗舰店', 'http://localhost/project/src/img/list-8.jpg');
INSERT INTO `goods` VALUES ('20009', '世果汇 泰国进口水果山竹 AAAA果 新鲜水果3斤', '99', '39.9', 'http://localhost/project/src/img/list9.jpg', '7.5折', '17', '世果汇水果旗舰店', 'http://localhost/project/src/img/list-9.jpg');
INSERT INTO `goods` VALUES ('20010', '世果汇【2份减5元】 泰国进口百香果10个单果约70-90克 西番莲', '88', '158', 'http://localhost/project/src/img/list10.jpg', '5.6折', '166', '世果汇水果旗舰店', 'http://localhost/project/src/img/list-10.jpg');
INSERT INTO `goods` VALUES ('20011', '【本来生活】泰国金枕头冷冻榴莲果肉 900克 华东华南专享', '99', '188', 'http://localhost/project/src/img/list11.jpg\n', '5.3折', '123', '本来生活生鲜专营店', 'http://localhost/project/src/img/list-11.jpg');
INSERT INTO `goods` VALUES ('20012', '现摘现发 大连美早大樱桃 2斤 单果约26-30毫米 单果重10-12.5克', '168', '288', 'http://localhost/project/src/img/list12.jpg\n', '5.9折', '23', '考拉商家', 'http://localhost/project/src/img/list-12.jpg');
INSERT INTO `goods` VALUES ('20013', '生鲜盒子 四川安岳柠檬 8个装（单果约90-120克）包邮', '29.7', '39.9', 'http://localhost/project/src/img/list13.jpg\n', '7.5折', '7', '生鲜盒子旗舰店', 'http://localhost/project/src/img/list-13.jpg');
INSERT INTO `goods` VALUES ('20014', '【本来生活】泰国椰青整箱装 9粒 单果平均800克 约7.2千克', '88', '88', 'http://localhost/project/src/img/list14.jpg\n', '5.6折', '467', '本来生活生鲜专营店', 'http://localhost/project/src/img/list-14.jpg');
INSERT INTO `goods` VALUES ('20015', '生鲜盒子 海南红心木瓜 牛奶木瓜 2个装 （单果约500-1200克）包邮', '29', '49', 'http://localhost/project/src/img/list15.jpg\n', '6.9折', '17', '生鲜盒子旗舰店', 'http://localhost/project/src/img/list-15.jpg');
INSERT INTO `goods` VALUES ('20016', '生鲜盒子【送蜂蜜一包】越南百香果20个 新鲜水果 单果约65-80克 包邮', '35.8', '49.9', 'http://localhost/project/src/img/list16.jpg\n', '7.2折', '1234', '生鲜盒子旗舰店\r\n', 'http://localhost/project/src/img/list-16.jpg');
INSERT INTO `goods` VALUES ('20017', '泓易 新西兰佳沛金果黄心猕猴桃 10个装 33#单果约110克 包邮', '98', '98', 'http://localhost/project/src/img/list17.jpg\n', '7.7折', '83', '泓易水果旗舰店', 'http://localhost/project/src/img/list-17.jpg');
INSERT INTO `goods` VALUES ('20018', '泓易 四川安岳黄柠檬 8个装 单果90-120克 全国包邮', '28.3', '59.8', 'http://localhost/project/src/img/list18.jpg\n', '4.9折', '56', '泓易水果旗舰店', 'http://localhost/project/src/img/list-18.jpg');
INSERT INTO `goods` VALUES ('20019', '泓易 新西兰绿心猕猴桃佳沛绿果 12个 单果95-110克 包邮', '49.9', '68', 'http://localhost/project/src/img/list19.jpg\n', '7.4折', '31', '泓易水果旗舰店', 'http://localhost/project/src/img/list-19.jpg');
INSERT INTO `goods` VALUES ('20020', '【本来生活】泰国进口精选龙眼 2斤', '29.9', '68', 'http://localhost/project/src/img/list20.jpg\n', '4.4折', '12', '本来生活生鲜专营店', 'http://localhost/project/src/img/list-20.jpg');

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `gid` int(30) NOT NULL,
  `himg` varchar(255) DEFAULT NULL,
  `gtitie` varchar(30) DEFAULT NULL,
  `gtitledes` varchar(255) DEFAULT NULL,
  `glist1` varchar(30) DEFAULT NULL,
  `glist2` varchar(30) DEFAULT NULL,
  `glist3` varchar(30) DEFAULT NULL,
  `glist4` varchar(30) DEFAULT NULL,
  `glist5` varchar(30) DEFAULT NULL,
  `glist6` varchar(30) DEFAULT NULL,
  `gli1h` varchar(255) DEFAULT NULL,
  `gli1p` varchar(255) DEFAULT NULL,
  `gli2h` varchar(255) DEFAULT NULL,
  `gli2p` varchar(255) DEFAULT NULL,
  `gli3h` varchar(255) DEFAULT NULL,
  `gli3p` varchar(255) DEFAULT NULL,
  `gli4h` varchar(255) DEFAULT NULL,
  `gli4p` varchar(255) DEFAULT NULL,
  `gimg1` varchar(255) DEFAULT NULL,
  `gimg2` varchar(255) DEFAULT NULL,
  `gimg3` varchar(255) DEFAULT NULL,
  `gimg4` varchar(255) DEFAULT NULL,
  `glimg` varchar(255) DEFAULT NULL,
  `himg1` varchar(255) DEFAULT NULL,
  `himg2` varchar(255) DEFAULT NULL,
  `himg3` varchar(255) DEFAULT NULL,
  `himg4` varchar(255) DEFAULT NULL,
  `himg5` varchar(255) DEFAULT NULL,
  `himg6` varchar(255) DEFAULT NULL,
  `himg7` varchar(255) DEFAULT NULL,
  `himg8` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('10001', 'http://localhost/project/src/img/m1.jpg', '母婴专区', '家居出行', '大牌奶粉', '纸尿裤', '洗护喂养', '营养辅食', '孕妈专区', '玩具专区', '辅食N元任选', '最高99选9件', '用品N元任选', '最多78选4件', '玩具N元任选', '最多99选10', '奶粉采购过程大揭秘', '网易自营，正品保障', 'http://localhost/project/src/img/l1_1.jpg', 'http://localhost/project/src/img/l1_2.jpg', 'http://localhost/project/src/img/l1_3.jpg', 'http://localhost/project/src/img/l1_4.jpg', 'http://localhost/project/src/img/l1.png', 'http://localhost/project/src/img/h1_1.jpg', 'http://localhost/project/src/img/h1_2.jpg', 'http://localhost/project/src/img/h1_3.jpg', 'http://localhost/project/src/img/h1_4.jpg', 'http://localhost/project/src/img/h1_5.jpg', 'http://localhost/project/src/img/h1_6.jpg', 'http://localhost/project/src/img/h1_7.jpg', 'http://localhost/project/src/img/h1_8.jpg');
INSERT INTO `home` VALUES ('10002', 'http://localhost/project/src/img/m2.jpg', '美容彩妆', '好用美妆大盘点', '人气面膜', '彩妆香氛', '韩国美妆', '身体护理', '奢宠保养', '基础护肤', '好用美妆大盘点', '红石榴日晚霜套组仅719元', '春日踏春美丽出游', '雪花防晒喷雾2瓶仅99元', '超值好货满减', '雪花秀气垫两件直减30元', '人气新品专场', '全球好货先知道', 'http://localhost/project/src/img/l2_1.jpg', 'http://localhost/project/src/img/l2_2.jpg', 'http://localhost/project/src/img/l2_3.jpg', 'http://localhost/project/src/img/l2_4.jpg', 'http://localhost/project/src/img/l2.png', 'http://localhost/project/src/img/h2_1.jpg', 'http://localhost/project/src/img/h2_2.jpg', 'http://localhost/project/src/img/h2_3.jpg', 'http://localhost/project/src/img/h2_4.jpg', 'http://localhost/project/src/img/h2_5.jpg', 'http://localhost/project/src/img/h2_6.jpg', 'http://localhost/project/src/img/h2_7.jpg', 'http://localhost/project/src/img/h2_8.jpg');
INSERT INTO `home` VALUES ('10003', 'http://localhost/project/src/img/m3.jpg', '服饰鞋包', '好用美妆大盘点', ' 时尚墨镜', '大牌女包', '品质男包', '精致手表', '珠宝饰品', '臻品腰带', '好用美妆大盘点', '红石榴日晚霜套组仅719元', '春日踏春美丽出游', '雪花防晒喷雾2瓶仅99元', '超值好货满减', '雪花秀气垫两件直减30元', '人气新品专场', '全球好货先知道', 'http://localhost/project/src/img/l3_1.jpg', 'http://localhost/project/src/img/l3_2.jpg', 'http://localhost/project/src/img/l3_3.jpg', 'http://localhost/project/src/img/l3_4.jpg', 'http://localhost/project/src/img/l3.png', 'http://localhost/project/src/img/h3_1.jpg', 'http://localhost/project/src/img/h3_2.jpg', 'http://localhost/project/src/img/h3_3.jpg', 'http://localhost/project/src/img/h3_4.jpg', 'http://localhost/project/src/img/h3_5.jpg', 'http://localhost/project/src/img/h3_6.jpg', 'http://localhost/project/src/img/h3_7.jpg', 'http://localhost/project/src/img/h3_8.jpg');
INSERT INTO `home` VALUES ('10004', 'http://localhost/project/src/img/m4.jpg', '家居个护', '个人洗护任选择', '口腔护理', '家居清洁', '家装家纺', '厨房餐饮', '沐浴清洁', '洗发护发', '月末正等囤货季', '99元任选5件起', '个人洗护任选', '99元任选5件起', '一屋不少何以扫天下', '满168立减49元', '唯有爱与下厨不可辜负', '必然得过滤水壶低至188元起', 'http://localhost/project/src/img/l4_1.jpg', 'http://localhost/project/src/img/l4_2.jpg', 'http://localhost/project/src/img/l4_3.jpg', 'http://localhost/project/src/img/l4_4.jpg', 'http://localhost/project/src/img/l4.png', 'http://localhost/project/src/img/h4_1.jpg', 'http://localhost/project/src/img/h4_2.jpg', 'http://localhost/project/src/img/h4_3.jpg', 'http://localhost/project/src/img/h4_4.jpg', 'http://localhost/project/src/img/h4_5.jpg', 'http://localhost/project/src/img/h4_6.jpg', 'http://localhost/project/src/img/h4_7.jpg', 'http://localhost/project/src/img/h4_8.jpg');
INSERT INTO `home` VALUES ('10005', 'http://localhost/project/src/img/m5.jpg', '营养保健', 'Swisse | 蔓越莓', '清仓馆', '长辈馆', '男性馆', '滋补馆', '美容馆', '瘦身馆', '德国百年赫熙HECH', '任意选两件立减50', '德国百年品牌', '叶黄素低至39/瓶', '放心之选，汤臣倍健', '考拉海外站', '唯有爱与下厨不可辜负', '日本好货特卖', 'http://localhost/project/src/img/l5_1.jpg', 'http://localhost/project/src/img/l5_2.jpg', 'http://localhost/project/src/img/l5_3.jpg', 'http://localhost/project/src/img/l5_4.jpg', 'http://localhost/project/src/img/l5.png', 'http://localhost/project/src/img/h5_1.jpg', 'http://localhost/project/src/img/h5_2.jpg', 'http://localhost/project/src/img/h5_3.jpg', 'http://localhost/project/src/img/h5_4.jpg', 'http://localhost/project/src/img/h5_5.jpg', 'http://localhost/project/src/img/h5_6.jpg', 'http://localhost/project/src/img/h5_7.jpg', 'http://localhost/project/src/img/h5_8.jpg');
INSERT INTO `home` VALUES ('10006', 'http://localhost/project/src/img/m6.jpg', '海外直邮', '飞利浦| DW| CITIZEN| beats| 潘多拉| 雅培| 手表| 音箱', '礼品配饰', '日用家居', '母婴专区', '大牌手表', '营养保健', ' 礼品配饰', '光动能开启新视界', '热卖款最高直降450元起', '闪耀笑容从此开始', '飞利浦牙刷低至49元起', '露肉季，大作战', '低至49元起', '这个时代听你的', '日本好货特卖79元起', 'http://localhost/project/src/img/l6_1.jpg', 'http://localhost/project/src/img/l6_2.jpg', 'http://localhost/project/src/img/l6_3.jpg', 'http://localhost/project/src/img/l6_4.jpg', 'http://localhost/project/src/img/l6.png', 'http://localhost/project/src/img/h6_1.jpg', 'http://localhost/project/src/img/h6_2.jpg', 'http://localhost/project/src/img/h6_3.jpg', 'http://localhost/project/src/img/h6_4.jpg', 'http://localhost/project/src/img/h6_5.jpg', 'http://localhost/project/src/img/h6_6.jpg', 'http://localhost/project/src/img/h6_7.jpg', 'http://localhost/project/src/img/h6_8.jpg');
INSERT INTO `home` VALUES ('10007', 'http://localhost/project/src/img/m7.jpg', '数码家电', 'iPhone| 钢笔| 空气净化', '个护电器', '生活电器', '厨房电器', '影音娱乐', '3C数码', '办公学习', 'inphone 7红色特别版', '第一时间用上潮流款', '四面八荒你最帅，', '男性专场', '数码家电热销榜', '负离子吹风机低至499元起', 'PHPLPS ', '剃须刀低至79元起', 'http://localhost/project/src/img/l7_1.jpg', 'http://localhost/project/src/img/l7_2.jpg', 'http://localhost/project/src/img/l7_3.jpg', 'http://localhost/project/src/img/l7_4.jpg', 'http://localhost/project/src/img/l7.png', 'http://localhost/project/src/img/h7_1.jpg', 'http://localhost/project/src/img/h7_2.jpg', 'http://localhost/project/src/img/h7_3.jpg', 'http://localhost/project/src/img/h7_4.jpg', 'http://localhost/project/src/img/h7_5.jpg', 'http://localhost/project/src/img/h7_6.jpg', 'http://localhost/project/src/img/h7_7.jpg', 'http://localhost/project/src/img/h7_8.jpg');
INSERT INTO `home` VALUES ('10008', 'http://localhost/project/src/img/m8.jpg', '环球美食', '牛奶| 饮料| 泡面| 月饼| 麦片', '果干坚果', '粮油副食', '休闲零食', '饼干糕点', '咖啡冲饮', '饮料', '38女神节', '德国美酒买2送1', '春茶新鲜上市', '特级龙井低至69元起', '大马经典咖啡', '暖心咖啡低至5折起', '台湾手作糕点', '2件7折/3件5折', 'http://localhost/project/src/img/l8_1.jpg', 'http://localhost/project/src/img/l8_2.jpg', 'http://localhost/project/src/img/l8_3.jpg', 'http://localhost/project/src/img/l8_4.jpg', 'http://localhost/project/src/img/l8.png', 'http://localhost/project/src/img/h8_1.jpg', 'http://localhost/project/src/img/h8_2.jpg', 'http://localhost/project/src/img/h8_3.jpg', 'http://localhost/project/src/img/h8_4.jpg', 'http://localhost/project/src/img/h8_5.jpg', 'http://localhost/project/src/img/h8_6.jpg', 'http://localhost/project/src/img/h8_7.jpg', 'http://localhost/project/src/img/h8_8.jpg');
INSERT INTO `home` VALUES ('10009', 'http://localhost/project/src/img/m9.jpg', '运动户外', '阿迪达斯| 耐克| 斯凯奇| 亚瑟士| 2件减50| 土拨鼠| 智能穿戴| 下单68折', '运动服饰', '户外背包', '健身服饰', '男运动鞋', '女运动鞋', '运动服饰', '斯凯奇初春换新', '运动鞋低至199元起', '潮流运动早春换新', '春款耐克低至439元起', '爱就一起穿', '情侣两件减50', '汽车用品养护专场', '机油低至56.9元起', 'http://localhost/project/src/img/l9_1.jpg', 'http://localhost/project/src/img/l9_2.jpg', 'http://localhost/project/src/img/l9_3.jpg', 'http://localhost/project/src/img/l9_4.jpg', 'http://localhost/project/src/img/l9.png', 'http://localhost/project/src/img/h9_1.jpg', 'http://localhost/project/src/img/h9_2.jpg', 'http://localhost/project/src/img/h9_3.jpg', 'http://localhost/project/src/img/h9_4.jpg', 'http://localhost/project/src/img/h9_5.jpg', 'http://localhost/project/src/img/h9_6.jpg', 'http://localhost/project/src/img/h9_7.jpg', 'http://localhost/project/src/img/h9_8.jpg');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userid` int(30) NOT NULL AUTO_INCREMENT,
  `account` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
