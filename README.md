# micro.js JavaScript frameworks
เฟิร์มแวร์จาวาสคริปสัญชาติไทย ออกแบบให้มีขนาดเล็ก และใช้งานได้ง่ายมากที่สุด ฟังก์ชั่นแบ่งออกเป็นหลายโมดูล เลือกใช้ฟังก์ชั่นใดสามารถกำหนดได้จากการอ้างอิงไฟล์โมดูลเข้ามาในหน้าเว็บ

# API
`micro.js` หรือ `micro.mini.js`
- $(query) - CSS selectors
- Object.find(query) - เลือกอิลิเมนต์ย่อย
- Object.hide() - ซ่อนอิลิเมนต์
- Object.show() - แสดงอิลิเมนต์
- Object.css(property) - อ่านค่าสไตล์
- Object.css(property, style) - เซ็ตค่าสไตล์
- Object.html() - ดึงโค้ดออกมาจากอิลิเมนต์
- Object.html(code) - เซ็ตโค้ดในอิลิเมนต์
- Object.text() - ดึงข้อความออกมาจากอิลิเมนต์ (โค้ด HTML จะถูกตัดทิ้ง)
- Object.text(text) - เซ็ตข้อความในอิลิเมนต์
- Object.remove() - ลบอิลิเมนต์
- Object.on(event, handler) - more...
- Object.attr(name) - อ่านค่าแอตทริบิวต์ในอิลิเมนต์
- Object.attr(name, value) - เซ็ตค่าแอตทริบิวต์ในอิลิเมนต์
- Object.removeAttr(name) - ลบค่าแอตทริบิวต์ในอิลิเมนต์

`micro.module.form.js` หรือ `micro.module.form.mini.js`
- Object.submit() - ส่งค่าฟอร์ม
- Object.submit(fn) - เมื่อฟอร์มถูก submit (on submit)
- Object.val() - ดึงค่า value ออกมาจากอิลิเมนต์ input
- Object.val(text) - เซ็ตค่าในอิลิเมนต์ input
- Object.click(fn) - เมื่ออิลิเมนต์ถูกคลิก (on click)
- Object.serialize() - ดึงข้อมูลออกมาจากทั้งฟอร์ม

`micro.module.ajax.js` or `micro.module.ajax.mini.js`
- $.ajax(url[, setting])
- $.ajax(setting)
- $.post(url, data, success, dataType)
- $.get(url, success, dataType)
- $.json(url, success)
