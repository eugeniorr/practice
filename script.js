var canv = document.getElementById("mycanvas1");
var ctx = canv.getContext('2d');

var x=[
27.429,
34.286,
42.667,
50.286,
57.905,
68.571,
80,
86.857,
98.286,
104.38,
108.95,
118.1,
125.71,
136.38,
144,
150.86,
151.62,
150.86,
149.33,
134.86,
127.24,
124.19,
119.62,
108.19,
105.9,
115.05,
118.86,
122.67,
129.52,
134.1,
146.29,
150.1,
155.43,
163.81,
173.71,
165.33,
156.95,
146.29,
138.67,
128.76,
118.86,
115.05,
118.86,
129.52,
137.14,
147.05,
156.19,
166.86,
172.95,
171.43,
167.62,
163.81,
158.48,
153.9,
150.1,
149.33,
144.76,
137.9,
129.52,
124.19,
118.1,
115.05,
113.52,
107.43,
105.14,
102.86,
98.286,
96,
92.952,
91.429,
91.429,
91.429,
95.238,
97.524,
101.33,
106.67,
110.48,
115.81,
118.1,
116.57,
115.05,
112,
111.24,
109.71,
108.19,
106.67,
106.67,
108.95,
112.76,
117.33,
122.67,
124.95,
128,
124.95,
123.43,
125.71,
129.52,
133.33,
137.14,
141.71,
142.48,
137.9,
134.86,
131.81,
127.24,
128.76,
142.48,
146.29,
151.62,
151.62,
150.1,
143.24,
139.43,
137.9,
137.9,
144.76,
149.33,
154.67,
160,
166.1,
172.95,
181.33,
183.62,
177.52,
171.43,
161.52,
155.43,
150.1,
149.33,
147.05,
142.48,
141.71,
140.95,
139.43,
140.95,
146.29,
156.95,
162.29,
174.48,
184.38,
192.76,
183.62,
172.95,
163.05,
156.95,
147.81,
137.14,
134.1,
135.62,
137.9,
139.43,
137.9,
132.57,
124.95,
120.38,
118.1,
116.57,
112,
108.95,
107.43,
103.62,
101.33,
94.476,
89.143,
85.333,
87.619,
89.905,
89.905,
100.57,
103.62,
109.71,
115.05,
116.57,
115.81,
114.29,
108.95,
104.38,
99.81,
98.286,
96,
96,
96.762,
96,
96,
94.476,
88.381,
86.857,
86.095,
87.619,
92.19,
92.19,
92.952,
92.952,
93.714,
92.19,
86.857,
84.571,
81.524,
80.762,
80.762,
76.952,
76.19,
73.143,
71.619,
68.571,
73.905,
77.714,
86.857,
92.952,
99.048,
108.95,
124.95,
137.14,
144.76,
156.19,
165.33,
179.05,
195.05,
203.43,
219.43,
232.38,
250.67,
259.05,
262.86,
271.24,
278.86,
287.24,
290.29,
295.62,
298.67,
300.95,
300.95,
300.95,
300.95,
299.43,
299.43,
295.62,
296.38,
292.57,
288.76,
283.43,
275.05,
270.48,
270.48,
265.14,
262.1,
264.38,
266.67,
269.71,
272.76,
276.57,
281.14,
286.48,
288,
288.76,
288.76,
287.24,
283.43,
275.05,
271.24,
276.57,
281.14,
284.19,
285.71,
283.43,
281.14,
275.05,
275.05,
272,
268.19,
263.62,
265.14,
264.38,
259.81,
262.1,
258.29,
259.05,
260.57,
265.14,
271.24,
275.81,
281.14,
284.95,
288.76,
292.57,
294.86,
295.62,
297.14,
297.9,
300.95,
297.14,
296.38,
294.1,
291.05,
289.52,
286.48,
283.43,
279.62,
280.38,
275.05,
272.76,
272.76,
273.52,
277.33,
285.71,
291.05,
293.33,
294.86,
297.14,
293.33,
288.76,
281.14,
270.48,
264.38,
258.29,
249.9,
240.76,
236.19,
230.86,
225.52,
220.19,
215.62,
212.57,
201.9,
193.52,
182.1,
166.1,
157.71,
147.05,
138.67,
128.76,
112.76,
105.14,
96.762,
93.714,
90.667,
90.667,
84.571,
82.286,
78.476,
74.667,
74.667,
74.667,
73.143,
70.857,
78.476,
87.619,
96,
108.19,
118.86,
128,
135.62,
149.33,
163.05,
172.95,
187.43,
201.9,
217.9,
233.14,
245.33,
255.24,
263.62,
283.43,
289.52,
295.62,
297.14,
300.95,
302.48,
303.24,
297.14,
291.81,
288.76,
282.67,
275.81,
272.76,
271.24,
272,
273.52,
275.05,
279.62,
283.43,
285.71,
281.9,
275.81,
266.67,
251.43,
236.95,
221.71,
208,
191.24,
178.29,
163.05,
150.86,
148.57,
169.14,
188.95,
205.71,
218.67,
241.52,
257.52,
267.43,
281.14,
288.76,
296.38,
307.81,
323.81,
329.9,
340.57,
350.48,
361.9,
373.33,
385.52,
395.43,
399.24,
398.48
]

var y=[

397.59,
394.38,
387.95,
386.35,
380.72,
379.12,
376.71,
373.49,
371.08,
368.67,
367.87,
367.07,
363.86,
357.43,
354.22,
350.2,
344.58,
338.96,
337.35,
332.53,
325.3,
315.66,
305.22,
294.78,
287.55,
279.52,
283.53,
285.94,
286.75,
286.75,
286.75,
282.73,
277.91,
273.9,
266.67,
266.67,
268.27,
273.09,
274.7,
276.31,
277.11,
277.11,
273.09,
269.88,
267.47,
266.67,
264.26,
262.65,
264.26,
266.67,
269.08,
272.29,
274.7,
277.91,
280.32,
285.14,
285.14,
286.75,
287.55,
286.75,
285.14,
280.32,
281.12,
285.94,
286.75,
282.73,
274.7,
272.29,
265.06,
259.44,
246.59,
236.14,
226.51,
215.26,
211.24,
210.44,
206.43,
204.02,
203.21,
209.64,
212.85,
217.67,
223.29,
231.33,
235.34,
240.96,
244.98,
249,
249.8,
251.41,
253.01,
253.01,
252.21,
249,
245.78,
244.98,
244.98,
244.18,
243.37,
244.98,
246.59,
246.59,
249,
249.8,
249.8,
249.8,
244.18,
243.37,
240.96,
236.14,
229.72,
223.29,
219.28,
215.26,
207.23,
199.2,
196.79,
197.59,
197.59,
196.79,
192.77,
189.56,
186.35,
183.13,
182.33,
182.33,
182.33,
185.54,
190.36,
196.79,
197.59,
195.18,
187.15,
184.74,
180.72,
175.9,
174.3,
173.49,
172.69,
171.08,
168.67,
163.86,
161.45,
161.45,
161.45,
163.05,
167.87,
170.28,
174.3,
178.31,
183.94,
186.35,
187.15,
187.15,
190.36,
192.77,
195.18,
191.97,
189.56,
186.35,
184.74,
184.74,
183.94,
185.54,
191.16,
196.79,
199.2,
195.98,
190.36,
189.56,
189.56,
195.18,
199.2,
203.21,
201.61,
198.39,
198.39,
200,
200.8,
205.62,
211.24,
216.06,
220.08,
213.65,
208.03,
201.61,
196.79,
189.56,
185.54,
177.51,
170.28,
163.86,
155.82,
153.41,
146.18,
133.33,
124.5,
127.71,
131.73,
133.33,
130.92,
122.09,
116.47,
107.63,
77.912,
77.108,
70.683,
71.486,
70.683,
65.06,
59.438,
57.831,
48.996,
46.586,
44.98,
40.964,
39.357,
38.554,
39.357,
44.98,
49.799,
52.209,
57.028,
62.651,
69.88,
77.912,
86.747,
95.582,
106.83,
116.47,
126.91,
140.56,
151.81,
166.27,
176.71,
181.53,
173.49,
169.48,
160.64,
155.02,
153.41,
156.63,
163.86,
171.08,
178.31,
186.35,
187.95,
184.74,
179.92,
175.1,
164.66,
163.86,
171.89,
178.31,
184.74,
192.77,
195.18,
191.16,
185.54,
185.54,
183.94,
187.15,
191.97,
195.98,
201.61,
204.82,
204.82,
207.23,
209.64,
211.24,
208.03,
200.8,
195.18,
197.59,
206.43,
214.46,
219.28,
227.31,
228.11,
228.11,
226.51,
223.29,
217.67,
210.44,
202.41,
197.59,
188.76,
182.33,
177.51,
180.72,
195.18,
201.61,
210.44,
219.28,
226.51,
233.73,
240.16,
248.19,
244.98,
253.01,
258.63,
242.57,
232.13,
226.51,
218.47,
213.65,
204.02,
193.57,
181.53,
163.86,
151.81,
150.2,
162.25,
173.49,
178.31,
178.31,
171.08,
163.86,
152.61,
141.37,
126.1,
110.84,
102.81,
102.01,
104.42,
106.02,
107.63,
107.63,
106.83,
107.63,
111.65,
115.66,
122.09,
132.53,
144.58,
149.4,
137.35,
128.51,
124.5,
136.55,
126.1,
118.88,
111.65,
93.976,
82.731,
77.108,
71.486,
69.076,
59.438,
57.831,
54.618,
47.39,
43.373,
40.964,
38.554,
36.948,
36.948,
41.767,
47.39,
49.799,
56.225,
65.06,
80.321,
93.173,
110.84,
125.3,
147.79,
162.25,
182.33,
197.59,
209.64,
225.7,
239.36,
248.19,
259.44,
270.68,
279.52,
291.57,
304.42,
311.65,
319.68,
325.3,
333.33,
338.96,
342.97,
344.58,
349.4,
353.41,
356.63,
360.64,
362.25,
361.45,
355.02,
354.22,
360.64,
363.05,
362.25,
358.23,
351.81,
347.79,
341.37,
334.14,
325.3,
320.48,
322.89,
325.3,
327.71,
327.71,
327.71,
327.71,
327.71,
325.3,
325.3,
325.3,
325.3
]

ctx.beginPath();
ctx.moveTo(x[0],y[0]);
for (let i=1;i<x.length;i++) {
	ctx.lineTo(x[i],y[i]);
}
ctx.closePath();
ctx.stroke();
