## API

#### 1、概述

#### 2、接口

以下API接口返回的公共部分如下

```javascript
{
  "code": 0, // 0 成功 -1 参数错误 -2 内部错误
  "msg": "success",
  "time": "2018-05-31 14:39:35",
  "data": {}
}
```

> 病例接口

#### 2.1.1、 按病例类型获取所有病例

| 功能描述 | 按id获取病例                       |
| ---- | -------------------------------- |
| Uri  | /cases?labelid=123  （不传默认返回所有病例） |
| 请求方式 | GET                              |

返回的结果如下：

```json
{
  "data": {
    "cases": [{
      "_id": "345",
      "labelid": "123",
      "type": "儿科",
      "patientId": "567",
      "patientName": "甲",
      "patientSex": 0,
      "patientAge": 24,
      "diagnosis": "诊断",
      "chiefComplaint": "主诉",
      "dialectical": "辩证",
      "prescription": "处方"
    }]
  }
}
```

#### 2.1.2、 获取所有病例类型以及该类型下最新的病例

| 功能描述 | 获取所有病例类型以及该类型下最新的病例                      |
| ---- | ---------------------------------------- |
| Uri  | /label?showcase=true&case-num=1  （不加showcase，默认不结合最新的num条病例） |
| 请求方式 | GET                                      |

返回的结果如下：

```json
{
  "data": {
    "labels": [{
      "_id": "123",
      "type": "儿科",
      "case": [{
        "_id": "345",
        "labelid": "123",
     	  "type": "儿科",
        "patientId": "567",
        "patientName": "甲",
        "patientSex": 0,
        "patientAge": 24,
        "diagnosis": "诊断",
        "chiefComplaint": "主诉",
        "dialectical": "辩证",
        "prescription": "处方"
      }]
    }]
  }
}
```



#### 2.1.3 查看病例

| 功能描述 | 查看病例       |
| ---- | ---------- |
| Uri  | /case/{id} |
| 请求方式 | GET        |

返回的结果如下：

```json
{
  "data": {
    "cases": {
      "_id": "345",
      "labelid": "123",
      "type": "儿科",
      "patientId": "567",
      "patientName": "甲",
      "patientSex": 0,
      "patientAge": 24,
      "diagnosis": "诊断",
      "chiefComplaint": "主诉",
      "dialectical": "辩证",
      "prescription": "处方"
    }
  }
}
```



#### 2.1.4、 新增病例 

| 功能描述 | 新增病例                                     |
| ---- | ---------------------------------------- |
| Uri  | /case                                    |
| 请求方式 | POST                                     |
| Body | "labelid": "123",      "patientName": "甲",        "patientSex": 0,        "patientAge": 24,        "diagnosis": "诊断",        "chiefComplaint": "主诉",        "dialectical": "辩证",        "prescription": "处方" |

返回的结果如下：

```json
{
  "data": {}
}
```



#### 2.1.5、 修改病例

| 功能描述 | 修改病例                                     |
| ---- | ---------------------------------------- |
| Uri  | /case/{id}                               |
| 请求方式 | PUT                                      |
| Body | "labelid": "123",      "patientName": "甲",        "patientSex": 0,        "patientAge": 24,        "diagnosis": "诊断",        "chiefComplaint": "主诉",        "dialectical": "辩证",        "prescription": "处方" |

返回的结果如下：

```json
{
  "data": {}
}
```



#### 2.1.6、 删除病例

| 功能描述 | 删除病例       |
| ---- | ---------- |
| Uri  | /case/{id} |
| 请求方式 | DELETE     |

返回的结果如下：

```json
{
  "data": {}
}
```

> 病例类型接口

#### 2.2.1、修改类型

| 功能描述 | 修改类型         |
| ---- | ------------ |
| Uri  | /label/{id}  |
| 请求方式 | PUT          |
| Body | "type": "儿科" |

返回的结果如下：

```json
{
  "data": {
    type: '儿科',
    _id: id,
    createAt: "2018-10-17T06:43:36.408Z",
    updateAt: "2018-10-17T06:43:36.408Z",
  }
}
```



#### 2.2.2、 删除类型

| 功能描述 | 删除类型        |
| ---- | ----------- |
| Uri  | /label/{id} |
| 请求方式 | DELETE      |

返回的结果如下：

```json
{
  "data": {}
}
```

#### 2.2.3、新增类型

| 功能描述 | 新增类型          |
| ---- | -------------- |
| Uri  | /label         |
| 请求方式 | POST           |
| Body | {"type": "内科","userId": "1234567"} |

返回的结果如下：

```json
{
  "data": {
    _id: '123',
    userId: '1234567',
    type: '内科',
    createAt: "2018-10-17T06:43:36.408Z",
    updateAt: "2018-10-17T06:43:36.408Z",
  }
}
```

#### 2.2.4、按用户查看类型

| 功能描述 | 查看病例           |
| ---- | -------------- |
| Uri  | /label?openId=1234567       |
| 请求方式 | GET           |

返回的结果如下：

```json
{
  "data": [
    {
      _id: '123',
      userId: '123456',
      openId: '1234567',
      type: '内科1',
      createAt: "2018-10-17T06:43:36.408Z",
      updateAt: "2018-10-17T06:43:36.408Z"
    },{
      _id: '234',
      userId: '123456',
      openId: '1234567',
      type: '内科2',
      createAt: "2018-10-17T06:43:36.408Z",
      updateAt: "2018-10-17T06:43:36.408Z"
    }
  ]
}
```

> 用户接口

#### 2.3.1 新增用户

| 功能描述 | 新增用户           |
| ---- | -------------- |
| Uri  | /user       |
| 请求方式 | POST           |
| Body | {"openId": "1234567", "nickName": "QAQ"} |

返回的结果如下：

```json
{
  "data": {
    openId: '1234567',
    nickName: 'QAQ',
    _id: 'ae86'
  }
}
```

#### 2.3.2 查看用户

| 功能描述 | 查看用户           |
| ---- | -------------- |
| Uri  | /user/ae86       |
| 请求方式 | GET           |

返回的结果如下：

```json
{
  "data": {
    openId: '1234567',
    nickName: 'QAQ',
    _id: 'ae86'
  }
}
```

增加某些属性只有本人可见，比如姓名、就诊医院等，病例可评论