import {
  BugOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className="default-footer"
      copyright={`${currentYear} 中国石油大学（华东） 青岛软件学院/计算机科学与技术学院`}
      links={[
        {
          key: 'master',
          title: (
            <>
              <UserOutlined /> Editor：Xiangqi Meng UPC
            </>
          ),
          href: 'https://space.bilibili.com/12890453',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 前端代码
            </>
          ),
          href: 'https://github.com/mengxiangqiqin/EasySQL-Front',
          blankTarget: true,
        },
          {
              key: 'github',
              title: (
                  <>
                      <GithubOutlined /> 后端代码
                  </>
              ),
              href: 'https://github.com/mengxiangqiqin/EasySQL-BackEnd',
              blankTarget: true,
          },
      ]}
    />
  );
};

export default GlobalFooter;
