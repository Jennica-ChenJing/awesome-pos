const now = new Date();
const state = {
  // 当前用户
  user: {
    name: '陈小小',
    img: '../../static/images/2.jpg'
  },
  // 会话列表
  sessions: [
    {
      id: 0,
      user: {
        name: 'E-Mail系统通知',
        img: '../../static/images/timg.jpg'
      },
      messages: [{
        content: '您有一封新的邮件，请查收',
        date: now
      }],
      isRead: true
    },{
      id: 1,
      user: {
        name: '程芮',
        img: '../../static/images/7.jpg'
      },
      messages: [{
        content: 'Hello!',
        date: now
      }, {
        content: '有事找我吗？',
        date: now
      }],
      isRead: true
    },
    {
      id: 2,
      user: {
        name: '郭潇',
        img: '../../static/images/1.jpg'
      },
      messages: [{
        content: '吃饭了吗？',
        date: '2018-04-04 12:08'
      }],
      isRead: false
    }
  ],
  // 当前选中的会话
  currentSessionId: 1,
  // 过滤出只包含这个key的会话
  filterKey: ''
};

export default state;
