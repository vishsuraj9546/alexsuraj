"use strict";(()=>{var e={};e.id=409,e.ids=[409],e.modules={3480:(e,r,t)=>{e.exports=t(5600)},5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6033:(e,r,t)=>{t.r(r),t.d(r,{config:()=>g,default:()=>f,routeModule:()=>E});var s={};t.r(s),t.d(s,{default:()=>p});var o=t(3480),a=t(8667),n=t(6435),i=t(8096);let c=require("nodemailer");var l=t.n(c);let u={service:"gmail",user:"sr6447868@gmail.com",pass:"chmpxzhcgfaqnawy",to:"sr6447868@gmail.com"},d=l().createTransport({service:u.service,auth:{user:u.user,pass:u.pass}}),m=async(e,r,t)=>{try{let s={from:u.user,to:u.to,subject:`New Contact Form Message from ${e}`,html:`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Contact Details:</h3>
            <p><strong>Name:</strong> ${e}</p>
            <p><strong>Email:</strong> ${r}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ef4444; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${t}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f0f0f0; border-radius: 8px;">
            <p style="color: #666; margin: 0;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `};return await d.sendMail(s),{success:!0}}catch(e){return console.error("Email send error:",e),{success:!1,error:e}}};async function p(e,r){if("POST"!==e.method)return r.status(405).json({error:"Method not allowed"});try{let{name:t,email:s,message:o}=e.body;if(!t||!s||!o)return r.status(400).json({error:"All fields are required"});if(o.length>500)return r.status(400).json({error:"Message must be 500 characters or less"});if(!(await (0,i.yU)(t,s,o)).success)return r.status(500).json({error:"Failed to save message"});let a=await m(t,s,o);return a.success||console.error("Email notification failed:",a.error),r.status(200).json({message:"Message sent successfully!",emailSent:a.success})}catch(e){return console.error("API Error:",e),r.status(500).json({error:"Internal server error"})}}let f=(0,n.M)(s,"default"),g=(0,n.M)(s,"config"),E=new o.PagesAPIRouteModule({definition:{kind:a.A.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:s})},6435:(e,r)=>{Object.defineProperty(r,"M",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},8096:(e,r,t)=>{t.d(r,{zm:()=>c,yU:()=>i});let s=require("sqlite3"),o=new(t.n(s)().verbose()).Database("./contacts.db"),a=(e,r=[])=>new Promise((t,s)=>{o.run(e,r,function(e){e?s(e):t()})}),n=(e,r=[])=>new Promise((t,s)=>{o.all(e,r,(e,r)=>{e?s(e):t(r)})}),i=async(e,r,t)=>{try{return await a("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",[e,r,t]),{success:!0}}catch(e){return console.error("❌ Insert contact error:",e),{success:!1,error:e}}},c=async()=>{try{return await n("SELECT * FROM contacts ORDER BY created_at DESC")}catch(e){return console.error("❌ Get contacts error:",e),[]}};(async()=>{try{await a(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),console.log("✅ Database initialized successfully")}catch(e){console.error("❌ Database initialization error:",e)}})()},8667:(e,r)=>{Object.defineProperty(r,"A",{enumerable:!0,get:function(){return t}});var t=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=6033);module.exports=t})();