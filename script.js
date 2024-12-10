let currentPage = 1; // বর্তমান পেজ
const imagesPerPage = 1156; // প্রতি পেজে কত ছবি দেখানো হবে
let selectedTags = []; // নির্বাচিত ট্যাগগুলি সংরক্ষণ করবে
const images = [
  {"src":"images/People in Action (online) (26)_4.webp","tags":["Front","People1","Working","Talking","Boy"]},
{"src":"images/People in Action (online) (26)_5.webp","tags":["Looking","Side‍","People1","Working","Boy","Searching"]},
{"src":"images/People in Action (online) (26)_6.webp","tags":["Looking","Side‍","People1","Boy","Searching"]},
{"src":"images/People in Action (online) (26)_7.webp","tags":["Looking","Side‍","People1","Computer","Boy","Searching"]},
{"src":"images/People in Action (online) (26)_8.webp","tags":["Front","People2","Standing","Talking","Boy","Girl","Happy"]},
{"src":"images/People in Action (online) (26)_9.webp","tags":["See","Front","People2","Confidence","Standing","Talking","Boy","Happy"]},
{"src":"images/People in Action (online) (27)_1.webp","tags":["See","Looking","Side‍","People1","Confidence","Standing","Boy"]},
{"src":"images/People in Action (online) (27)_10.webp","tags":["Front","People","Working","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (27)_11.webp","tags":["Front","People1","Standing","Talking","Boy","Old"]},
{"src":"images/People in Action (online) (27)_12.webp","tags":["Front","People1","Sitting","Talking","Boy","Old"]},
{"src":"images/People in Action (online) (27)_13.webp","tags":["Side‍","Loser","Sitting","Talking","Boy"]},
{"src":"images/People in Action (online) (27)_14.webp","tags":["People1","Boy"]},
{"src":"images/People in Action (online) (27)_15.webp","tags":["Front","People1","Talking","Boy"]},
{"src":"images/People in Action (online) (27)_16.webp","tags":["Looking","Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (27)_17.webp","tags":["Looking","Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (27)_18.webp","tags":["Looking","Side‍","Front","People1","Standing","Talking"]},
{"src":"images/People in Action (online) (27)_2.webp","tags":["Side‍","Back","People1","Confused","Standing","Boy"]},
{"src":"images/People in Action (online) (27)_3.webp","tags":["Side‍","People1","Boy","Travel"]},
{"src":"images/People in Action (online) (27)_4.webp","tags":["Front","People1","Confidence","Boy","Travel"]},
{"src":"images/People in Action (online) (27)_5.webp","tags":["Looking","People1","Thinking","Confused","Boy","Travel"]},
{"src":"images/People in Action (online) (27)_6.webp","tags":["Side‍","Back","People1","Thinking","Confused","Confidence","Boy","Travel"]},
{"src":"images/People in Action (online) (27)_7.webp","tags":["People1","Thinking","Confused","Boy","Travel"]},
{"src":"images/People in Action (online) (27)_8.webp","tags":["People","Working","Standing","Talking","Boy","Travel"]},
{"src":"images/People in Action (online) (27)_9.webp","tags":["People","Confused","Talking","Boy","Girl"]},
{"src":"images/People in Action (online) (28)_1.webp","tags":["Looking","Front","People1","Standing","Talking"]},
{"src":"images/People in Action (online) (28)_10.webp","tags":["Looking","Front","People1","Standing","Talking","Boy","Girl"]},
{"src":"images/People in Action (online) (28)_11.webp","tags":["Looking","Front","People1","Standing","Talking","Boy","Girl"]},
{"src":"images/People in Action (online) (28)_12.webp","tags":["Looking","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (28)_13.webp","tags":["Looking","Side‍","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (28)_14.webp","tags":["Looking","Side‍","Front","People1","Surprising","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (28)_15.webp","tags":["Looking","Side‍","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (28)_16.webp","tags":["Looking","Side‍","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (28)_17.webp","tags":["Side‍","Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (28)_18.webp","tags":["Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (28)_2.webp","tags":["Looking","Front","People1","Standing","Talking"]},
{"src":"images/People in Action (online) (28)_3.webp","tags":["Looking","Side‍","Front","People1","Standing","Talking","Girl","Enjoy"]},
{"src":"images/People in Action (online) (28)_4.webp","tags":["Looking","Front","People1","Confidence","Standing","Girl"]},
{"src":"images/People in Action (online) (28)_5.webp","tags":["Looking","Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (28)_6.webp","tags":["Looking","Front","People1","Confidence","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (28)_7.webp","tags":["Looking","Front","People1","Standing"]},
{"src":"images/People in Action (online) (28)_8.webp","tags":["Looking","Front","People1","Standing"]},
{"src":"images/People in Action (online) (28)_9.webp","tags":["Looking","Front","People1","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (4)_10.webp","tags":["Front","People1","Standing","Girl","Happy"]},
{"src":"images/People in Action (online) (4)_11.webp","tags":["Front","People1","Girl"]},
{"src":"images/People in Action (online) (4)_12.webp","tags":["People1","Loser","Sleep"]},
{"src":"images/People in Action (online) (4)_13.webp","tags":["Looking","Front","People1","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (4)_14.webp","tags":["See","Looking","Front","People1","Thinking","Standing","Boy"]},
{"src":"images/People in Action (online) (4)_15.webp","tags":["Front","People1","Standing"]},
{"src":"images/People in Action (online) (4)_16.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (4)_17.webp","tags":["Side‍","Front","People1","Thinking","Computer","Standing","Boy"]},
{"src":"images/People in Action (online) (4)_18.webp","tags":["Looking","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (4)_4.webp","tags":["Baby","Front","People1","Standing"]},
{"src":"images/People in Action (online) (4)_5.webp","tags":["Baby","Front","People1","Standing"]},
{"src":"images/People in Action (online) (4)_6.webp","tags":["Baby","Side‍","Front","People1","Loser","Standing"]},
{"src":"images/People in Action (online) (4)_7.webp","tags":["Baby","Front","People1","Standing"]},
{"src":"images/People in Action (online) (4)_8.webp","tags":["Looking","Side‍","Front","People1","Relaxed","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (4)_9.webp","tags":["Looking","Side‍","Front","People1","Confused","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_1.webp","tags":["Front","People1","Standing","Sitting","Boy"]},
{"src":"images/People in Action (online) (5)_10.webp","tags":["Front","People1","Relaxed","Girl"]},
{"src":"images/People in Action (online) (5)_11.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_12.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_13.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_14.webp","tags":["See","Looking","Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_15.webp","tags":["See","Looking","Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (5)_16.webp","tags":["See","Looking","Side‍","Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (5)_17.webp","tags":["See","Side‍","Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_18.webp","tags":["Front","People1"]},
{"src":"images/People in Action (online) (5)_2.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (5)_3.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (5)_4.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (5)_5.webp","tags":["People1","Boy"]},
{"src":"images/People in Action (online) (5)_6.webp","tags":["People1","Working","Searching"]},
{"src":"images/People in Action (online) (5)_7.webp","tags":["Front","People1","Confidence","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_8.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (5)_9.webp","tags":["Side‍","Front","People1","Relaxed","Girl"]},
{"src":"images/People in Action (online) (6)_1.webp","tags":["Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (6)_10.webp","tags":["Front","People1","Confused","Relaxed","Sitting","Girl"]},
{"src":"images/People in Action (online) (6)_11.webp","tags":["People1","Confused","Girl"]},
{"src":"images/People in Action (online) (6)_12.webp","tags":["See","Looking","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (6)_13.webp","tags":["Looking","Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (6)_14.webp","tags":["Looking","Front","People1","Standing","Talking","Girl","Searching"]},
{"src":"images/People in Action (online) (6)_15.webp","tags":["Front","People1","Girl","Searching"]},
{"src":"images/People in Action (online) (6)_16.webp","tags":["Front","People1","Girl","Searching"]},
{"src":"images/People in Action (online) (6)_17.webp","tags":["See","Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (6)_18.webp","tags":["Front","People1","Standing","Girl","Enjoy"]},
{"src":"images/People in Action (online) (6)_2.webp","tags":["People1"]},
{"src":"images/People in Action (online) (6)_3.webp","tags":["People1"]},
{"src":"images/People in Action (online) (6)_4.webp","tags":["People1","Girl","Travel"]},
{"src":"images/People in Action (online) (6)_5.webp","tags":["Looking","Front","People1","Confidence","Standing","Girl"]},
{"src":"images/People in Action (online) (6)_6.webp","tags":["See","Looking","Front","People1","Confused","Standing","Girl"]},
{"src":"images/People in Action (online) (6)_7.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (6)_8.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (6)_9.webp","tags":["People1","Working","Sitting","Girl"]},
{"src":"images/People in Action (online) (7)_1.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (7)_10.webp","tags":["Front","People1","Thinking","Confused","Standing","Boy"]},
{"src":"images/People in Action (online) (7)_11.webp","tags":["Looking","Front","People1","Thinking","Standing","Boy"]},
{"src":"images/People in Action (online) (7)_12.webp","tags":["See","Looking","Front","People1","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (7)_13.webp","tags":["Looking","Front","People1","Confused","Standing","Boy"]},
{"src":"images/People in Action (online) (7)_14.webp","tags":["See","Side‍","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (7)_15.webp","tags":["See","Looking","Front","People1","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (7)_16.webp","tags":["Looking","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (7)_17.webp","tags":["Looking","Front","People1","Standing","Sitting","Boy"]},
{"src":"images/People in Action (online) (7)_18.webp","tags":["Looking","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (7)_2.webp","tags":["Looking","Front","People1","Surprising","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (7)_3.webp","tags":["People1"]},
{"src":"images/People in Action (online) (7)_4.webp","tags":["See","Back","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (7)_5.webp","tags":["People1","Sitting","Girl"]},
{"src":"images/People in Action (online) (7)_6.webp","tags":["shopping","People1","Girl"]},
{"src":"images/People in Action (online) (7)_7.webp","tags":["See","Side‍","People1","Girl"]},
{"src":"images/People in Action (online) (7)_8.webp","tags":["Side‍","Front","People1","Girl"]},
{"src":"images/People in Action (online) (7)_9.webp","tags":["People1","Girl"]},
{"src":"images/People in Action (online) (8)_1.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_10.webp","tags":["People1","Loser","Boy","Travel"]},
{"src":"images/People in Action (online) (8)_11.webp","tags":["Front","People1","Confused","Sitting","Boy"]},
{"src":"images/People in Action (online) (8)_12.webp","tags":["Front","People1","Loser","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_13.webp","tags":["People1","Loser","Boy"]},
{"src":"images/People in Action (online) (8)_14.webp","tags":["Front","People1","Standing","Talking","Boy","Happy"]},
{"src":"images/People in Action (online) (8)_15.webp","tags":["People1","Sitting","Boy"]},
{"src":"images/People in Action (online) (8)_16.webp","tags":["Front","People1","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (8)_17.webp","tags":["See","Looking","Side‍","Front","People1","Standing","Talking","Girl","Enjoy"]},
{"src":"images/People in Action (online) (8)_18.webp","tags":["Looking","Front","People1","Standing","Girl","Enjoy"]},
{"src":"images/People in Action (online) (8)_2.webp","tags":["Front","People1","Standing","Boy","Searching"]},
{"src":"images/People in Action (online) (8)_3.webp","tags":["Back","People1","Working","Standing","Boy","Travel"]},
{"src":"images/People in Action (online) (8)_4.webp","tags":["See","Front","People1","Confused","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_5.webp","tags":["Looking","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_6.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_7.webp","tags":["See","Looking","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_8.webp","tags":["See","Front","People1","Standing","Boy"]},
{"src":"images/People in Action (online) (8)_9.webp","tags":["See","Front","People1","Working","Boy"]},
{"src":"images/People in Action (online) (9)_1.webp","tags":["Front","People1","Standing","Talking","Enjoy","idea"]},
{"src":"images/People in Action (online) (9)_10.webp","tags":["See","Front","People1","Standing","Talking","Girl","Happy"]},
{"src":"images/People in Action (online) (9)_11.webp","tags":["Side‍","People1","Standing","Girl"]},
{"src":"images/People in Action (online) (9)_12.webp","tags":["Looking","Front","People1","Surprising","Standing","Girl"]},
{"src":"images/People in Action (online) (9)_13.webp","tags":["Side‍","Front","People1","Confidence","Standing","Girl"]},
{"src":"images/People in Action (online) (9)_14.webp","tags":["Side‍","Front","People1","Confidence","Standing"]},
{"src":"images/People in Action (online) (9)_15.webp","tags":["Front","People1","Thinking","Loser","Sitting","Boy"]},
{"src":"images/People in Action (online) (9)_16.webp","tags":["See","People1","Loser","Standing","Sitting","Talking","Boy"]},
{"src":"images/People in Action (online) (9)_17.webp","tags":["See","People1","Loser","Standing","Talking","Boy"]},
{"src":"images/People in Action (online) (9)_18.webp","tags":["See","Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (9)_2.webp","tags":["Looking","Front","People1","Standing","Girl","idea"]},
{"src":"images/People in Action (online) (9)_3.webp","tags":["People1","Boy","Sleep"]},
{"src":"images/People in Action (online) (9)_4.webp","tags":["Side‍","Front","People1","Working","Sitting","Talking","Boy"]},
{"src":"images/People in Action (online) (9)_5.webp","tags":["Front","People1","Standing","Talking"]},
{"src":"images/People in Action (online) (9)_6.webp","tags":["See","Front","People1","Standing","Talking","Girl","Happy"]},
{"src":"images/People in Action (online) (9)_7.webp","tags":["People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (9)_8.webp","tags":["Front","People1","Standing","Talking","Girl"]},
{"src":"images/People in Action (online) (9)_9.webp","tags":["Front","People1","Standing","Girl"]},
{"src":"images/Sport and Fitness (online) (1)_1.webp","tags":["People1"]},
{"src":"images/Sport and Fitness (online) (1)_10.webp","tags":["People2","Standing","Talking"]},
{"src":"images/Sport and Fitness (online) (1)_11.webp","tags":["Baby","Front","People","Standing","Talking","Enjoy"]},
{"src":"images/Sport and Fitness (online) (1)_12.webp","tags":["Front","People3","Standing","Talking","Girl","Travel"]},
{"src":"images/Sport and Fitness (online) (1)_13.webp","tags":["People3","Standing","Talking","Travel"]},
{"src":"images/Sport and Fitness (online) (1)_14.webp","tags":["People1","Boy","Sleep"]},
{"src":"images/Sport and Fitness (online) (1)_15.webp","tags":["Front","People1","Boy","Sleep"]},
{"src":"images/Sport and Fitness (online) (1)_16.webp","tags":["People","People2","Loser","Working","Standing","Talking","Boy"]},
{"src":"images/Sport and Fitness (online) (1)_17.webp","tags":["People2","Standing","Talking","Boy"]},
{"src":"images/Sport and Fitness (online) (1)_18.webp","tags":["People2","Thinking","Standing","Talking","Girl"]},
{"src":"images/Sport and Fitness (online) (1)_2.webp","tags":["People1"]},
{"src":"images/Sport and Fitness (online) (1)_3.webp","tags":["People1"]},
{"src":"images/Sport and Fitness (online) (1)_4.webp","tags":["People1"]},
{"src":"images/Sport and Fitness (online) (1)_5.webp","tags":["Front","People1","Talking","Girl","Happy"]},
{"src":"images/Sport and Fitness (online) (1)_6.webp","tags":["Looking","People2","Standing","Boy"]},
{"src":"images/Sport and Fitness (online) (1)_7.webp","tags":["Front","People1","Standing","Boy"]},
{"src":"images/Sport and Fitness (online) (1)_8.webp","tags":["People1","Boy","Sleep"]},
{"src":"images/Sport and Fitness (online) (1)_9.webp","tags":["People1","Boy","Sleep"]},
{"src":"images/Technology (online) (2)_1.webp","tags":["Computer"]},
{"src":"images/Technology (online) (2)_10.webp","tags":[]},
{"src":"images/Technology (online) (2)_11.webp","tags":[]},
{"src":"images/Technology (online) (2)_12.webp","tags":[]},
{"src":"images/Technology (online) (2)_13.webp","tags":[]},
{"src":"images/Technology (online) (2)_14.webp","tags":[]},
{"src":"images/Technology (online) (2)_15.webp","tags":[]},
{"src":"images/Technology (online) (2)_16.webp","tags":[]},
{"src":"images/Technology (online) (2)_17.webp","tags":[]},
{"src":"images/Technology (online) (2)_18.webp","tags":[]},
{"src":"images/Technology (online) (2)_2.webp","tags":["Computer"]},
{"src":"images/Technology (online) (2)_3.webp","tags":["Computer"]},
{"src":"images/Technology (online) (2)_4.webp","tags":["Computer"]},
{"src":"images/Technology (online) (2)_5.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (2)_6.webp","tags":["Computer"]},
{"src":"images/Technology (online) (2)_7.webp","tags":[]},
{"src":"images/Technology (online) (2)_8.webp","tags":[]},
{"src":"images/Technology (online) (2)_9.webp","tags":["Computer"]},
{"src":"images/Technology (online) (3)_1.webp","tags":[]},
{"src":"images/Technology (online) (3)_10.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (3)_11.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (3)_12.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (3)_13.webp","tags":["Front","People1","Standing","Talking"]},
{"src":"images/Technology (online) (3)_14.webp","tags":["Looking","Side‍","Back","Front","People1","Standing"]},
{"src":"images/Technology (online) (3)_15.webp","tags":["Side‍","Front","People1","Standing","Boy"]},
{"src":"images/Technology (online) (3)_16.webp","tags":["Side‍","Front","People1","Standing","Talking","Boy"]},
{"src":"images/Technology (online) (3)_17.webp","tags":["Front","People1","Confused","Standing","Talking","Girl"]},
{"src":"images/Technology (online) (3)_18.webp","tags":["Looking","Front","People1","Standing","Talking","Girl"]},
{"src":"images/Technology (online) (3)_2.webp","tags":[]},
{"src":"images/Technology (online) (3)_3.webp","tags":[]},
{"src":"images/Technology (online) (3)_4.webp","tags":[]},
{"src":"images/Technology (online) (3)_5.webp","tags":[]},
{"src":"images/Technology (online) (3)_6.webp","tags":[]},
{"src":"images/Technology (online) (3)_7.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (3)_8.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (3)_9.webp","tags":["Computer","Working"]},
{"src":"images/Technology (online) (4)_1.webp","tags":["Looking","Front","People1","Standing","Girl"]},
{"src":"images/Technology (online) (4)_10.webp","tags":["Looking","Front","People1","Standing","Girl"]},
{"src":"images/Technology (online) (4)_11.webp","tags":["Looking","Front","People1","Surprising","Working","Standing","Talking","Boy"]},
{"src":"images/Technology (online) (4)_12.webp","tags":["Looking","Front","People1","Computer","Working","Standing","Girl"]},
{"src":"images/Technology (online) (4)_13.webp","tags":["Side‍","Back","People1","Computer","Working","Standing","Boy"]},
{"src":"images/Technology (online) (4)_14.webp","tags":["Computer"]},
{"src":"images/Technology (online) (4)_15.webp","tags":["Looking","Front","People1","Working","Standing","Boy"]},
{"src":"images/Technology (online) (4)_16.webp","tags":["Side‍","People1","Computer","Working","Sitting","Girl"]},
{"src":"images/Technology (online) (4)_17.webp","tags":["Side‍","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (4)_18.webp","tags":["People1","Computer","Working","Boy"]},
{"src":"images/Technology (online) (4)_2.webp","tags":["Looking","Front","People1","Standing","Talking","Girl"]},
{"src":"images/Technology (online) (4)_3.webp","tags":["Looking","Front","People1","Confused","Standing","Talking"]},
{"src":"images/Technology (online) (4)_4.webp","tags":["Looking","Front","People1","Confidence","Standing","Talking","Boy"]},
{"src":"images/Technology (online) (4)_5.webp","tags":["Looking","Front","People1","Surprising","Standing","Talking","Girl","Happy"]},
{"src":"images/Technology (online) (4)_6.webp","tags":["Looking","Front","People1","Standing","Talking","Girl","Happy"]},
{"src":"images/Technology (online) (4)_7.webp","tags":["People1","Standing","Boy"]},
{"src":"images/Technology (online) (4)_8.webp","tags":["Looking","People2","Standing","Girl"]},
{"src":"images/Technology (online) (4)_9.webp","tags":["Looking","Front","People1","Computer","Standing","Girl"]},
{"src":"images/Technology (online) (5)_1.webp","tags":["Looking","Front","People1","Computer","Confidence","Working","Standing","Talking","Girl","Happy"]},
{"src":"images/Technology (online) (5)_10.webp","tags":["Front","People1","Computer","Relaxed","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (5)_11.webp","tags":["Front","People1","Computer","Working","Sitting","Talking","Boy","Enjoy","Happy"]},
{"src":"images/Technology (online) (5)_12.webp","tags":["Back","People1","Computer","Working","Sitting","Girl"]},
{"src":"images/Technology (online) (5)_13.webp","tags":["Back","People1","Computer","Working","Sitting","Girl"]},
{"src":"images/Technology (online) (5)_14.webp","tags":["People","People1","Computer","Girl"]},
{"src":"images/Technology (online) (5)_15.webp","tags":["People","Computer"]},
{"src":"images/Technology (online) (5)_16.webp","tags":["People","Computer","Sitting"]},
{"src":"images/Technology (online) (5)_17.webp","tags":["Front","People1","Computer","Working","Sitting"]},
{"src":"images/Technology (online) (5)_18.webp","tags":["Front","People1","Computer","Working","Sitting","Boy","Angry"]},
{"src":"images/Technology (online) (5)_2.webp","tags":["Looking","Front","People1","Computer","Working","Sitting","Talking","Girl"]},
{"src":"images/Technology (online) (5)_3.webp","tags":["Side‍","People1","Computer","Working","Sitting","Talking","Boy"]},
{"src":"images/Technology (online) (5)_4.webp","tags":["People1","Computer","Working","Sitting","Boy","Angry"]},
{"src":"images/Technology (online) (5)_5.webp","tags":["Front","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (5)_6.webp","tags":["Front","People1","Computer","Working","Sitting","Talking","Boy"]},
{"src":"images/Technology (online) (5)_7.webp","tags":["Side‍","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (5)_8.webp","tags":["Front","People1","Computer","Working","Sitting","Girl"]},
{"src":"images/Technology (online) (5)_9.webp","tags":["Side‍","Back","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (6)_1.webp","tags":["Side‍","Front","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (6)_10.webp","tags":["People","Computer","Working","Sitting","Talking","Boy"]},
{"src":"images/Technology (online) (6)_11.webp","tags":["Computer","Sitting","Talking","Boy"]},
{"src":"images/Technology (online) (6)_12.webp","tags":["Front","People1","Computer","Sitting","Talking","Boy","Happy"]},
{"src":"images/Technology (online) (6)_13.webp","tags":["Front","People1","Working","Boy"]},
{"src":"images/Technology (online) (6)_14.webp","tags":["Looking","Front","People1","Standing","Talking","Girl"]},
{"src":"images/Technology (online) (6)_15.webp","tags":["Side‍","People1","Working","Standing","Boy"]},
{"src":"images/Technology (online) (6)_16.webp","tags":[]},
{"src":"images/Technology (online) (6)_17.webp","tags":["Working"]},
{"src":"images/Technology (online) (6)_18.webp","tags":["Working"]},
{"src":"images/Technology (online) (6)_2.webp","tags":["Side‍","Front","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (6)_3.webp","tags":["Side‍","Front","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (6)_4.webp","tags":["Side‍","Back","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (6)_5.webp","tags":["Front","People1","Computer","Working","Sitting","Boy","Angry"]},
{"src":"images/Technology (online) (6)_6.webp","tags":["Front","People2","Computer","Working","Sitting","Boy"]},
{"src":"images/Technology (online) (6)_7.webp","tags":["People2","Computer","Working","Sitting","Boy","Girl"]},
{"src":"images/Technology (online) (6)_8.webp","tags":["Side‍","People2","Computer","Working","Sitting","Talking"]},
{"src":"images/Technology (online) (6)_9.webp","tags":["Side‍","People2","Computer","Working","Sitting","Talking","Boy"]},
{"src":"images/Toys and Games (online) (1)_10.webp","tags":["Baby","Front","People1","Girl"]},
{"src":"images/Toys and Games (online) (1)_11.webp","tags":["Baby","Front","People1","Girl","Cry"]},
{"src":"images/Toys and Games (online) (1)_12.webp","tags":["Baby","Front","People2","People1","Surprising","Talking","Boy","Girl"]},
{"src":"images/Toys and Games (online) (1)_13.webp","tags":["Baby","People1","Surprising","Boy"]},
{"src":"images/Toys and Games (online) (1)_14.webp","tags":["Baby","People1","Surprising","Girl"]},
{"src":"images/Toys and Games (online) (1)_15.webp","tags":["Baby","Front","People1","Boy"]},
{"src":"images/Toys and Games (online) (1)_16.webp","tags":["Baby","Front","People1","Surprising","Working","Talking","Girl"]},
{"src":"images/Toys and Games (online) (1)_17.webp","tags":["Baby","People2","Surprising","Standing","Talking","Boy"]},
{"src":"images/Toys and Games (online) (1)_18.webp","tags":["Baby","People2","Surprising","Sitting","Talking"]},
{"src":"images/Toys and Games (online) (1)_3.webp","tags":[]},
{"src":"images/Toys and Games (online) (1)_4.webp","tags":[]},
{"src":"images/Toys and Games (online) (1)_5.webp","tags":["shopping"]},
{"src":"images/Toys and Games (online) (1)_6.webp","tags":[]},
{"src":"images/Toys and Games (online) (1)_7.webp","tags":["shopping"]},
{"src":"images/Toys and Games (online) (1)_8.webp","tags":["Front","People1","Standing","Talking","Boy","Enjoy","Happy"]},
{"src":"images/Toys and Games (online) (1)_9.webp","tags":["Baby","Front","People1","Confused","Standing","Talking","Boy","Angry"]},
{"src":"images/Toys and Games (online) (2)_1.webp","tags":["Baby"]},
{"src":"images/Toys and Games (online) (2)_2.webp","tags":["shopping","Baby","People2","Surprising","Working","Sitting","Talking","Boy","Girl"]},
{"src":"images/Toys and Games (online) (2)_3.webp","tags":["Baby","People","Surprising","Talking","Boy"]},
{"src":"images/Toys and Games (online) (2)_4.webp","tags":["Baby","Side‍","Front","Talking","Boy","Enjoy","Happy"]},
{"src":"images/Toys and Games (online) (2)_5.webp","tags":["shopping","Baby","People","Surprising","Sitting","Talking","Boy"]},
{"src":"images/Toys and Games (online) (2)_6.webp","tags":["Baby","Front","People2","Surprising","Sitting","Talking","Boy"]},
{"src":"images/Toys and Games (online) (2)_7.webp","tags":["Looking","Side‍","People1","Surprising","Working","Sitting","Talking","Girl"]},
{"src":"images/Toys and Games (online) (2)_8.webp","tags":["Side‍","Back","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Toys and Games (online) (2)_9.webp","tags":["Side‍","Back","People1","Computer","Working","Sitting","Boy"]},
// আরও ইমেজ যোগ করুন
];
// পেজিনেশন যুক্ত করে ইমেজ ডিসপ্লে ফাংশন
function displayImagesWithPagination() {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // পুরানো ইমেজ মুছে ফেলুন

  const filteredImages = images.filter(image =>
    selectedTags.length === 0 || selectedTags.every(tag => image.tags.includes(tag))
  );

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, filteredImages.length);
  const imagesToShow = filteredImages.slice(startIndex, endIndex);

  imagesToShow.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = "Image";
    imgElement.classList.add('resizable');
    gallery.appendChild(imgElement);
  });

  const paginationControls = document.createElement("div");
  paginationControls.className = "pagination-controls";

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.onclick = () => {
      currentPage--;
      displayImagesWithPagination();
    };
    paginationControls.appendChild(prevButton);
  }

  if (endIndex < filteredImages.length) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.onclick = () => {
      currentPage++;
      displayImagesWithPagination();
    };
    paginationControls.appendChild(nextButton);
  }

  gallery.appendChild(paginationControls);
}

// ইমেজ সাইজ পরিবর্তন করার ফাংশন
function resizeImages(size) {
  const images = document.querySelectorAll("#image-gallery img"); // সব ইমেজ নির্বাচন করুন
  images.forEach(img => {
    img.style.width = `${size}px`; // ইমেজের প্রস্থ পরিবর্তন
  });
}

// স্লাইডার ইভেন্ট লিসেনার যোগ করুন
document.getElementById("size-slider").addEventListener("input", function () {
  resizeImages(this.value); // স্লাইডারের মান অনুযায়ী ইমেজ সাইজ পরিবর্তন
});


// মাল্টিপল কিওয়ার্ড সিলেকশন সাপোর্ট
function toggleTag(tag) {
  const button = document.querySelector(`button[data-tag="${tag}"]`);

  if (selectedTags.includes(tag)) {
    // যদি ট্যাগ ইতিমধ্যে আছে, তাহলে তা সরান
    selectedTags = selectedTags.filter(t => t !== tag);
    button.classList.remove("selected"); // বাটন থেকে ক্লাস সরান
  } else {
    // নতুন ট্যাগ যোগ করুন
    selectedTags.push(tag);
    button.classList.add("selected"); // বাটনে ক্লাস যোগ করুন
  }

  currentPage = 1; // নতুন ট্যাগ সিলেক্ট হলে প্রথম পেজে যান
  displayImagesWithPagination();
}

// বাটন ক্লিক ইভেন্ট
function filterImages(tag) {
  toggleTag(tag); // ট্যাগকে টগল করুন
}

// ডিফল্টভাবে সব ইমেজ দেখান
displayImagesWithPagination();


// ডিফল্টভাবে সব ইমেজ দেখান
displayImagesWithPagination();
