import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hanako-user-manual/',
  title: 'HanaAgent 用户指南',
  description: '面向个人使用者的 HanaAgent / OpenHanako 实践手册与知识沉淀',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/liliMozi/openhanako/main/.github/assets/banner.jpg',
    siteTitle: 'HanaAgent 指南',

    nav: [
      { text: '首页', link: '/' },
      { text: '完整手册', link: '/manual' },
      { text: 'HanaAgent 官方', link: 'https://github.com/liliMozi/openhanako' }
    ],

    sidebar: [
      {
        text: '📖 使用指南',
        items: [
          { text: '0. 功能地图', link: '/manual#_0-先建立一张功能地图' },
          { text: '1. 首次配置与模型接入', link: '/manual#_1-第一次用-先把地基搭稳' },
          { text: '2. 调教 Agent 与人格记忆', link: '/manual#_2-调教-agent-让它越来越趁手' },
          { text: '3. 真实工作与文件交互', link: '/manual#_3-做真实工作-文件-任务和交付标准' },
          { text: '4. Skills、插件与 MCP', link: '/manual#_4-skills-插件与-mcp-把能力装成工具箱' },
          { text: '5. 自动化、Bridge 与远程', link: '/manual#_5-自动化-bridge-与远程访问' },
          { text: '6. 隐藏与进阶能力', link: '/manual#_6-源码里挖到的隐藏与进阶能力' },
          { text: '7. 安全边界与每周维护', link: '/manual#_7-安全边界与每周维护' },
          { text: '8. 推荐学习路径', link: '/manual#_8-一条推荐学习路径' },
          { text: '9. 界面与个性化', link: '/manual#_9-界面-数据与个性化' },
          { text: '10. 常见问题排障', link: '/manual#_10-常见问题与排障' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheEarlyWinter/hanako-user-manual' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 TheEarlyWinter · Built with VitePress'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})
