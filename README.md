getElementById, getElementsByClassName, and querySelector / querySelectorAll different??
Ans: getElementById = একটা মাত্র element select করা যায়। getElementsByClassName = অনেকগুলো element select করা যায়। querySelector = css selector মতো প্রথম matching element দিয়ে থাকে।  querySelectorAll = css selector মতো সবগুলো matching element দিয়ে থাকে
How do you create and insert a new element into the DOM?
ans: p নামে একটা Element তইরী করবো।
     1st paragraph নামে একটা variable নিবো। p নামে একটা element creat করবো।
     এরপর paragraph.innerHtml =""দিয়ে কি লিখতে চাই লিখে দিবো।
What is Event Bubbling and how does it work?
Ans: একটা event element-এ ঘটার পরে তার parent elements-এ ধাপে ধাপে চলে যায়।
What is Event Delegation in JavaScript? Why is it useful?
Ans: Parent button-এর click ধরো, child button-এ আলাদা listener লাগবে না।
What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() =ব্রাউজারের ডিফল্ট আচরণ বন্ধ করে।
     stopPropagation()= bubling off করা।

