"use strict";(self.webpackChunkaq54=self.webpackChunkaq54||[]).push([[386],{4386:(B,Z,g)=>{g.r(Z),g.d(Z,{FeaturesModule:()=>A});var O=g(8583),$=g(7991),f=g(8239),v=g(4123),D=g(6738),n=g(1913),m=g(639),S=g(576);const j=[{component:(()=>{class d{constructor(e,t){this.usecases=e,this.activeRoute=t,this.scatters=[],this.times=[],this.scatterChart=null,this.stationsInfo=[],this.stations=[],this.selectedStation="SMART188",this.sensors=[],this.ranges={start:D().subtract(1,"days").format("YYYY-MM-DD"),end:D().format("YYYY-MM-DD")},this.title="AQ54",this.data={labels:[],datasets:[],options:{scales:{y:{beginAtZero:!0,min:0}}}},this.timeData=[],this.timer=null}ngOnInit(){var e=this;return(0,f.Z)(function*(){e.activeRoute.queryParams.subscribe(function(){var t=(0,f.Z)(function*(a){const{station:i,start:o,end:s}=a;i&&o&&s?(e.ranges.end=s,e.ranges.start=o,e.builder(i)):i?e.builder(i):e.builder()});return function(a){return t.apply(this,arguments)}}())})()}ngOnDestroy(){clearInterval(this.timer)}builder(e=""){var t=this;return(0,f.Z)(function*(){try{if(e){const{raw_data:a,station:i,sessionInfo:o}=yield t.usecases.parallelExecution(e,t.ranges.start,t.ranges.end,t.title);t.selectedStation=i,t.stationsInfo=o,t.stations=t.stationsInfo.map(r=>({station:r.station,selected:r.station==t.selectedStation}));const s=(0,n.UJ)(a,t.stationsInfo[1].integrated_sensors);t.chartData(s)}else{const{raw_data:a,station:i,sessionInfo:o}=yield t.usecases.execute(t.ranges.start,t.ranges.end,t.title);t.stationsInfo=o,t.stations=t.stationsInfo.map((r,l)=>({station:r.station,selected:0==l})),t.selectedStation=i;const s=(0,n.UJ)(a,t.stationsInfo[1].integrated_sensors);t.chartData(s)}t.barBasedChart(),t.scatterBasedChart(),t.timer=setInterval(()=>{t.updateScatter()},5e4)}catch(a){throw new Error(a.message)}})()}chartData(e=[]){const t=(0,n.El)(this.stationsInfo);this.data.labels=t;const a=(0,n.c8)(e,t),i=(0,n.U4)(a);this.data.datasets=i,this.timeData=i,this.timeData=this.timeData.map(s=>Object.assign(Object.assign({},s),{group:Object.entries((0,n.vM)(this.timeData,r=>r.unit)).map(r=>({unit:r[0],values:r[1],label:s.label}))}));const o=[];this.timeData.forEach((s,r)=>{const l=s.group.find(h=>h.unit===s.unit&&!o.find(M=>M==h.unit)),c=s.group.find(h=>h.unit===s.unit),u=c?c.values.find(h=>h.label===s.label):null,p=c?c.values.filter(h=>h.label!=s.label&&h.unit===s.unit):[],C=(0,n.vM)(p,h=>h.label);if(p.length&&u){let h=(0,n.vM)(u.dayValues,b=>b.x),T=Object.entries(C).map(b=>({label:b[0],ydata:(0,n.vM)(b[1][0].dayValues,w=>w.x)})),I=[];Object.keys(h).forEach(b=>{T.forEach(w=>{h[b].forEach((x,R)=>{I.push({data:{y:w.ydata[b][R].y,x:x.y},label:`${w.label}=f(${s.label})`})})})}),s.dayVal=(0,n.vM)(I,b=>b.label)}o.push(null==l?void 0:l.unit),null==l||l.values.forEach(h=>{s.gunit=h.unit,s.dayData=s.dayData?s.dayData.concat(h.dayValues):h.dayValues,s.monthData=s.monthData?s.monthData.concat(h.monthDays):h.monthDays})})}updateScatter(){const e=this.timeData.filter(a=>a.dayVal),t=e[Math.floor(Math.random()*(e.length-1))];if(t){const a={type:"scatter",data:{datasets:Object.entries(t.dayVal).map(i=>({data:i[1].map(s=>Object.assign({},s.data)),label:i[0]})),backgroundColor:(0,n.wo)()},options:{responsive:!0,plugins:{legend:{position:"top"},title:(0,n.qJ)(`Correlation entre les donn\xe9s d'un capteur pris de fa\xe7on aleatoire dans ${this.selectedStation} et le reste des capteurs selon l'unit\xe9 de mesure ${t.unit}. et le temps de transmission des donn\xe9es.`)},scales:{y:{type:"linear",beginAtZero:!0,title:(0,n.qJ)(`autres capteurs(${t.unit})`,(0,n.wo)()),position:"left",ticks:{color:(0,n.wo)()}},x:{type:"linear",position:"bottom",beginAtZero:!0,title:(0,n.qJ)(`${t.label}(${t.unit})`,(0,n.wo)()),ticks:{color:(0,n.wo)()}}}}};this.scatterChart.options=a.options,this.scatterChart.data=a.data,this.scatterChart.update()}}barBasedChart(){try{const t=D(this.ranges.end).diff(D(this.ranges.start),"days")>=30,a=D(this.ranges.start).toLocaleString().split(" ");var e=`${a[1]}/${a[3]}`;t||(e=`${a[2]}/${a[1]}`);const i={type:"bar",data:{datasets:this.timeData.filter(o=>o.gunit).map(o=>({data:t?o.monthData:o.dayData,backgroundColor:(0,n.wo)(),borderColor:(0,n.wo)(),label:`${o.gunit}`,fill:!1,tension:.8}))},options:{responsive:!0,plugins:{legend:{position:"top"},title:(0,n.qJ)(`Distribution temporelle des donn\xe9es selon le type de capteur  dans la station ${this.selectedStation}`)},scales:{x:{min:e}}}};new v.ZP("chart",i)}catch(t){throw new Error(t.message)}}scatterBasedChart(){const e=this.timeData.filter(a=>a.dayVal),t=e[Math.floor(Math.random()*(e.length-1))];if(t){const a={type:"scatter",data:{datasets:Object.entries(t.dayVal).map(i=>({data:i[1].map(s=>Object.assign({},s.data)),label:i[0]})),backgroundColor:(0,n.wo)()},options:{responsive:!0,plugins:{legend:{position:"top"},title:(0,n.qJ)(`Correlation entre les donn\xe9s d'un capteur pris de fa\xe7on aleatoire dans ${this.selectedStation} et le reste des capteurs selon l'unit\xe9 de mesure ${t.unit}. et le temps de transmission des donn\xe9es.`)},scales:{y:{type:"linear",beginAtZero:!0,title:(0,n.qJ)(`autres capteurs(${t.unit})`,(0,n.wo)()),position:"left",ticks:{color:(0,n.wo)()}},x:{type:"linear",position:"bottom",beginAtZero:!0,title:(0,n.qJ)(`${t.label}(${t.unit})`,(0,n.wo)()),ticks:{color:(0,n.wo)()}}}}};this.scatters.push("sc"),setTimeout(()=>{this.scatterChart=new v.ZP("sc",a)},1e3)}}}return d.\u0275fac=function(e){return new(e||d)(m.Y36("diferred:mode"),m.Y36($.gz))},d.\u0275cmp=m.Xpm({type:d,selectors:[["app-diferred-data-chart"]],decls:1,vars:5,consts:[[3,"selectedStation","scatters","times","stations","chart"]],template:function(e,t){1&e&&m._UZ(0,"app-charts",0),2&e&&m.Q6J("selectedStation",t.selectedStation)("scatters",t.scatters)("times",t.times)("stations",t.stations)("chart","chart")},directives:[S.Z],styles:[""]}),d})(),path:"diferred"},{component:(()=>{class d{constructor(e){this.usecases=e,this.sensors=[],this.scatters=[],this.scatterChart=[],this.times=[],this.timeData=[],this.timesCahrt=[],this.title="AQ54",this.time="",this.data={labels:[],datasets:[],options:{scales:{y:{beginAtZero:!0,min:0,max:100}}}},this.stations=[]}ngOnDestroy(){clearInterval(this.time)}ngOnInit(){var e=this;return(0,f.Z)(function*(){try{yield e.onChartsInit(),e.time=setInterval((0,f.Z)(function*(){e.stations.forEach(function(){var t=(0,f.Z)(function*(a){(yield e.usecases.canUpdate(a.sessiond_id))&&e.updateData(a)});return function(a){return t.apply(this,arguments)}}())}),1e3)}catch(t){throw new Error(t.message)}})()}initChartBar(){return new v.ZP("real-time-chart",{data:this.data,options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top"},title:(0,n.qJ)("Distribution des donn\xe9es selon les types de capteurs par station.")}}})}initScatter(e=[]){var t=this.scatterData(e);t.length||(t=this.scatterData(e,4));for(let a=0;a<this.scatters.length;a++){const i={type:"scatter",data:t[a],station:t[a].station,options:{responsive:!0,animations:(0,n.GD)(),plugins:{legend:{position:"top"},title:(0,n.qJ)(`Corelation entre les donn\xe9es d'un capteur pris al\xe9atoirement dans ${t[a].station} et les reste des capteurs.`)},scales:{y:{type:"linear",beginAtZero:!0,title:(0,n.qJ)(`${t[a].sensors.join(",")}(${t[a].unit})`,(0,n.wo)()),position:"left",ticks:{color:(0,n.wo)()}},x:{type:"linear",position:"bottom",beginAtZero:!0,title:(0,n.qJ)(`${t[a].sensor}(${t[a].unit})`,(0,n.wo)()),ticks:{color:(0,n.wo)()}}}}};setTimeout(()=>this.scatterChart.push({config:i,chart:new v.ZP(document.getElementById(this.scatters[a]),i)}),100)}}updateScatter(e=[],t=""){var a=this;return(0,f.Z)(function*(){var i,o;try{const r=a.scatterData(e);if(r.length){const{chart:l}=a.scatterChart.find(c=>c.config.station===t);l.config.data.datasets.forEach(c=>{const u=r[0].datasets.find(p=>p.label===c.label);u&&(c.data=c.data.concat(u.data))}),l.config.options={responsive:!0,animations:(0,n.GD)(),plugins:{legend:{position:"top"},title:(0,n.qJ)(`Correlation entre les donn\xe9s d'un capteur pris de fa\xe7on aleatoire dans ${null===(i=r[0])||void 0===i?void 0:i.station} et le reste des capteurs selon l'unit\xe9 de mesure (${null===(o=r[0])||void 0===o?void 0:o.unit}).`)},scales:{y:{type:"linear",position:"left",beginAtZero:!0,title:(0,n.qJ)(`${r[0].sensors.join(",")}(${r[0].unit})`,(0,n.wo)()),ticks:{color:(0,n.wo)()}},x:{type:"linear",title:{display:!0,text:`${r[0].sensor}(${r[0].unit})`},beginAtZero:!0,position:"bottom",ticks:{color:(0,n.wo)()}}}},l.update()}}catch(s){throw new Error(s.message)}})()}scatterData(e,t=null){let a=[];const i=this.selectedSensor?this.selectedSensor:this.sensors[t||Math.floor(Math.random()*(this.sensors.length-1))];i&&e.forEach(s=>{const r=s.values.filter(c=>{var u;return c.unit?c.unit.toLowerCase()===(null===(u=i.unit)||void 0===u?void 0:u.toLowerCase())&&c.sensor!=i.type:null}),l=s.values.find(c=>c.sensor.toLowerCase()===i.type.toLowerCase());l&&r.length&&a.push({datasets:r.map(c=>({data:[{x:l.value,y:c.value}],label:`${c.sensor}=f(${l.sensor})`})),backgroundColor:(0,n.wo)(),station:s.station_name,unit:null==l?void 0:l.unit,sensor:l.sensor,sensors:r.map(c=>c.sensor)})});let o=[];for(let s=0;s<a.length;s++)o.push(Date.now()+"scattter"+s);return 0==this.scatterChart.length&&(this.scatters=o),a}onChartsInit(){var e=this;return(0,f.Z)(function*(){const t=yield e.chartData();e.chart=e.initChartBar(),e.OntimeSerieChartInit(t),e.initScatter(t)})()}chartData(){var e=this;return(0,f.Z)(function*(){try{const{stations:t,sessionInfo:a}=yield e.usecases.Oninit(e.title);e.stations=a,e.sensors=a[0].integrated_sensors,e.data.labels=(0,n.El)(a);const o=(0,n.Uf)(t,e.data.labels);return e.data.datasets=o,t}catch(t){throw new Error(t.message)}})()}updateData(e){var t=this;return(0,f.Z)(function*(){try{const a=yield t.usecases.OnUpdate(e.station),i=(0,n.Ng)([a],t.data.labels);t.chart.config.data.datasets.filter(o=>o.label===e.station).forEach((o,s)=>{var r;i.find(l=>l.station==o.label)?o.data=null===(r=i.find(l=>l.station==o.label))||void 0===r?void 0:r.data:t.chart.config.data.datasets.splice(s,1)}),t.chart.update(),t.updateTimeSeries(a,e.station),t.updateScatter([a],e.station)}catch(a){throw new Error(a.message)}})()}updateTimeSeries(e,t){var a=this;return(0,f.Z)(function*(){const s=[e].map(u=>({time:u.timestamp,station:u.station_name,values:(0,n.vM)(u.values,p=>p.unit)})).map(u=>Object.assign(Object.assign({},u),{values:Object.entries(u.values).map(p=>p[1])})),{chart:r}=a.timesCahrt.find(u=>u.config.station===t),l={type:"bar",time:s[0].time,data:{datasets:s[0].values.map(u=>({data:u.map(p=>({y:p.value,x:s[0].time})),label:`(${u[0].unit})`,backgroundColor:(0,n.wo)()}))},options:{responsive:!0,plugins:{legend:{position:"top"},title:(0,n.qJ)(`Distribution temporelle des donn\xe9es selon l'unit\xe9 de mesure dans la station ${s[0].station}`)}}};r.config.options.plugins=l.options.plugins;var c=!1;l.data.datasets.forEach(u=>{const p=r.config.data.datasets.find(C=>u.label===C.label);c=!(!p||p.data.find(C=>C.x===s[0].time))&&p.data.push(...u.data)}),c&&r.update()})()}OntimeSerieChartInit(e){var t=this;return(0,f.Z)(function*(){let i=e.map(o=>({time:o.timestamp,station:o.station_name,values:(0,n.vM)(o.values,s=>s.unit)}));i=i.map(o=>Object.assign(Object.assign({},o),{values:Object.entries(o.values).map(s=>s[1])})),i.forEach((o,s)=>{t.times.push(s+"times"+Date.now());const r={type:"line",time:o.time,station:o.station,data:{datasets:o.values.map(l=>({data:l.map(c=>({y:c.value,x:o.time})),label:`(${l[0].unit})`,backgroundColor:(0,n.wo)(),borderColor:(0,n.wo)(),fill:!1,tension:.8}))},options:{responsive:!0,animations:(0,n.GD)(),plugins:{legend:{position:"top"},title:(0,n.qJ)(`Distribution temporelle des donn\xe9es selon l'unit\xe9 de mesure dans la station ${o.station}`)},scales:{x:{min:o.time},y:{min:0}}}};setTimeout(()=>{let l=new v.ZP(t.times[s],r);t.timesCahrt.push({chart:l,config:r})},1e3)})})()}}return d.\u0275fac=function(e){return new(e||d)(m.Y36("realTime:mode"))},d.\u0275cmp=m.Xpm({type:d,selectors:[["app-real-time-chart"]],decls:1,vars:2,consts:[[3,"scatters","times"]],template:function(e,t){1&e&&m._UZ(0,"app-charts",0),2&e&&m.Q6J("scatters",t.scatters)("times",t.times)},directives:[S.Z],styles:[""]}),d})(),path:"real-time"}];let E=(()=>{class d{}return d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[[$.Bz.forChild(j)],$.Bz]}),d})();var J=g(3704);let A=(()=>{class d{}return d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[[O.ez,E,J.m8]]}),d})()}}]);