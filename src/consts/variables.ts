export const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  legend: {
    display: false,
  },
};

export const actionsConversion = {
  number: ["(92)"],
  integers: [
    "(59)",
    "(60)",
    "(61)",
    "(62)",
    "(93)",
    "(94)",
    "(96)",
    "(51)",
    "(56)",
    "(72)",
  ],
  numbers: [
    "(21-22)",
    "(9-10)",
    "(13-14)",
    "(15-16)",
    "(17-18)",
    "(25-26)",
    "(29-30)",
    "(89-90)",
    "(99-100)",
  ],
  BCDs: ["(53-55)", "(49-50)", "(27-28)"],
  floats: [
    "(1-2)",
    "(3-4)",
    "(5-6)",
    "(7-8)",
    "(11-12)",
    "(27-28)",
    "(19-20)",
    "(23-24)",
    "(31-32)",
    "(35-36)",
    "(33-34)",
    "(37-38)",
    "(39-40)",
    "(41-42)",
    "(43-44)",
    "(45-46)",
    "(47-48)",
    "(97-98)",
    "(77-78)",
    "(79-80)",
    "(81-82)",
    "(83-84)",
    "(85-86)",
    "(87-88)",
  ],
};

export const arrOptions = [
  "(1-2) Flow Rate",
  "(3-4) Energy Flow Rate",
  "(5-6) Velocity",
  "(7-8) Fluid sound speed",
  "(9-10) Positive accumulator",
  "(11-12) Positive decimal fraction",
  "(13-14) Negative accumulator",
  "(15-16) Negative decimal fraction",
  "(17-18) Positive energy accumulator",
  "(19-20) Positive energy decimal fraction",
  "(21-22) Negative energy accumulator",
  "(23-24) Negative energy decimal fraction",
  "(25-26) Net accumulator",
  "(27-28) Net decimal fraction",
  "(29-30) Net energy accumulator",
  "(31-32) Net energy decimal fraction",
  "(33-34) Temperature #1/inlet",
  "(35-36) Temperature #2/outlet",
  "(37-38) Analog input AI3",
  "(39-40) Analog input AI4",
  "(41-42) Analog input AI5",
  "(43-44) Current input at AI3",
  "(45-46) Current input at AI3",
  "(47-48) Current input at AI3",
  "(49-50) System password",
  "(51) Password for hardware",
  "(53-55) Calendar",
  "(56) Day+Hour for Auto-Sav",
  "(59) Key to input",
  "(60) Go to Window #",
  "(61) LCD Back-lit lights",
  "(62) Times for the beeper",
  "(62) Pulses left for OCT",
  "(72) Error Code",
  "(77-78) PT100 resistance of inlet",
  "(79-80) PT100 resistance of outlet",
  "(81-82) Total travel time",
  "(83-84) Delta travel time",
  "(85-86) Upstream travel time",
  "(87-88) Downstream travel time",
  "(89-90) Output current",
  "(92) Working step and Signal Quality",
  "(93) Upstream strength",
  "(94) Downstream strength",
  "(96) Language",
  "(97-98) Rate of the measured travel",
  "(99-100) Reynolds number",
];

export const assetTestCase = `2017-01-11 19:12
1:7579
2:48988
3:5064
4:48142
5:37967
6:48877
7:63814
8:17575
9:0
10:0
11:24224
12:15965
13:0
14:0
15:0
16:0
17:87
18:0
19:9891
20:16221
21:65480
22:65535
23:39041
24:48994
25:0
26:0
27:0
28:0
29:144
30:0
31:48777
32:16191
33:15568
34:16611
35:28424
36:16534
37:7424
38:15783
39:14592
40:15758
41:5461
42:49087
43:45184
44:15493
45:36608
46:15459
47:29184
48:15516
49:0
50:0
51:0
52:0
53:6432
54:4386
55:5889
56:0
57:0
58:0
59:0
60:255
61:120
62:0
63:0
64:0
65:0
66:4001
67:62500
68:0
69:0
70:3
71:4
72:4
73:3606
74:16800
75:54913
76:48896
77:35706
78:17101
79:44042
80:17099
81:33339
82:16963
83:42500
84:49530
85:33468
86:16963
87:33210
88:16963
89:2885
90:16512
91:0
92:806
93:3501
94:3501
95:0
96:1
97:43137
98:17105
99:3374
100:17839`;
