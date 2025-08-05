`null` 和 `undefined` 是 JavaScript 中两种不同的原始数据类型，虽然在某些场景下表现相似（如 `==` 比较时返回 `true`），但它们的语义、使用场景和底层逻辑有显著区别。以下从多个维度详细解析：


### 1. **语义与设计初衷**  
- **`undefined`：表示“未定义”**  
  强调“值的缺失”，即变量被声明但未赋值，或访问不存在的属性/数组索引时的默认返回值。  
  是 JavaScript 引擎自动赋予的“默认状态”，通常不需要手动赋值。  

- **`null`：表示“空值”**  
  强调“故意清空值”，即变量被显式赋值为 `null`，表示其当前没有指向任何对象（是一个“空引用”）。  
  是开发者主动设置的“明确状态”，需手动赋值。  


### 2. **出现场景**  
#### `undefined` 的常见场景：  
- 变量声明后未赋值：  
  ```javascript
  let a; 
  console.log(a); // undefined
  ```  
- 函数参数未传递：  
  ```javascript
  function fn(x) { console.log(x); }
  fn(); // undefined（参数 x 未接收值）
  ```  
- 函数未返回值（默认返回 `undefined`）：  
  ```javascript
  function fn() {}
  console.log(fn()); // undefined
  ```  
- 访问对象不存在的属性或数组越界索引：  
  ```javascript
  const obj = { name: 'Alice' };
  console.log(obj.age); // undefined（属性 age 不存在）
  
  const arr = [1, 2];
  console.log(arr[5]); // undefined（索引 5 越界）
  ```  

#### `null` 的常见场景：  
- 显式清空变量的引用（释放对象）：  
  ```javascript
  let obj = { name: 'Bob' };
  obj = null; // 主动清空引用，告知当前无指向对象
  ```  
- 作为函数返回值，表示“无有效结果”：  
  ```javascript
  function findUser(id) {
    if (id < 0) return null; // 无有效用户时返回 null
    return { id: id, name: 'User' };
  }
  ```  
- DOM 元素未找到时（如 `document.getElementById`）：  
  ```javascript
  console.log(document.getElementById('non-existent')); // null
  ```  


### 3. **类型判断差异**  
使用 `typeof` 运算符时，两者返回结果不同：  
- `typeof undefined` → `'undefined'`（正确识别类型）。  
- `typeof null` → `'object'`（历史遗留 Bug，实际 `null` 是原始类型，而非对象）。  

若需精准判断 `null`，需结合 `===` 严格相等：  
```javascript
console.log(typeof undefined); // 'undefined'
console.log(typeof null);      // 'object'（特殊情况）

console.log(null === null);    // true（判断 null 的可靠方式）
```  


### 4. **转换规则差异**  
在强制类型转换中，两者的行为不同：  
- **转布尔值**：均为 `false`（`Boolean(undefined) → false`，`Boolean(null) → false`）。  
- **转数字**：  
  - `undefined` 转数字为 `NaN`（`Number(undefined) → NaN`）。  
  - `null` 转数字为 `0`（`Number(null) → 0`）。  
- **宽松相等（`==`）**：`undefined == null` 返回 `true`（JavaScript 特殊规定），但它们与其他值比较结果不同：  
  ```javascript
  console.log(undefined == null); // true
  console.log(undefined == 0);    // false
  console.log(null == 0);         // false
  ```  


### 5. **总结对比表**  
| 特性                | `undefined`                          | `null`                              |  
|---------------------|--------------------------------------|-------------------------------------|  
| 语义                | 未定义（默认缺失状态）               | 空值（主动清空的状态）              |  
| 赋值方式            | 引擎自动赋予，无需手动赋值           | 需手动显式赋值                      |  
| `typeof` 结果       | `'undefined'`                        | `'object'`（历史 Bug）              |  
| 转数字结果          | `NaN`                                | `0`                                 |  
| 与 `null` 宽松相等  | `undefined == null → true`           | 同上                                |  
| 典型使用场景        | 未赋值变量、缺失参数、不存在的属性   | 清空引用、无结果返回、DOM 未找到    |  


简言之，`undefined` 是“被动未定义”，`null` 是“主动清空”，理解两者的语义差异是正确使用的关键。