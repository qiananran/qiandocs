import { link } from "fs";

export default {
    '/': [
        {
            items: [
                { text: '📖 阅读须知', link: '/articles/guide/'}
            ]
        },
        {
            text: '工具',
            collapsed: false,
            collapsible: true,
            items: [
                { text: 'emoji-list', link: '/tool/emoji-list'}
            ]
        },
        {
            text: '💡 备忘录',
            //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            collapsible: true,    //是不是可以动态展开
            items: [
                { text: 'Git 命令', link: '/memo/git-command/' },
            ]
        }
    ],


    '/ros/': [
        {
            items: [
                { text: '📕 导读', link: '/ros/guide/' }
            ],
        },
        {
            text: 'ROS2 安装与卸载',
            collapsed: false,
            items: [
                { text: 'ROS2 安装', link: '/ros/base/install' },
            ],
        },
        {
            text: 'ROS2 通信机制核心',
            collapsed: false,
            items: [
                { text: '简介', link: '/ros/base/'},
                { text: '话题通信', link: '/ros/base/topic'},
                { text: '服务通信', link: '/ros/base/server'},
                { text: '动作通信', link: 'ros/base/action'},
                { text: '参数通信', link: 'ros/base/param'}
            ]
        }
    ],
    '/opencv/': [
        {
            items: [
                { text: '📕 导读', link: '/opencv/guide/' }
            ],
        },
        {
            text: 'Ros 基础',
            collapsed: false,
            items: [
                { text: '介绍', link: '' },
                { text: '通信机制', link: '' }
            ],
        }
    ],
    '/mysql/': [
        {
            items: [
                { text: '📕 导读', link: '/mysql/guide/' }
            ],
        },
        {
            text: '搭建环境',
            collapsed: false,
            items: [
                {
                    text: '认识数据库',
                    link: '/mysql/start/aboutData'
                },
                { text: '安装MySQL', link: '/mysql/start/installData' },
                { text: '连接MySQL', link: '/mysql/start/connectData' }
            ]
        },
        {
            text: 'SQL 基础',
            collapsible: false,
            collapsed: false,
            items: [
                { text: '关于MySQL', link: '/mysql/base/moredata'},
                { text: '数据库的操作', link: '/mysql/base/database' },
                { text: '数据表的操作', link: '/mysql/base/tablebase' },
                { text: 'MySQL 运算符' },
                { text: '详解数据查询', link: '/mysql/base/selectdata'},
                { text: 'MySQL 常用函数' }
            ]
        },
        {
            text: 'MySQL 高级',
            collapsible: false,
            collapsed: false,
            items: [
                { text: '视图' },
                { text: '索引' },
                { text: '存储过程和函数' },
                { text: '触发器' },
                { text: '用户权限和安全' },
                { text: '备份与还原' },
                { text: 'MySQL 日志' }
            ]
        },
    ],
    '/matlab/': [
        {
            items: [
                { text: '📕 导读', link: '/matlab/guide/' }
            ],
        },
        {
            text: 'Matlab 基础',
            collapsed: false,
            items: [
                { text: '介绍', link: '' },
                { text: '通信机制', link: '' }
            ],
        }
    ],
    '/ubuntu/': [
        {
            items: [
                { text: '📕 导读', link: '/ubuntu/guide/' }
            ],
        },
        {
            text: '环境搭建',
            collapsible: true,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: [
                { text: '前期声明', link: '' },
                { text: 'Ubuntu 安装', link: '' },
                { text: 'Ros2 humble安装', link: '' },
                { text: 'Matlab R2022b安装', link: '' },
                { text: '远程访问', link: '' }
            ]
        },
        {
            text: 'Ubuntu 美化',
            collapsible: false,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: [
                { text: '前期声明', link: '' },
                { text: 'vim', link: '' },
                { text: 'Dwm', link: '' },
                { text: 'simple terminal', link: '' },
                { text: 'dmenu', link: '' },
                { text: 'ranger', link: '' }
            ]
        },
        {
            text: 'Ubuntu 技巧',
            collapsible: false,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: [
                { text: '前期声明', link: '' },
                { text: '奇淫技巧', link: '' }
            ]
        }
    ],
    '/download/': [
        {
            items: [
                { text: '📕 导读', link: '/download/guide/' }
            ]
        },
        {
            text: 'windows',
            collapsible: false,
            collapsed: false,
            items: [
                { text: '' }
            ]
        },
        {
            text: 'Linux（Ubuntu）',
            collapsible: false,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: []
        }
    ],
    '/project/': [
        {
            items: [
                { text: '📕 导读', link: '/project/guide/' }
            ],
        },
        {
            text: '视觉生命',
            collapsed: false,
            items: [
                { text: '初衷', link: '' },
                { text: '', link: '' }
            ],
        },
        {
            text: '校园咨询',
            collapsed: false,
            items: [
                { text: '初衷', link: '' },
                { text: '', link: '' }
            ],
        },
        {
            text: 'Ros 无人小车',
            collapsed: false,
            items: [
                { text: '初衷', link: '' },
                { text: '', link: '' }
            ],
        }
    ],

    '/datastru/': [
        {
            items: [
                { text: '📕 导读', link: '/datastru/guide/' }
            ],
        },
        {
            text: '预备知识',
            collapsible: true,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: [
                { text: '复习c++', link: '' },
                { text: '程序性能分析', link: '' },
                { text: '复杂度记法', link: '' }
            ]
        },
        {
            text: '数据结构',
            collapsible: false,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: [
                { text: '线性表', link: '' },
                { text: '数组和矩阵', link: '' },
                { text: '栈', link: '' },
                { text: '队列', link: '' },
                { text: '跳表和散列', link: '' },
                { text: '二叉树', link: '' }
            ]
        },
        {
            text: '算法优化',
            collapsible: false,    //是不是可以动态展开
            collapsed: false,      //默认是不是展开
            items: [
                { text: '贪婪算法', link: '' },
                { text: '分而治之', link: '' }
            ]
        }
    ],

    '/netexam/': [
        {
            items: [
                { text: '📕 导读', link: '/netexam/' }
            ],
        },
        {
            text: '基础知识',
            collapsed: false,
            items: [
                { text: '关于IP', link: '/netexam/base/aboutIp' },
                { text: '关于路由', link: '/netexam/base/aboutRoute'},
                { text: '关于交换机', link: '/netexam/base/aboutSwitche'},
                { text: '关于VLAN', link: '/netexam/base/aboutVlan'},
                { text: '关于STP', link: '/netexam/base/aboutStp'},
                { text: '关于PPP', link: '/netexam/base/aboutPPP'},
                { text: '关于GARP', link: '/netexam/base/aboutGarp'}
            ],
        },
    ],

    '/softwareexam/': [
        {
            items: [
                { text: '导读', link: '/softwareexam/'}
            ]
        },
        {
            text: '基础知识',
            collapsed: false,
            items: [
                { text: '进制转换', link: '/softwareexam/base/progressive' },
                { text: '关于路由', link: '/netexam/base/aboutRoute'},
                { text: '关于交换机', link: '/netexam/base/aboutSwitche'},
                { text: '关于VLAN', link: '/netexam/base/aboutVlan'},
                { text: '关于STP', link: '/netexam/base/aboutStp'},
                { text: '关于PPP', link: '/netexam/base/aboutPPP'},
                { text: '关于GARP', link: '/netexam/base/aboutGarp'}
            ],
        },
    ],

}