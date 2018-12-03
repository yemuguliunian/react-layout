﻿# 快速布局
## 示例
#### 1，基础CURD布局
##### 效果图
![CURD][1]
##### 使用方法
```javascript
import React from 'react';
import { VtxGrid, VtxDatagrid } from 'vtx-ui';
import { 
    Page, BtnWrap, Content, TableWrap, 
    Button, TimeBox, CountDown
} from '../components/layout';

import { Input, message } from 'antd';

function CURD() {
    return (
        <Page title="CURD快速布局">
        	<VtxGrid gridweight={[1]} titles={['测试']}>
        		<Input/>
    		</VtxGrid>
            <Content top={48}>
                {/*按钮*/}
                <BtnWrap >
                    <Button fType="add">新增</Button>
                    <Button fType="view">查看</Button>
                    <Button fType="edit">编辑</Button>
                    <Button fType="delete">删除</Button>
                    <Button fType="import">导入</Button>
                    <Button fType="export">导出</Button>
                    <Button icon="sync">同步</Button>
                </BtnWrap>
                {/*表格*/}
            	<TableWrap top={48}>
                    <VtxDatagrid 
                        title={() => {
                            return (
                                <span>
                                    <CountDown 
                                        count={10} manual={true}
                                        refresh={() => {
                                            message.info('这边执行刷新操作');
                                        }}
                                    />
                                    <TimeBox/>
                                </span>
                            )
                        }}
                        columns={[
                            {title : '测试', dataIndex : 'key', key : 'key'},
                            {title : '操作', dataIndex : 'action', key : 'action'},
                        ]}
                        dataSource={[]}
                        autoFit
                    />
                </TableWrap>
            </Content>
        </Page>
    );
}
```
#### 2，左右布局
##### 效果图
![左右布局][2]
##### 使用方法
```javascript
import { Page, Flex } from '../components/layout';

<Page title="左右布局">
    <Flex>
        <Flex.Left space={10} width={250}>
            <VtxTree
                isShowSearchInput 
                data={[{
                    name : '测试树',
                    key : 'root',
                    children : [{
                        name : '测试树节点一',
                        key : 'root1',
                    }]
                }]}
                isExpandAll="openAll"
            />
        </Flex.Left>
        <Flex.Right>
            {/*curd示例*/}
        </Flex.Right>
    </Flex>
</Page>
```
#### 3，其它
##### 效果图
![其他][3]
##### 使用方法
```javascript
import { Page, RadioWrap, Content, Cell } from '../components/layout';

<Page title="查看页面示例">
    <RadioWrap >
    	<RadioGroup >
            <Radio value={1}>苏州大型处置单位一</Radio>
            <Radio value={2}>苏州大型处置单位二</Radio>
            <Radio value={3}>苏州大型处置单位三</Radio>
            <Radio value={4}>苏州大型处置单位四</Radio>
            <Radio value={5}>苏州大型处置单位五</Radio>
            <Radio value={6}>苏州大型处置单位六</Radio>
            <Radio value={7}>苏州大型处置单位七</Radio>
            <Radio value={8}>苏州大型处置单位八</Radio>
            <Radio value={9}>苏州大型处置单位九</Radio>
            <Radio value={10}>苏州大型处置单位十</Radio>
        </RadioGroup>
    </RadioWrap>
    <Content top={60}>
        <Cell space="0 10px">
            <h5>苏州大型处置单位趋势图</h5>
        </Cell>
        <Cell>
            <Cell.Item>
                <Cell.Item.Title>测试：</Cell.Item.Title>
                <Cell.Item.Body>
                    <Input />
                </Cell.Item.Body>
            </Cell.Item>
            <Cell.Item>
                <Cell.Item.Title>测试：</Cell.Item.Title>
                <Cell.Item.Body>
                    <Input />
                </Cell.Item.Body>
            </Cell.Item>
        </Cell>
    </Content>
</Page>
```
## API
### Page
页面

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| title     | HTML title | string | |

### Content
内容

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| top     | 元素的顶部边缘 | number | |
| scrollY | Y轴是否可滚动 | boolean | false |
| relative | 是否相对定位 | boolean | false |
| height | 高度 | number | |

### BtnWrap
按钮块

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| top     | 元素的顶部边缘 | number | |

### TableWrap
表格容器

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| top     | 元素的顶部边缘 | number | |
| relative | 是否相对定位 | boolean | false |
| height | 高度（相对定位时生效） | number | |

### RadioWrap
顶部radio容器

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| shadow | 是否显示阴影 | boolean | true |

### ModalBodyWrap
moadl Body内容容器(主要设置了Y轴可滚动，高度设置为50vh)

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| loading | 加载中 | boolean | false |

### Flex
左右布局

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |

#### Flex.Left
| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| width | 宽 | number | 250 |

#### Flex.Right
| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |

### Button
立意 ： 为了按钮Icon图表和样式的统一管理

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| fType     | 类型 | string（add:新增，view:查看，edit:修改，delete:删除，import:导入，export:导出）  | |
| ... | 参考antd Button |  |  |

### CountDown
倒计时刷新数据

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| count | 多少秒计时 | number | 10 |
| manual | 是否显示手动刷新 | boolean | true | 
| isDestroy | 是否直接销毁定时器（适用于tab切换场景）| boolean | false |
| refresh | 刷新回调函数，在此执行数据刷新 | function | |

### TimeBox
时间沙盒

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|


  [1]: ./doc/demo/curd.png
  [2]: ./doc/demo/tree.png
  [3]: ./doc/demo/view.png